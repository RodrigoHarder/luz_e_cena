import Botao from "../Botao"
import { HiOutlineShoppingCart, HiOutlineUser  } from "react-icons/hi";
import styles from './Cabecalho.module.css'
import SelecionarCidade from "../SelecionarCidade";

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img src="/Logo.png" alt="Logo" />
            <nav className={styles.navegacao}>
                <Botao href="#">Eventos</Botao>
                <Botao href="#">Clube Fidelidade</Botao>
                <Botao href="#">Sobre nós</Botao>
            </nav>
            <SelecionarCidade/>
            <div className={styles.icones}>
                <Botao href="#"><HiOutlineShoppingCart className={styles.icone}/></Botao>
                <Botao href="#"><HiOutlineUser className={styles.icone}/></Botao>
            </div>
        </header>
    )
}

export default Cabecalho