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


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(true)
    const [button3, setButton3] = useState(true)
    return (
        <>

            <div className={header.headerBody}>

                <div id={header.header}>
                    <Container>
                        <Row>
                            <Col>
                                <div id={header.compraSegura}>
                                    <BsShieldCheck /> Compra <span className={header.yellow}> 100% segura</span>
                                </div>
                            </Col>
                            <Col>
                                <div id={header.freteGratis}>
                                    <BsTruck /> <span className={header.yellow}>Frete grátis</span> acima de R$ 200
                                </div>
                            </Col>
                            <Col>
                                <div id={header.parceleCompras}>
                                    <BsCreditCard /> <span className={header.yellow}>Parcele</span> suas compras
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id={header.title}>
                    <Container>
                        <Row>
                            <Col><div className={header.caoselheiro}><img src={caoselheiro} alt='Logo'></img></div></Col>
                            <Col>
                                <div id={header.busca}>
                                    <input placeholder="Oque você está buscando?"></input>
                                    <div id={header.buscaLupa}>
                                        <BsSearch size={25}/>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div id={header.icons}>
                                    <Col>
                                        <div id={header.caixaIcon}>
                                            <img src={caixaProduto} alt='Caixa' width='24px' height='20px'></img>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id={header.heartIcon}>
                                            <BsHeart size={22} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id={header.userIcon}>
                                            <BiUserCircle size={22} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id={header.cartIcon}>
                                            <BsCart3 size={22} />
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>




                </div>

                <div id={header.bottom}>
                    <div id={header.navbarMenu}>
                        <div className={header.navBar}>
                            <Navbar collapseOnSelect expand="lg" bg="white" variant="black" className='gap-3 px-3 justify-content-evenly navBar'>
                                <Container className='d-flex justify-content-around'>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto d-flex justify-content-around">
                                            <Nav.Link href="#features" className='linkNav'>Brincar</Nav.Link>
                                            <Nav.Link href="#pricing">Morder</Nav.Link>
                                            <Nav.Link href="#pricing">Comer</Nav.Link>
                                            <Nav.Link href="#pricing">Passear</Nav.Link>
                                            <Nav.Link href="#pricing">Casa e Conforto</Nav.Link>
                                            <NavDropdown title="Educação" id="collasible-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link href="#pricing"><span className={header.yellow}>Ofertas</span></Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <Nav.Link eventKey={2} href="#memes">
                                                <div id={header.crownIcon}><TbCrown size={27} />Coleção de Outono</div>
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>

                        {/* <Container>
                            <Row>
                                <Col>
                                    Brincar
                                </Col>
                                <Col>
                                    Morder
                                </Col>
                                <Col>
                                    Comer
                                </Col>
                                <Col>
                                    Passear
                                </Col>
                                <Col>
                                    Casa e Conforto
                                </Col>
                                <Col>
                                    Educação
                                </Col>
                                <Col>

                                </Col>
                                <Col>

                                </Col>
                            </Row>
                        </Container> */}








                    </div>
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
                    </div>
                    <div id={header.ButtonSelect}>
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
