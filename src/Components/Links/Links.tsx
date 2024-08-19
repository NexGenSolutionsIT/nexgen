import React from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Link from "next/link";

interface LinksProps {
  text: string;
  variant?: "dark" | "light";
  href: string;
}

function Links({ variant = "light", text, href }: LinksProps) {
  const getStyles = () => {
    switch (variant) {
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
