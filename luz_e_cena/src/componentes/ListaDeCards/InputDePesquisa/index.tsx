import { FaSearch } from "react-icons/fa";
import styles from "./InputDePesquisa.module.css";

interface InputDePesquisaProps {
    placeholder: string;
    onChange?: (value: string) => void;
    value?: string;
}

const InputDePesquisa = ({ placeholder, onChange, value}: InputDePesquisaProps) => {

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
            <FaSearch className={styles.icone} />
        </div>
    );
};

export default InputDePesquisa;
