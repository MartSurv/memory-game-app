import styles from "./GameLayout.module.scss";

type GameLayoutProps = {
  children?: React.ReactNode;
};

export const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
  return (
    <div className={styles.gameLayout}>
      <div className={styles.gameContainer}>{children}</div>
    </div>
  );
};
