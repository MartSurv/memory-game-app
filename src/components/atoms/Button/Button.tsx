import classNames from "classnames";

import styles from "./Button.module.scss";
import { ButtonType } from "../../../types/components";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  type?: ButtonType;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
}) => {
  const buttonClassnames = classNames(
    {
      [styles.button]: true,
      [styles.buttonPrimary]: type === ButtonType.Primary,
      [styles.buttonSecondary]: type === ButtonType.Secondary,
    },
    className
  );

  return (
    <button className={buttonClassnames} type="button">
      {children}
    </button>
  );
};
