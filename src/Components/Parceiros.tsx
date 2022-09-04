import styles from '../Styles/Parceiros.module.scss'
import dogImg from '../Assets/card2.svg'
import { FaCircle } from 'react-icons/fa'
import { BiCircle } from 'react-icons/bi'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Parceiros() {
    const [button1, setButton1] = useState(true)  //botão desmarcado de começo com true condição em ? para melhor fatoração
    const [button2, setButton2] = useState(true)
    const [button3, setButton3] = useState(true)

    return (
        <div id={styles.parceirosTudo}>
            <Container>
                <Row>
                    <Col>
                        <div id={styles.parceiros}>
                            <div id={styles.gradient}>
                                <div id={styles.tituloParc}>
                                    Parceiros
                                </div>
                                <div id={styles.textoParc}>
                                    Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div id={styles.buttonParc}>
                                    Confira
                                </div>
                            </div>
                        </div>
                        <div id={styles.dotsThree}>
                            <div className={styles.circle} onMouseEnter={() => setButton1(false)} onMouseLeave={() => setButton1(true)}>
                                {
                                    (!button1) ? (<FaCircle />) : (<BiCircle />)
                                }
                            </div>
                            <div className={styles.circle} onMouseEnter={() => setButton2(false)} onMouseLeave={() => setButton2(true)}>
                                {
                                    (!button2) ? (<FaCircle />) : (<BiCircle />)
                                }
                            </div>
                            <div className={styles.circle} onMouseEnter={() => setButton3(false)} onMouseLeave={() => setButton3(true)}>
                                {
                                    (!button3) ? (<FaCircle />) : (<BiCircle />)
                                }
                            </div>

                        </div>
                    </Col>
                    <Col>
                    <div id={styles.assinaturaTudo}>
                        <div id={styles.assinatura}>
                            <div id={styles.tituloAssi}>
                                Assinatura Cãoselheiro
                            </div>
                            <div id={styles.textoAssi}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.
                            </div>
                            <div id={styles.botaoAssi}>
                                Saiba Mais
                            </div>
                            <div id={styles.dogPhoto}>
                                <img src={dogImg} alt='Foto de um Cachorro'></img>
                            </div>
                        </div>

                    </div>

                    </Col>
                </Row>
            </Container>



        </div>
    )
}