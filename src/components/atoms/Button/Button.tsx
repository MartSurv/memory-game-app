import classNames from "classnames";

import styles from "./Button.module.scss";
import { ButtonType } from "../../../types/components";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  type,
  onClick,
}) => {
  const buttonClassnames = classNames(
    {
      [styles.button]: true,
      [styles.buttonDisabled]: disabled,
      [styles.buttonPrimary]: type === ButtonType.Primary,
      [styles.buttonSecondary]: type === ButtonType.Secondary,
    },
    className
  );

  return (
    <button className={buttonClassnames} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
