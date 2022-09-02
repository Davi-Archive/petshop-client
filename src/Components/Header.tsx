import { useState } from 'react';
import {
    BsShieldCheck,
    BsCreditCard,
    BsTruck,
    BsSearch,
    BsCart3,
    BsHeart
} from 'react-icons/bs';
import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineDown
} from 'react-icons/ai'
import { TbCrown } from 'react-icons/tb'
import { BiUserCircle, BiCircle } from 'react-icons/bi'
import { FaCircle } from 'react-icons/fa'
import caoselheiro from '../Assets/caoselheiro.svg'
import caixaProduto from '../Assets/caixaProduto.svg'
import header from '../Styles/Header.module.scss'

export default function Header() {
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(true)
    const [button3, setButton3] = useState(true)
    return (
        <>
            <div className={header.headerBody}>
                <div id={header.header}>
                    <div id={header.compraSegura}>
                        <BsShieldCheck /> Compra <span className={header.yellow}> 100% segura</span>
                    </div>
                    <div id={header.freteGratis}>
                        <BsTruck /> <span className={header.yellow}>Frete grátis</span> acima de R$ 200
                    </div>
                    <div id={header.parceleCompras}>
                        <BsCreditCard /> <span className={header.yellow}>Parcele</span> suas compras
                    </div>
                </div>
                <div id={header.title}>
                    <div><img src={caoselheiro} alt='Logo'></img></div>
                    <div id={header.busca}>
                        <input placeholder="Oque você está buscando?"></input>
                        <div id={header.buscaLupa}>
                            <BsSearch size={25} />
                        </div>
                    </div>
                    <div id={header.icons}>
                        <div id={header.caixaIcon}>
                            <img src={caixaProduto} alt='Caixa' width='24px' height='20px'></img>
                        </div>
                        <div id={header.heartIcon}>
                            <BsHeart size={22} />
                        </div>
                        <div id={header.userIcon}>
                            <BiUserCircle size={22} />
                        </div>
                        <div id={header.cartIcon}>
                            <BsCart3 size={22} />
                        </div>
                    </div>

                </div>
                <div id={header.bottom}>
                    <ul id={header.navbarMenu}>
                        <li>Brincar</li>
                        <li>Morder</li>
                        <li>Comer</li>
                        <li>Passear</li>
                        <li>Casa e Conforto</li>
                        <li>Educação</li>
                        <li><span className={header.yellow}>Ofertas</span></li>
                        <li><div id={header.crownIcon}><TbCrown size={27} />Coleção de Outono</div></li>
                    </ul>
                </div>
                <div id={header.select}>
                    <div id={header.leftSelectIcon}>
                        <AiOutlineLeft size={40} />
                    </div>
                    <div id={header.rightSelectIcon}>
                        <AiOutlineRight size={40} />
                    </div>
                    <div id={header.textButtonSelect}>
                        <p>As melhores guias</p>
                        <p>para os melhores</p>
                        <p>passeios.</p>
                        <p></p>
                        <button name='confira' id={header.buttonConfira}>Confira</button>
                    </div>
                    <div id={header.dotsThree}>
                        <div className={header.circle} onMouseEnter={() => setButton1(false)} onMouseLeave={() => setButton1(true)}>
                            {
                                (!button1) ? (<FaCircle />) : (<BiCircle />)
                            }
                        </div>
                        <div className={header.circle} onMouseEnter={() => setButton2(false)} onMouseLeave={() => setButton2(true)}>
                            {
                                (!button2) ? (<FaCircle />) : (<BiCircle />)
                            }
                        </div>
                        <div className={header.circle} onMouseEnter={() => setButton3(false)} onMouseLeave={() => setButton3(true)}>
                            {
                                (!button3) ? (<FaCircle />) : (<BiCircle />)
                            }
                        </div>

                    </div>
                    <div id={header.buttonDown}>
                        <AiOutlineDown />
                    </div>
                    <div id={header.gradient}>
                    </div>
                </div>
            </div>
        </>
    )
}
