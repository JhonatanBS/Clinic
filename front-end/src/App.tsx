import styles from "./App.module.css";

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Specialty } from "./components/Specialty";
import { Exams } from "./components/Exams";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Specialty />
      <Exams />
    </div>
  );
}

export default App;
