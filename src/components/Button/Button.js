import React from "react";
import "./Button.css";

const STYLES = ["btn__primary", "btn__outline"];
const SIZES = ["btn_medium", "btn__large"];

export const Button = ({
  children,
  type,
  onCLick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};
