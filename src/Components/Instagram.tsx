import styles from '../Styles/Instagram.module.scss'
import insta1 from '../Assets/insta1.svg'
import insta2 from '../Assets/insta2.svg'
import insta3 from '../Assets/insta3.svg'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'


export default function Instagram() {


  const resposta = [
    { image: insta1 },
    { image: insta2 },
    { image: insta3 },
    { image: insta1 },
    { image: insta2 },
    { image: insta3 },
    { image: insta1 },
    { image: insta2 },
    { image: insta3 }
  ]

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
        {resposta.map((data, key) => {
          return (
            <div key={key} className={styles.instaBox}>
              <div className={styles.productName}>
                <img src={data.image} height='243px' alt='Foto Cachorro'></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}