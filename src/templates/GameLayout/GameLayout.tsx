import classNames from "classnames";

import styles from "./GameLayout.module.scss";

type GameLayoutProps = {
  children?: React.ReactNode;
};

const gameContainerClassNames = classNames(styles.gameContainer, "fade-in");

export const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
  return (
    <div className={styles.gameLayout}>
      <div className={gameContainerClassNames}>{children}</div>
    </div>
  );
};
