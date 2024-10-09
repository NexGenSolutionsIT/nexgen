import React from "react";
import Hero from "./Hero/Hero";
import SectionOne from "./SectionOne/SectionOne";
import Contact from "@/components/Contact/Contact";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <div className={styles.container}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
