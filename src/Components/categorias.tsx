import styles from '../Styles/categorias.module.scss'
import dog1 from '../Assets/dog1.svg'
import dog2 from '../Assets/dog2.svg'
import dog3 from '../Assets/dog3.svg'
import dog4 from '../Assets/dog4.svg'
import {
    AiOutlineLeft,
    AiOutlineRight
 } from 'react-icons/ai'

export default function Categorias(){
    return(
        <div className={styles.container}>
            <h1>Categorias</h1>
            <div id={styles.categoriaLeft}>
                <AiOutlineLeft size={15}/>
            </div>
            <div className={styles.dogs}>
                <div id={styles.dog1}>
                <img src={dog1} alt='Cachorro com bola'></img>
                </div>
                <div id={styles.dog2}>
                <img src={dog2} alt='Cachorro com bola'></img>
                </div>
                <div id={styles.dog3}>
                <img src={dog3} alt='Cachorro com bola'></img>
                </div>
                <div id={styles.dog4}>
                <img src={dog4} alt='Cachorro com bola'></img>
                </div>
            </div>
            <div id={styles.categoriaRight}>
                <AiOutlineRight size={15}/>
            </div>
        </div>
    )
}