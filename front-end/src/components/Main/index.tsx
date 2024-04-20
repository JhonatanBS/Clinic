import { Carousel } from "../Carousel";
import styles from "./styles.module.css";

export function Main() {
  return (
    <main className={styles.home}>

      <div className={styles.titleClinic}>
        <div>
          <h1>
            Clinic
          </h1>

        </div>

        <p>
          Bem-vindo ao nosso espaço dedicado ao seu bem-estar.
          Estamos aqui para ajudá-lo em cada passo do caminho.
          onde sua saúde é nossa preocupação principal, e nossa
          equipe está dedicada a fornecer o melhor cuidado
          possível em cada consulta.
        </p>
      </div>

      <div className={styles.carouselPhotos}>
        <Carousel />
      </div>

    </main>
  )
}