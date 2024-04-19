import { Baby, Brain, Heartbeat, PersonSimpleCircle, Plus } from "@phosphor-icons/react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  description: string;
}

export function CardEspecialty({ name, description }: Props) {
  return(
    <div className={styles.cardEspecialty}>
      {
        name === "cardiologista" ? <Heartbeat size={81} color="#FFFFFF"/> : <></>
      }
      {
        name === "pediatra" ? <Baby size={81} color="#FFFFFF" /> : <></>
      }
      {
        name === "neurologista" ? <Brain size={81} color="#FFFFFF"/> : <></>
      }
      {
        name === "ginecologista" ? <PersonSimpleCircle size={81} color="#FFFFFF"/> : <></>
      }
      {
        name === "" ? <Plus size={120} color="#FFFFFF"/> : <></>
      }
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}