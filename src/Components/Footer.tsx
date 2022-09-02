import styles from '../Styles/Footer.module.scss'
import { BsInstagram, BsTelephone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
    return (
        <div id={styles.footer}>
            <div id={styles.nosSiga}>
                <p className={styles.titulo}>Nos siga nas nossas redes sociais</p>
                <div id={styles.icons}>
                    <FaFacebookF size={25} />
                    <BsInstagram size={25} />
                    <AiFillYoutube size={25} />
                </div>
                <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir
                    para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de
                    educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e
                    recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas
                    itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
            </div>
            <div id={styles.assinatura}>
                <p className={styles.titulo}>Assinatura</p>
                <p className={styles.titulo}>Parceiros</p>
            </div>
            <div id={styles.institucional}>
                <p className={styles.titulo}>Institucional</p>
                <p>Quem somos</p>
                <p>Política de privacidade</p>
                <p>Política comercial</p>
                <p>Política de devolução</p>
                <p>Regras de frete</p>
            </div>
            <div id={styles.atendimento}>
                <p className={styles.titulo}>Atendimento</p>
                <p>Fale conosco</p>
                <p><BsTelephone size={15} /> (11) 97212-1314</p>
                <p>ocaoselheiro@ocaoselheiro.com.br</p>
                <p>Trabalhe conosco</p>
            </div>
            <div id={styles.formasPgt}>
                <p className={styles.titulo}>Formas de pagamento</p>
            </div>
            <div id={styles.seguranca}>
                <p className={styles.titulo}>Segurança</p>
            </div>
            <div id={styles.ltda}>
                <p>O Cãoselheiro Comércio LTDA
                    CNPJ: 30.324.633/0001-16
                    © Todos os direitos reservados. 2022</p>
            </div>
            <div id={styles.iconBottom}>
                placeholder icons
            </div>
        </div>
    )
}