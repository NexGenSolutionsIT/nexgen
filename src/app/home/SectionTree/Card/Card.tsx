import React from "react";
import styles from "./Card.module.scss";
import Button from "@/components/Button/Button";

interface CardProps {
  title: string;
  text: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.text_and_button}>
        <p className={styles.text}>{text}</p>
        <Button label="Saber mais" variant="reverse" />
      </div>
    </div>
  );
}

export default Card;
