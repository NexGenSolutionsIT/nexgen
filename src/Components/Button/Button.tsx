import React from "react";
import normal from "./styles/normal.module.scss";
import reverse from "./styles/reverse.module.scss";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "reverse" | "normal";
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
