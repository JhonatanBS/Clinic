import styles from "./styles.module.css";

import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <header >
      <div className={styles.logo}>
        <img src={Logo} />
      </div>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#especialidades">Especialidades</a></li>
          <li><a href="/#exames">Exames</a></li>
          <li><a href="/#contato">Contato</a></li>
        </ul>
      </nav>

      <div>
        <button className={styles.login}>
          <a href="/login">Entrar</a>
        </button>
        <button className={styles.register}>
          <a href="/register">Cadastrar</a>
        </button>
      </div>
    </header>
  )
}