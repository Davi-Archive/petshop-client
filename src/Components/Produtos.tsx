import { useEffect, useState } from "react";
import Card from "./Card";
import styles from '../Styles/Produtos.module.scss'

export default function Produtos() {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/all_data.json')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setData(data.products)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])

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