import styles from '../Styles/Card.module.scss'
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart } from 'react-icons/ai'
import { FaCircle } from 'react-icons/fa'
import { BiCircle } from 'react-icons/bi'
import { useState } from 'react'

interface CardProps{
  data: any,
}

export default function Card({data}:CardProps) {

  function financial(x: string) {
    return ('R$' + (Number.parseFloat(x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')));
  }
  function discount(x: string) {
    let result = Number.parseFloat(x) - 100
    return 'R$' + (result.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
  }
  function clickRight() {
    const produtos = document.getElementById(styles.barraCard)
    return produtos!.scrollLeft += 307;
  }
  function clickLeft() {
    const produtos = document.getElementById(styles.barraCard)
    return produtos!.scrollLeft -= 307;
  }


  function scroll(x: number) {
    var produtos = document.getElementById(styles.barraCard)
    produtos!.scrollTo(x, 0)
    return produtos!.scrollLeft -= 307;
  }

  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const [button5, setButton5] = useState(true);

  return (
    <>
      <div className={styles.wrapper}>
          {/* botoes de movimentar */}
          <div id={styles.buttonLeft} onClick={clickLeft}>
            <AiOutlineLeft size={20} />
          </div>
          <div id={styles.buttonRight} onClick={clickRight}>
            <AiOutlineRight size={20} />
          </div>
        <div id={styles.barraCard} className='barraCardRoll'>
          {data?.map((data: any, key: any)=> {
            return (
              <div key={key} className={styles.cardMain}>
                <img src={data.photo} alt='Foto do Produto'></img>
                <div className={styles.textTop}>
                  40% Off
                </div>
                <div className={styles.heartIcon}>
                  <AiOutlineHeart size={30} />
                </div>
                <div className={styles.productName}>{data.productName}</div>
                {/* <p> {data.descriptionShort} </p> */}
                <div className={styles.dePreco}> De: {financial(data.price)} </div>
                <div className={styles.porPreco}> Por: {financial(data.price)} </div>
                <div className={styles.assinantePreco}> {discount(data.price)} </div>
                <div className={styles.paraAssinantes}>Para assinantes</div>
                <div className={styles.botaoAdicionar}>Adicionar</div>
              </div>
            );
          })}
        </div>
        <div id={styles.bottomCard}>
          <div id={styles.verTodos}>
            Ver Todos
          </div>
          <div className={styles.botoesBottom}>
            <div
              className={styles.circle}
              onMouseEnter={() => setButton1(false)}
              onMouseLeave={() => setButton1(true)}
              onClick={() => scroll(-500)}
            >
              {
                (!button1) ? (<FaCircle />) : (<BiCircle />)
              }
            </div>
            <div
              className={styles.circle}
              onMouseEnter={() => setButton2(false)}
              onMouseLeave={() => setButton2(true)}
              onClick={() => scroll(-200)}
            >
              {
                (!button2) ? (<FaCircle />) : (<BiCircle />)
              }
            </div>
            <div
              className={styles.circle}
              onMouseEnter={() => setButton3(false)}
              onMouseLeave={() => setButton3(true)}
              onClick={() => scroll(0)}>
              {
                (!button3) ? (<FaCircle />) : (<BiCircle />)
              }
            </div>
            <div
              className={styles.circle}
              onMouseEnter={() => setButton4(false)}
              onMouseLeave={() => setButton4(true)}
              onClick={() => scroll(500)}>
              {
                (!button4) ? (<FaCircle />) : (<BiCircle />)
              }
            </div>
            <div
              className={styles.circle}
              onMouseEnter={() => setButton5(false)}
              onMouseLeave={() => setButton5(true)}
              onClick={(() => scroll(1000))}>
              {
                (!button5) ? (<FaCircle />) : (<BiCircle />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
