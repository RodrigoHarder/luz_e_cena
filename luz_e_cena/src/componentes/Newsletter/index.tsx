import Formulario from "../Formulario"
import styles from './Newsletter.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h2>Inscreva-se para ganhar descontos</h2>
            <Formulario/>
        </div>
    )
}

export default Newsletter;