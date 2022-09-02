import styles from '../Styles/Inscrevase.module.scss'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import dogTopo from '../Assets/dogTopo.svg'


export default function Inscrevase() {
    return (
        <div id={styles.bigBox}>
            <div id={styles.dogTopo}>
            <img src={dogTopo} alt='Cachorro olhando para o Cadastrante'></img>
            </div>
            <div id={styles.box}>
                <div id={styles.tituloInsc}>
                    Se inscreva para receber novidades e promoções
                </div>
                <div id={styles.divNome}>
                    <div id={styles.divIconNome}>
                    <AiOutlineUser size={35} />
                    </div>
                    <input id={styles.inputNome} placeholder='Digite seu nome' type='text'></input>
                </div>
                <div id={styles.divEmail}>
                    <div id={styles.divIconEmail}>
                        <AiOutlineMail size={35} />
                    </div>
                    <input id={styles.inputMail} placeholder='Digite seu e-mail' type='text'></input>
                </div>
                <div>
                    <button id={styles.botaoEnviar}>Enviar</button>
                </div>
            </div>
        </div>
    )
}