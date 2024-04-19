import { CardEspecialty } from "../CardEspecialty";
import styles from "./styles.module.css";

export function Specialty() {
  const allSpecialty = [
    {
      name: "cardiologista",
      description: "É o médico responsável por tratar de doenças relacionada ao coração e diagonisticar com exames laboratoriais.",
    },
    {
      name: "pediatra",
      description: "Médico pediatra é um profissional de saúde especializadono cuidado e tratamento da saúde das crianças, desde o nascimentoaté a adolescência",
    },
    {
      name: "neurologista",
      description: "É médico neurologista é um especialista em diagnosticar e tratar distúrbios do sistema nervoso, incluindo cérebro, medula espinhal e nervos periféricos",
    },
    {
      name: "ginecologista",
      description: "É o médico responsável por tratar de doenças relacionada ao coração e diagonisticar com exames laboratoriais.",
    },
    {
      name: "",
      description: "Ver todas as especialidades",
    },
  ];


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

      <div className={styles.containerCards}>
        {allSpecialty.map(({name, description}) => (
          <CardEspecialty 
          name={name}
          description={description}
          />
          ))}
      </div>
    </section>
  )
}