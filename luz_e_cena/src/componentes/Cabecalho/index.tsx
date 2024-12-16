import Botao from "../Botao"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
                <Botao href="#"><ShoppingCartOutlinedIcon /></Botao>
                <Botao href="#"><PersonOutlineOutlinedIcon /></Botao>
            </div>
        </header>
    )
}

export default Cabecalho