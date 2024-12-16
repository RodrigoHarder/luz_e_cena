import './App.css'
import Banner from './componentes/Banner/Index'
import Cabecalho from './componentes/Cabecalho'
import Newsletter from './componentes/Newsletter'
import Texto from './componentes/Texto'
function App() {

  return (
    <div>
      <Cabecalho />
      <Banner src="/Banner.png" alt="Banner" />
      <Banner src="/Combo.png" alt="Combo" />
      <Newsletter />
      <Banner src="Tarja.png" alt="Tarja" />
      <Texto className="rodape">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Texto>
    </div>
  )
}

export default App
