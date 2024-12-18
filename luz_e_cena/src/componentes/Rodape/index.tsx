import Botao from "../Botao";
import Desenvolvimento from "./Desenvolvimento";
import styles from "./Rodape.module.css"
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Rodape = () => {
    return (
        <>
            <footer className={styles.rodape}>
                <div className={styles.rodape_informacoes}>
                    <div className={styles.logo}>
                        <img src="Logo_branco.png" alt="Logotipo" />
                        <p>Onde a realidade encontra a fantasia!</p>
                    </div>
                    <div className={styles.funcionamento}>
                        <h4>Funcionamento</h4>
                        <span>Segunda a Sexta - 16h às 00h</span>
                        <span>ola@luzecena.com.br</span>
                        <span>0800 541 320</span>
                    </div>
                    <div className={styles.institucional}>
                        <h4 className={styles.titulo}>Institucional</h4>
                        <Botao className={styles.ancora} href="#">Sobre nós</Botao>
                        <Botao className={styles.ancora} href="#">Para empresas</Botao>
                        <Botao className={styles.ancora} href="#">Clube fidelidade</Botao>
                    </div>
                    <div className={styles.redes}>
                        <h4>Siga nossas redes:</h4>
                        <div className={styles.icones}>
                            <Botao href="#"><FaWhatsapp  className={styles.icone}/></Botao>
                            <Botao className={styles.icone} href="#"><FaInstagram /></Botao>
                            <Botao className={styles.icone} href="#"><FaTiktok /></Botao>
                        </div>
                    </div>
                </div>
            </footer>
            <Desenvolvimento />
        </>
    )
}

export default Rodape