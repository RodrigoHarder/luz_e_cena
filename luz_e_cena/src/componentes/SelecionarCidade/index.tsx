import { useState } from 'react';
import styles from './SelecionarCidade.module.css';
import { FaLocationDot } from "react-icons/fa6";

interface Cidade {
  id: number;
  nome: string;
}

const SelecionarCidade = () => {
  const [cidade, setCidade] = useState<string>('');

  const cidades: Cidade[] = [
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
    { id: 4, nome: 'Curitiba' },
    { id: 5, nome: 'Porto Alegre' },
  ];

  const mudarCidade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCidade(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FaLocationDot  className={styles.icone}/>
      <select
        id="cidade"
        value={cidade}
        onChange={mudarCidade}
        className={styles.seletor}
      >
        <option value="">Escolha uma cidade</option>
        {cidades.map((cidade) => (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelecionarCidade;
