import styles from '../Styles/Instagram.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { fetchData } from './Api/FetchData'


export default function Instagram() {

  const [data, setData] = useState([])

  function pullData(){
    fetchData().then((res)=>{
      setData(res.instaData)
    })
  }

  useEffect(() => {
    pullData()
  },[])

  function clickRight() {
    var instagram = document.getElementById(styles.barraInsta);
    return instagram!.scrollLeft += 178;
  }
  function clickLeft() {
    var instagram = document.getElementById(styles.barraInsta);
    return instagram!.scrollLeft -= 178;
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