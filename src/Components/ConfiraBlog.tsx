import styles from '../Styles/ConfiraBlog.module.scss'
import blog1 from '../Assets/blog1.svg'
import blog2 from '../Assets/blog2.svg'
import blog3 from '../Assets/blog3.svg'
import blog4 from '../Assets/blog4.svg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
import { setEnvironmentData } from 'worker_threads'

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

  const [data, setData] = useState();

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/all_data.json')
    .then(async response => {
      const data = await response.json();
      setData(data.blogData)
    })
  }, [])

console.log(data)

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
        {resposta.map(({image}, key) => {
          return (
            <>
               <div key={uuidv4()} className="d-flex justify-content-around gap-3">
                <Card key={uuidv4()} style={{ width: '18rem' }}>
                  <Card.Img key={uuidv4()} variant="top" src={image}/>
                  <Card.Body key={uuidv4()} >
                    <Card.Title key={uuidv4()} >Lorem ipsum dolor sit amet consectetur.</Card.Title>
                    <Card.Text key={uuidv4()} >
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.
                    </Card.Text>
                    <Button key={uuidv4()} variant="primary">Ler artigo</Button>
                  </Card.Body>
                </Card>
              </div>

            </>
          );
        })}
      </div>
    </div>
  )
}