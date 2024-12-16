import styles from "./TagCategoria.module.css";

type Categoria = "2D" | "3D";

interface TagCategoriaProps {
    categoria: Categoria;
}

const TagCategoria: React.FC<TagCategoriaProps> = ({ categoria }) => {
    const categoriaClasses: Record<Categoria, string> = {
        "2D": styles.doisD,
        "3D": styles.tresD,
    };

    return (
        <span className={`${styles.tag} ${categoriaClasses[categoria]}`}>
            {categoria}
        </span>
    );
};

export default TagCategoria;
