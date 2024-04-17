import { PlusCircle } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <p>Copyright &copy;2024 Clínica Médica <strong>clinic</strong>. Todos os direitos reservados.</p>

      <p>Horário de Funcionamento</p>

      <p className={styles.timeFooter}>Segunda à Sexta  (07:00 - 18:00)</p>
      <p className={styles.timeFooter}>Sábado  (07:00 - 12:00)</p>
      <p className={styles.timeFooter}>Domingos e Feriados são fechados</p>
    </footer>
  )
}