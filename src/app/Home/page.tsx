import React from "react";

import Contact from "@/components/Contact/Contact";
import styles from "./styles.module.scss";
import Hero from "./Hero/asdasdasd";
import SectionOne from "./SectionOne/asdasdasdasd";
import SectionTwo from "./SectionTwo/asdasdasdasd";
import SectionTree from "./SectionTree/asdasdasdasd";

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
