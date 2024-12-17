import styles from "./TagCensura.module.css";

type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface TagCensuraProps {
    censura: Censura;
}

const TagCensura: React.FC<TagCensuraProps> = ({ censura }) => {
    const censuraClasses: Record<Censura, string> = {
        "Livre": styles.livre,
        "10 anos": styles.dez,
        "12 anos": styles.doze,
        "14 anos": styles.catorze,
        "16 anos": styles.dezesseis,
    };

    return (
        <span className={`${styles.tag} ${censuraClasses[censura]}`}>
            {censura}
        </span>
    );
};

export default TagCensura;
