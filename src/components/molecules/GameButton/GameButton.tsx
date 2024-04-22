import classNames from "classnames";

import styles from "./GameButton.module.scss";
import { GridSize } from "../../../types/settings";
import { Button } from "../../atoms/Button";

type GameButton = {
  completed?: boolean;
  disabled?: boolean;
  selected?: boolean;
  type?: GridSize;
  value: string;
  onClick: (value: string) => void;
};

export const GameButton: React.FC<GameButton> = ({
  completed,
  selected,
  type,
  value,
  onClick,
}) => {
  const gameButtonClassnames = classNames({
    [styles.gameButton]: true,
    [styles.gameButton4x4]: type === GridSize["4x4"],
    [styles.gameButton6x6]: type === GridSize["6x6"],
    [styles.gameButtonHidden]: !selected,
    [styles.gameButtonCompleted]: completed,
    [styles.gameButtonSelected]: selected,
  });

  return (
    <Button className={gameButtonClassnames} onClick={() => onClick(value)}>
      {value.replace(/[ab]/g, "")}
    </Button>
  );
};
