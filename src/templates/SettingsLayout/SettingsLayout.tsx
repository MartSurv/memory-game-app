import classNames from "classnames";

import styles from "./SettingsLayout.module.scss";

type SettingsLayoutProps = {
  children?: React.ReactNode;
};

const settingsContainerClassNames = classNames(
  styles.settingsContainer,
  "fade-in"
);

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className={styles.settingsLayout}>
      <div className={settingsContainerClassNames}>{children}</div>
    </div>
  );
};
