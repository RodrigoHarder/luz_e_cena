import Botao from "../Botao"
import styles from './Newsletter.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h2>Inscreva-se para ganhar descontos</h2>
            <div className={styles.formulario}>
                <input type="email" placeholder="Digite o seu melhor e-mail" />
                <Botao onClick={() => {alert("Obrigado por se inscrever!")}} className={styles.botao}>Inscrever-se</Botao>
            </div>
        </div>
    )
}

export default Newsletter;