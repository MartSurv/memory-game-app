import styles from "./MenuModal.module.scss";
import { ButtonType } from "../../../types/components";
import { Button } from "../../atoms/Button";
import { Modal } from "../../molecules/Modal";

type MenuModalProps = {
  visible?: boolean;
  onNewGameButtonClick?: () => void;
  onRestartButtonClick?: () => void;
  onResumeButtonClick?: () => void;
};

export const MenuModal: React.FC<MenuModalProps> = ({
  visible,
  onNewGameButtonClick,
  onRestartButtonClick,
  onResumeButtonClick,
}) => {
  return (
    <Modal visible={visible}>
      <div className={styles.actions}>
        <Button type={ButtonType.Primary} onClick={onRestartButtonClick}>
          Restart
        </Button>
        <Button type={ButtonType.Secondary} onClick={onNewGameButtonClick}>
          New Game
        </Button>
        <Button type={ButtonType.Secondary} onClick={onResumeButtonClick}>
          Resume Game
        </Button>
      </div>
    </Modal>
  );
};
