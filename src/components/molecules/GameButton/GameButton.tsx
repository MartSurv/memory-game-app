import classNames from "classnames";

import styles from "./GameButton.module.scss";
import { Button } from "../../atoms/Button";

type GameButton = {
  completed?: boolean;
  disabled?: boolean;
  selected?: boolean;
  value: string;
  onClick: (value: string) => void;
};

export const GameButton: React.FC<GameButton> = ({
  completed,
  selected,
  value,
  onClick,
}) => {
  const gameButtonClassnames = classNames({
    [styles.gameButton]: true,
    [styles.gameButtonHidden]: !selected,
    [styles.gameButtonCompleted]: completed,
    [styles.gameButtonSelected]: selected,
  });

  return (
    <Button className={gameButtonClassnames} onClick={() => onClick(value)}>
      {value.split("")[0]}
    </Button>
  );
};
