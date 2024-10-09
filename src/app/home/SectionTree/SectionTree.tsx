import React from "react";
import styles from "./sectionTree.module.scss";
import Card from "./Card/Card";

const cardData = [
  {
    title: "Abordagem Personalizada:",
    text: "Adotamos uma abordagem altamente personalizada. Trabalhamos de perto com cada cliente para entender suas necessidades específicas e desenvolver soluções sob medida que atendam exatamente às suas exigências e objetivos de negócio.",
  },
  {
    title: "Abordagem Personalizada:",
    text: "Adotamos uma abordagem altamente personalizada. Trabalhamos de perto com cada cliente para entender suas necessidades específicas e desenvolver soluções sob medida que atendam exatamente às suas exigências e objetivos de negócio.",
  },
  {
    title: "Abordagem Personalizada:",
    text: "Adotamos uma abordagem altamente personalizada. Trabalhamos de perto com cada cliente para entender suas necessidades específicas e desenvolver soluções sob medida que atendam exatamente às suas exigências e objetivos de negócio.",
  },
];

function SectionTree() {
  return (
    <div className={styles.container}>
      <div className={styles.circle_primary}></div>
      <div className={styles.circle_secundary}></div>
      {cardData.map((cardData, index) => (
        <Card key={index} title={cardData.title} text={cardData.text} />
      ))}
    </div>
  );
}

export default SectionTree;
