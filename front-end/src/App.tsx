import styles from "./App.module.css";

import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className={styles.app}>

      <Header />
      <Main />


      <section>

      </section>
    </div>
  );
}

export default App;
