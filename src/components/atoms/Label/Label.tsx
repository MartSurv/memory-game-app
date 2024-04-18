import styles from "./Label.module.scss";

type LabelProps = {
  text?: string;
};

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <h2 className={styles.label}>{text}</h2>;
};
