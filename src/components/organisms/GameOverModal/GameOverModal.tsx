import styles from "./GameOverModal.module.scss";
import { ButtonType } from "../../../types/components";
import { Button } from "../../atoms/Button";
import { Modal } from "../../molecules/Modal";

type GameOverModalProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  visible?: boolean;
  onNewGameButtonClick?: () => void;
  onRestartButtonClick?: () => void;
};

export const GameOverModal: React.FC<GameOverModalProps> = ({
  children,
  title,
  subtitle,
  visible,
  onNewGameButtonClick,
  onRestartButtonClick,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal title={title} subtitle={subtitle} visible={visible}>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>
        <Button type={ButtonType.Primary} onClick={onRestartButtonClick}>
          Restart
        </Button>
        <Button type={ButtonType.Secondary} onClick={onNewGameButtonClick}>
          Setup New Game
        </Button>
      </div>
    </Modal>
  );
};
