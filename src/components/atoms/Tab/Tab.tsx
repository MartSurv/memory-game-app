import styles from "./Tab.module.scss";

type TabProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ left, right }) => {
  return (
    <div className={styles.tab}>
      <span className={styles.text}>{left}</span>
      <span className={styles.number}>{right}</span>
    </div>
  );
};
