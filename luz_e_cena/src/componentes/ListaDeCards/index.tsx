import Botao from "../Botao";
import Card from "../Card";
import InputDePesquisa from "./InputDePesquisa";
import styles from './ListaDeCards.module.css'

interface Filme {
    src: string;
    alt: string;
    children: string;
    categoria: string;
    censura: string;
    genero: string;
    duracao: number;
}

const ListaDeCards = () => {
    const filmes: Filme[] = [
        {
            src: "/capas_de_filmes/Amanhecer.png",
            alt: "Imagem do filme Amanhecer",
            children: "Amanhecer",
            categoria: "2D",
            censura: "Livre",
            genero: "Romance",
            duracao: 90
        },
        {
            src: "/capas_de_filmes/Amigo_da_sombra.png",
            alt: "Imagem do filme Amigo da sombra",
            children: "Amigo da sombra",
            categoria: "2D",
            censura: "12 anos",
            genero: "Suspense",
            duracao: 110
        },
        {
            src: "/capas_de_filmes/Amigos_do_bosque_magico.png",
            alt: "Imagem do filme Amigo do bosque mágico",
            children: "Amigo do bosque mágico",
            categoria: "2D",
            censura: "Livre",
            genero: "Animação",
            duracao: 60
        },
        {
            src: "/capas_de_filmes/Caminho_para_o_abismo.png",
            alt: "Imagem do filme Caminho para o abismo",
            children: "Caminho para o abismo",
            categoria: "2D",
            censura: "14 anos",
            genero: "Horror",
            duracao: 103
        },
        {
            src: "/capas_de_filmes/Desastres_do_escritorio.png",
            alt: "Imagem do filme Desastres do Escritório",
            children: "Desastres do Escritório",
            categoria: "2D",
            censura: "Livre",
            genero: "Comédia",
            duracao: 85
        },
        {
            src: "/capas_de_filmes/Mestres_do_futuro.png",
            alt: "Imagem do filme Mestres do Futuro",
            children: "Mestres do Futuro",
            categoria: "2D",
            censura: "Livre",
            genero: "Documentário",
            duracao: 120
        },
        {
            src: "/capas_de_filmes/La_Esperanza.png",
            alt: "Imagem do filme La Esperanza",
            children: "La Esperanza",
            categoria: "2D",
            censura: "12 anos",
            genero: "Drama",
            duracao: 98
        },
        {
            src: "/capas_de_filmes/O_nexus_do_tempo.png",
            alt: "Imagem do filme O nexus do tempo",
            children: "O nexus do tempo",
            categoria: "3D",
            censura: "10 anos",
            genero: "Ficcção Científica",
            duracao: 105
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.ancoras}>
                <Botao href="#">Em cartaz</Botao>
                <Botao href="#">Em breve</Botao>
            </div>
            <InputDePesquisa placeholder="Digite sua busca" className={styles.inputDePesquisa} />
            <h2 className={styles.titulo}>Em cartaz</h2>
            <ul className={styles.lista}>
                {filmes.map((filme, index) => (
                    <Card
                        key={index}
                        src={filme.src}
                        alt={filme.alt}
                        children={filme.children}
                        categoria={filme.categoria}
                        censura={filme.censura}
                        genero={filme.genero}
                        duracao={filme.duracao}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ListaDeCards;