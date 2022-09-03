import styles from '../Styles/Marcas.module.scss'
import marca1 from '../Assets/marca1.svg'
import marca2 from '../Assets/marca2.svg'
import marca3 from '../Assets/marca3.svg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


export default function Marcas() {
 const resposta = [
    { image: marca1 },
    { image: marca2 },
    { image: marca3 },
    { image: marca1 },
    { image: marca2 },
    { image: marca3 },
    { image: marca1 },
    { image: marca2 },
    { image: marca3 }
  ]

  

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
        {resposta.map((data, key) => {
          return (
            <div key={key} className={styles.marcaBox}>
              <div className={styles.productName}>
                <img src={data.image} alt='Foto do Produto'></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}