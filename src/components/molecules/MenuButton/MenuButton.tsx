import classNames from "classnames";

import styles from "./MenuButton.module.scss";
import { MenuButtonSize } from "../../../types/components";
import { Button } from "../../atoms/Button";

type MenuButton = {
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: MenuButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const MenuButton: React.FC<MenuButton> = ({
  active,
  children,
  disabled,
  size,
  onClick,
}) => {
  const menuButtonClassnames = classNames({
    [styles.menuButton]: true,
    [styles.menuButtonActive]: active,
    [styles.menuButtonBig]: size === MenuButtonSize.Big,
  });

  return (
    <Button
      className={menuButtonClassnames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
