import styles from "./Tab.module.scss";

type TabProps = {
  text?: string;
  number?: string;
};

export const Tab: React.FC<TabProps> = ({ number, text }) => {
  return (
    <div className={styles.tab}>
      <span className={styles.text}>{text}</span>
      <span className={styles.number}>{number}</span>
    </div>
  );
};
