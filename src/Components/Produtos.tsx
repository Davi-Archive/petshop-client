import { useEffect, useState } from "react";
import Card from "./Card";
import styles from '../Styles/Produtos.module.scss'
import jsonData from '../Assets/produtos.json'


export default function Produtos() {
    const [data, setData] = useState<any>();


    function getProducts() {
        const response = jsonData
        setData(response.products)
    }

    useEffect(() => {
        getProducts();
    });


    return (
        <div className={styles.wrapper}>
            <div className={styles.barraTitulo}>
                <div className={styles.titulo}>
                    <h1>Produtos</h1>
                </div>
                <div className={styles.barraBotoes}>
                    <div id={styles.botaoTitulo1}>
                        É Agitado
                    </div>
                    <div id={styles.botaoTitulo2}>
                        Morde
                    </div>
                    <div id={styles.botaoTitulo3}>
                        Late Muito
                    </div>
                    <div id={styles.botaoTitulo4}>
                        É Ansioso
                    </div>
                    <div id={styles.botaoTitulo5}>
                        É Estressado
                    </div>
                </div>
            </div>
            <Card data={data} />
            <p></p>
        </div>
    )
}