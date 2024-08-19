import React from "react";
import style from "./button.module.scss";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

function Button({ label, onClick, disabled, type }: ButtonProps) {
  return (
    <div>
      <button
        className={style.button}
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
