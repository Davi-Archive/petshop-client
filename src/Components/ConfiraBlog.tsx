import styles from '../Styles/ConfiraBlog.module.scss'
import blog1 from '../Assets/blog1.svg'
import blog2 from '../Assets/blog2.svg'
import blog3 from '../Assets/blog3.svg'
import blog4 from '../Assets/blog4.svg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ConfiraBlog() {
  const resposta = [
    { image: blog1 },
    { image: blog2 },
    { image: blog3 },
    { image: blog4 },
    { image: blog1 },
    { image: blog2 },
    { image: blog3 },
    { image: blog4 },
    { image: blog1 }
  ]

  function clickBlogRight() {
    var blog = document.getElementById(styles.barraBlog)
    return blog!.scrollLeft += 307;
  }
  function clickBlogLeft() {
    var blog = document.getElementById(styles.barraBlog)
    return blog!.scrollLeft -= 307;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.titulo}>
        <h1>Confira o nosso Blog</h1>
      </div>
      <div id={styles.buttonLeft} onClick={clickBlogLeft}>
        <AiOutlineLeft size={15} />
      </div>
      <div id={styles.buttonRight} onClick={clickBlogRight}>
        <AiOutlineRight size={15} />
      </div>
      <div id={styles.barraBlog}>
        {resposta.map((data, key) => {
          return (
            <div key={key} className={styles.blogBox}>
              <div className={styles.logoPhoto}>
                <img className={styles.imgBox} src={data.image} alt='Foto do Produto'></img>
              </div>
              <div className={styles.textBox}>
                <div className={styles.boxTitulo}>
                Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className={styles.boxDes}>
                Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                </div>
                <div>
                  <button className={styles.buttonEnviar}>Ler artigo</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}