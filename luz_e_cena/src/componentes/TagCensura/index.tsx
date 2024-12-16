import styles from "./TagCensura.module.css";

type Censura = "Livre" | "12 anos";

interface TagCensuraProps {
    censura: Censura;
}

const TagCensura: React.FC<TagCensuraProps> = ({ censura }) => {
    const censuraClasses: Record<Censura, string> = {
        "Livre": styles.livre,
        "12 anos": styles.doze,
    };

    return (
        <span className={`${styles.tag} ${censuraClasses[censura]}`}>
            {censura}
        </span>
    );
};

export default TagCensura;
