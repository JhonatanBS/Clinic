import styles from "./App.module.css";

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Specialty } from "./components/Specialty";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Specialty />
    </div>
  );
}

export default App;
