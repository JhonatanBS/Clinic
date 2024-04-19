import { InstagramLogo, LinkedinLogo, PhoneOutgoing, WhatsappLogo } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function Contact() {
  return (
    <section className={styles.containerContact} id="contato">
      <div></div>

      <div>
        <p className={styles.titleLocalizaton}>Nossa Localização</p>

        <p>123 Rua das Flores</p>
        <p>Bairro dos Pássaros</p>
        <p>Cidade Fictícia, Estado Inexistente</p>
        <p>CEP: 00000-000</p>

        <button>
          <p className={styles.buttonText}>Ver no mapa</p>
        </button>
      </div>

      <div></div>

      <div className={styles.social}>
        <p className={styles.titleSocial}>Nossas Redes Sociais</p>

        <p className={styles.descriptionSocial}>
          Siga-nos nas redes sociais
          e acompanhe nossas
          publicações
        </p>

        <span className={styles.iconsSocial}>
          <a href="/">
            <InstagramLogo size={62} weight="fill" color="#367C29" style={{ marginRight: 32 }} />
          </a>

          <a href="/">
            <LinkedinLogo size={62} weight="fill" color="#367C29" />
          </a>
        </span>
      </div>

      <div></div>

      <div className={styles.contact}>
        <p className={styles.titleContact}>Nossos Contatos</p>

        <p className={styles.descriptionContact}>Entre contato por telefone ou contate-nos
          pelo Whatsapp</p>

        <span className={styles.iconsContact}>
          <a href="/">
            <PhoneOutgoing size={62} weight="fill" color="#367C29" style={{ marginRight: 32 }}/>
          </a>

          <a href="/">
            <WhatsappLogo size={62} weight="fill" color="#367C29" />
          </a>
        </span>
      </div>

    </section>
  )
}