import classNames from "classnames";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

type ModalProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  visible?: boolean;
};

const modalContainerClassNames = classNames(styles.modalContainer, "fade-in");

export const Modal = ({ children, title, subtitle, visible }: ModalProps) => {
  if (!visible) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={modalContainerClassNames}>
        {(title || subtitle) && (
          <div className={styles.headings}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};
