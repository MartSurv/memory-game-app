import styles from "./SettingsLayout.module.scss";

type SettingsLayoutProps = {
  children?: React.ReactNode;
};

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className={styles.settingsLayout}>
      <div className={styles.settingsContainer}>{children}</div>
    </div>
  );
};
