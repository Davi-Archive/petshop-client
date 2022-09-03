import styles from '../Styles/ConfiraBlog.module.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
import { fetchData } from './Api/FetchData';

export default function ConfiraBlog() {

  const [data, setData] = useState([]);

  function pullData(){
    fetchData().then((res)=>{
      setData(res.blogData)
    })
  }

  useEffect(()=>{
   pullData()
  }, [])

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
        {data.map(({ photo }:any) => {
          return (
            <>
               <div key={uuidv4()} className="d-flex justify-content-around gap-3">
                <Card key={uuidv4()} style={{ width: '18rem' }}>
                  <Card.Img key={uuidv4()} variant="top" src={photo}/>
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