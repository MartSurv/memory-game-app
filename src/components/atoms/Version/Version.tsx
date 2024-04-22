import classNames from "classnames";

import styles from "./Version.module.scss";
import packageJson from "../../../../package.json";

export const Version: React.FC = () => {
  const versionClassNames = classNames({
    [styles.version]: true,
  });

  return <div className={versionClassNames}>Build: v{packageJson.version}</div>;
};
