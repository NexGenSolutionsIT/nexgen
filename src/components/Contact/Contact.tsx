"use client";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import light from "./styles/light.module.scss";
import dark from "./styles/dark.module.scss";
import Button from "@/components/Button/Button";

function Contact() {
  const { theme } = useTheme();
  const getStyles = () => {
    switch (theme) {
      case "light":
        return light;
      default:
        return dark;
    }
  };
  const variantStyles = getStyles();
  return (
    <section className={variantStyles.section}>
      <div className={variantStyles.sectionOne}>
        <h2 className={variantStyles.title}>
          Vamos trabalhar{" "}
          <span className={variantStyles.markTitle}>juntos!</span>
        </h2>
        <p className={variantStyles.paragraph}>
          Gostou do nosso trabalho e quer algo parecido para sua empresa? Claro,
          vamos ao que interessa!
        </p>
      </div>
      <div className={variantStyles.sectionTwo}>
        <form className={variantStyles.form}>
          <div className={variantStyles.info}>
            <div className={variantStyles.inputs}>
              <label className={variantStyles.label}>Seu nome</label>
              <input
                type="text"
                placeholder="Escreva seu nome"
                className={variantStyles.input}
              />
            </div>
            <div className={variantStyles.inputs}>
              <label className={variantStyles.label}>Seu email</label>
              <input
                type="text"
                placeholder="Escreva seu e-mail"
                className={variantStyles.input}
              />
            </div>
          </div>
          <div className={variantStyles.message}>
            <label className={variantStyles.label}>Sua mensagem</label>
            <textarea
              rows={3}
              cols={50}
              className={variantStyles.textarea}
              placeholder="Olá, acho que precisamos de um sistema para nossa Empresa. Quando você pode entrar em contato para discutir isso?"
            />
          </div>
          <Button label="Enviar" type="submit" variant="mobile" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
