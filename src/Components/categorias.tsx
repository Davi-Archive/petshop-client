import styles from '../Styles/categorias.module.scss'
import {
    AiOutlineLeft,
    AiOutlineRight
} from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';



export default function Categorias() {
    const [data, setData] = useState<any[]>([])
    const ref: any = useRef(null);

    function clickRight() {
        ref.current.scrollLeft += 300;
    }
    function clickLeft() {
        ref.current.scrollLeft -= 300;
    }
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/davi38/pet-shop-site/main/src/Assets/dog.json')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setData(data.categoryDogs)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])
    return (
        <>
            <div className={styles.container}>
                <h1>Categorias</h1>
                <div className={styles.barraBotao}>
                    <div id={styles.categoriaLeft} onClick={clickLeft}>
                        <AiOutlineLeft size={15} />
                    </div>
                    <div ref={ref} id={styles.barraCard}>
                        {data.map(({ photo }: any) => {
                            return (
                                <>
                                    <div key={uuidv4()} className="d-flex justify-content-around">
                                        <Card style={{ width: '18rem', marginRight: '0.8rem' }}>
                                            <Card.Img variant="top" src={photo} />
                                        </Card>
                                    </div>
                                </>
                            );
                        })}

                    </div>
                    <div id={styles.categoriaRight} onClick={clickRight}>
                        <AiOutlineRight size={15} />
                    </div>
                </div>
            </div>
        </>
    )
}