import styles from './Styles/App.module.scss'
import Header from './Components/Header';
import Categorias from './Components/categorias';
import Produtos from './Components/Produtos';
import Marcas from './Components/Marcas';
import Parceiros from './Components/Parceiros';
import ConfiraBlog from './Components/ConfiraBlog';
import Instagram from './Components/Instagram';
import Inscrevase from './Components/inscrevase';
import Footer from './Components/Footer';
import { ThemeProvider } from 'react-bootstrap';


function App() {
  return (
    <div className={styles.divBody}>
      <header>
        <Header />
      </header>
      <div>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs">
          <Categorias />
          <Produtos />
          <Marcas />
          <Parceiros />
          <ConfiraBlog />
          <Instagram />
          <Inscrevase />
          <Footer />
        </ThemeProvider>;
      </div>
    </div>
  );
}

export default App;
