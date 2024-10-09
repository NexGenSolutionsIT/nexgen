import React from "react";
import Hero from "./Hero/Hero";
import SectionOne from "./SectionOne/SectionOne";
import Contact from "@/components/Contact/Contact";
import styles from "./styles.module.scss";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionTree from "./SectionTree/SectionTree";

function Home() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionTree />
      <div className={styles.container}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
