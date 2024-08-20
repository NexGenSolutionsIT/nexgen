import React, { ReactNode } from "react";
import dark from "./styles/dark.module.scss";
import light from "./styles/light.module.scss";
import Link from "next/link";
import { useTheme } from "@/Context/ThemeContext";

interface LinksProps {
  children: ReactNode;
  href: string;
  target?: string;
}

function Links({ children, href, target }: LinksProps) {
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
      <Link href={href} className={variantStyles.link} target={target}>
        {children}
      </Link>
    </div>
  );
}

export default Links;
