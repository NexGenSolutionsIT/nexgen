import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Link from "next/link";
import { useTheme } from "@/Context/ThemeContext";

interface LinksProps {
  text: string;
  href: string;
}

function Links({ text, href }: LinksProps) {
  const { theme } = useTheme();

  const getStyles = () => {
    switch (theme) {
      case "dark":
        return dark;
      default:
        return light;
    }
  };

  const variantStyles = getStyles();

  return (
    <div>
      <Link href={href} className={variantStyles.link}>
        {text}
      </Link>
    </div>
  );
}

export default Links;
