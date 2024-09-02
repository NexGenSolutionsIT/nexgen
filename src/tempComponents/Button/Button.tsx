import React from "react";
import normal from "./styles/normal.module.scss";
import reverse from "./styles/reverse.module.scss";
import mobile from "./styles/mobile.module.scss";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "reverse" | "normal" | "mobile";
}

function Button({
  label,
  onClick,
  disabled,
  type,
  variant = "normal",
}: ButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case "reverse":
        return reverse;
      case "mobile":
        return mobile;
      default:
        return normal;
    }
  };
  const variantStyles = getStyles();

  return (
    <div>
      <button
        className={variantStyles.button}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
