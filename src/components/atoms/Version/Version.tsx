import classNames from "classnames";

import styles from "./Version.module.scss";
import packageJson from "../../../../package.json";
import { VersionStyle } from "../../../types/components";

type VersionProps = {
  style?: VersionStyle;
};

export const Version: React.FC<VersionProps> = ({ style }) => {
  const versionClassNames = classNames({
    [styles.version]: true,
    [styles.versionLight]: style === VersionStyle.Light,
    [styles.versionDark]: style === VersionStyle.Dark,
  });

  return <div className={versionClassNames}>Build: v{packageJson.version}</div>;
};
