import "./Button.css";
import { ReactElement, ReactEventHandler } from "react";

interface ButtonProps {
  children: ReactElement | string;
  onClick: ReactEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
