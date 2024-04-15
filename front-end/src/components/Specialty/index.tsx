import styles from "./styles.module.css";

export function Specialty() {
  return (
    <section className={styles.ContainerSpecialty}>
      <aside>
        <p className={styles.orientationSpecialty}>
          "Nossa clínica oferece uma ampla gama de especialidades médicas para atender às diversas necessidades
          de saúde de nossos pacientes. Com especialistas em áreas como cardiologia, ortopedia, ginecologia
          e dermatologia, estamos comprometidos em proporcionar cuidados abrangentes e de alta qualidade
          a todos os que confiam em nós para sua saúde."
        </p>
      </aside>

      <h2 className={styles.titleSpecialty}>Especialidades</h2>
    </section>
  )
}