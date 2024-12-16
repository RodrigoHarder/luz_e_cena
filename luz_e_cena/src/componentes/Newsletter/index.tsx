import Formulario from "../Formulario"
import Texto from "../Texto";
import styles from './Newsletter.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <Texto className={styles.titulo}>Inscreva-se para ganhar descontos!</Texto>
            <Formulario/>
        </div>
    )
}

export default Newsletter;