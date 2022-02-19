import { ReactNode } from "react";
import cn from "classnames";

import classes from "./Button.module.css";

type ButtonTypes = {
  children?: ReactNode;
  className?: string;
  onClick?: any;
};

const Button = ({ children, className, onClick }: ButtonTypes) => {
  return (
    <button className={cn(classes.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
