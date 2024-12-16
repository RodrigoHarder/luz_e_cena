import Botao from "../Botao";
import styles from './Formulario.module.css';

const Formulario = () =>{

    const submeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        alert("Obrigado por se inscrever!");
    }

    return (
        <form className={styles.formulario} onSubmit={submeterFormulario}>
            <input type="email" placeholder="Digite o seu melhor e-mail" />
            <Botao type="submit" className={styles.botao}>Inscrever-se</Botao>
        </form>
    )
}

export default Formulario;