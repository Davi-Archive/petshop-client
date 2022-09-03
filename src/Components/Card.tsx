import styles from '../Styles/Card.module.scss'
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart } from 'react-icons/ai'
import { FaCircle } from 'react-icons/fa'
import { BiCircle } from 'react-icons/bi'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'




export default function Card({ data }: any) {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const [button5, setButton5] = useState(true);

  const [show, setShow] = useState(false);
  const [modalProductName, setModalProductName] = useState('')
  const [modalDescriptionShort, setModalDescriptionShort] = useState('')
  const [modalPrice, setModalPrice] = useState(0)
  const [modalPhoto, setModalPhoto] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  function adicionarProduto(productName: string, price: number, descriptionShort: string, photo: any) {
    /* handleShow(); */
    console.log(productName, price, descriptionShort, photo)
    handleShow()
    setModalProductName(productName)
    setModalPrice(price)
    setModalDescriptionShort(descriptionShort)
    setModalPhoto(photo)
  }

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
          {data?.map(({ productName, price, descriptionShort, photo }: any) => {
            return (
              <>
                <div key={uuidv4()} className={styles.cardMain}>
                  <img key={uuidv4()} src={photo} alt='Foto do Produto'></img>
                  <div  key={uuidv4()} className={styles.textTop}>
                    40% Off
                  </div>
                  <div key={uuidv4()} className={styles.heartIcon}>
                    <AiOutlineHeart size={30} />
                  </div>
                  <div key={uuidv4()} className={styles.productName}>{productName}</div>
                  <div key={uuidv4()} className={styles.dePreco}> De: {financial(price)} </div>
                  <div key={uuidv4()} className={styles.porPreco}> Por: {financial(price)} </div>
                  <div key={uuidv4()} className={styles.assinantePreco}> {discount(price)} </div>
                  <div key={uuidv4()} className={styles.paraAssinantes}>Para assinantes</div>
                  <div key={uuidv4()} className={styles.botaoAdicionar} onClick={() => adicionarProduto(productName, price, descriptionShort, photo)}>Adicionar</div>
                </div>
                <Modal key={uuidv4()} show={show} onHide={handleClose}>
                  <Modal.Header closeButton key={uuidv4()}>
                    <ModalTitle key={uuidv4()}>{modalProductName}</ModalTitle>
                  </Modal.Header>
                  <Modal.Body key={uuidv4()}>
                    <div key={uuidv4()} className='text-center'>
                      <p key={uuidv4()} >
                        <img  key={uuidv4()} src={modalPhoto} alt={`Foto do ${modalProductName}`} />
                      </p>
                      <p key={uuidv4()}>
                        Descrição: {modalDescriptionShort}
                      </p>
                      <p key={uuidv4()}>
                        Preço: {modalPrice}
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer key={uuidv4()}>
                    <Button key={uuidv4()} variant="secondary" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button key={uuidv4()} variant="primary" onClick={handleClose}>
                      Comprar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
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
