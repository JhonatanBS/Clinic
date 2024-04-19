import { PlusCircle } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export function Exams() {
  return (
    <section className={styles.containerExams} id="exames">
      <div className={styles.moreWantedExams}>

        <div className={styles.titlemoreWantedExams}>
          <h2>Exames mais procurados</h2>
        </div>

        <div className={styles.listExams}>
          <ul>
            <li>Hemograma completo</li>
            <li>Teste de glicose</li>
            <li>Perfil lipídico</li>
            <li>Teste de função hepática</li>
            <li>Exame de urina completo</li>
          </ul>

          <ul>
            <li>Exame de creatinina</li>
            <li>Teste de função tireoidiana</li>
            <li>Exame de PSA (Antígeno Prostático Específico)</li>
            <li>Exame de Papanicolau (Pap)</li>
            <li>Mamografia</li>
          </ul>
        </div>

      </div>

      <div className={styles.orientationExams}>
        <p className={styles.descriptionExams}>
          "Todos os exames oferecidos em
          nossa clínica médica são realizados
          com os mais altos padrões de segurança,
          garantindo tranquilidade e confiança
          aos nossos clientes."
        </p>

        <button>
          <p>
            Exames
          </p>
          <PlusCircle size={32} weight="fill" color="#FFFFFF"/>
        </button>
      </div>
    </section>
  )
}