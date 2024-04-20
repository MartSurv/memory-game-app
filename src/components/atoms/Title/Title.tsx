import classNames from "classnames";

import styles from "./Title.module.scss";
import { TitleStyle } from "../../../types/components";

type TitleProps = {
  style?: TitleStyle;
  text?: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({
  style = TitleStyle.Light,
  text,
}) => {
  const titleClassnames = classNames({
    [styles.title]: true,
    [styles.titleLight]: style === TitleStyle.Light,
    [styles.titleDark]: style === TitleStyle.Dark,
  });

  return <h1 className={titleClassnames}>{text}</h1>;
};
