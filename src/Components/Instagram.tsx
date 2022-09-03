import styles from '../Styles/Instagram.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'


export default function Instagram() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/all_data.json')
      .then(async resposta => {
        const data = await resposta.json();
        if (!resposta.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || resposta.statusText;
          return Promise.reject(error);
      }
        setData(data.instaData)
      }
      )
      .catch(error => {
        console.error('There was an error!', error);
    });
  },[])

  function clickRight() {
    var instagram = document.getElementById(styles.barraInsta);
    return instagram!.scrollLeft += 245;
  }
  function clickLeft() {
    var instagram = document.getElementById(styles.barraInsta);
    return instagram!.scrollLeft -= 245;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.titulo}>
        <h1>Instagram</h1>
        <div id={styles.divSeguir}>
          +Seguir
        </div>
      </div>
      <div id={styles.buttonLeft} onClick={clickLeft}>
        <AiOutlineLeft size={15} />
      </div>
      <div id={styles.buttonRight} onClick={clickRight}>
        <AiOutlineRight size={15} />
      </div>

      <div id={styles.barraInsta}>
        {data.map(({photo}, key) => {
          return (
            <div key={key} className={styles.instaBox}>
              <div className={styles.productName}>
                <img src={photo} height='243px' alt='Foto Cachorro'></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}