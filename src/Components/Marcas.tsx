import styles from '../Styles/Marcas.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'


export default function Marcas() {

const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/all_data.json')
    .then(async (resposta)=>{
      const data = await resposta.json()

      // check for error response
       if (!resposta.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || resposta.statusText;
        return Promise.reject(error);
    }
      setData(data.marcaData)
    })
    .catch(error => {
      console.error('There was an error!', error);
  });
  })



  function clickRight() {
    var marcas = document.getElementById(styles.barraMarca)
    return marcas!.scrollLeft += 240;
  }
  function clickLeft() {
    var marcas = document.getElementById(styles.barraMarca)
    return marcas!.scrollLeft -= 240;
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.titulo}>
        <h1>Principais Marcas</h1>
      </div>
      <div id={styles.buttonLeft} onClick={clickLeft}>
        <AiOutlineLeft size={15} />
      </div>
      <div id={styles.buttonRight} onClick={clickRight}>
        <AiOutlineRight size={15} />
      </div>
      <div id={styles.barraMarca}>
        {data.map(({marca}, key) => {
          return (
            <div key={key} className={styles.marcaBox}>
              <div className={styles.productName}>
                <img src={marca} alt='Foto do Produto'></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}