import React from "react";
import TagCategoria from "../TagCategoria";
import TagCensura from "../TagCensura";
import styles from "./Card.module.css";

interface CardProps {
    src: string;
    alt: string;
    children: React.ReactNode;
    categoria: string;
    censura: string;
    duracao: number;
    genero: string;
}

const Card = ({
    src,
    alt,
    children,
    categoria,
    censura,
    genero,
    duracao
}: CardProps) => {
    return (
        <li className={styles.card}>
            <img src={src} alt={alt} />
            <div className={styles.container}>
                <h3>{children}</h3>
                <div className={styles.informacoes}>
                    <div className={styles.linha1}>
                        <p>{genero}</p>
                        {categoria && <TagCategoria categoria={categoria} />}
                    </div>
                    <div className={styles.linha2}>
                        <p>{duracao} minutos</p>
                        {censura && <TagCensura censura={censura} />}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Card;
