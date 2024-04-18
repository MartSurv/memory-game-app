import { MenuButton } from "./MenuButton";
import styles from "./OptionsCard.module.scss";
import { MenuButtonSize } from "../../../types/components";
import { Label } from "../../atoms/Label";

export const OptionsCard: React.FC = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardRow}>
        <Label text="Select Theme" />
        <section className={styles.cardRowOptions}>
          <MenuButton active>Numbers</MenuButton>
          <MenuButton>Icons</MenuButton>
        </section>
      </div>
      <div className={styles.cardRow}>
        <Label text="Numbers of Players" />
        <section className={styles.cardRowOptions}>
          <MenuButton active>1</MenuButton>
          <MenuButton>2</MenuButton>
          <MenuButton>3</MenuButton>
          <MenuButton>4</MenuButton>
        </section>
      </div>
      <div className={styles.cardRow}>
        <Label text="Grid Size" />
        <section className={styles.cardRowOptions}>
          <MenuButton active>4x4</MenuButton>
          <MenuButton>6x6</MenuButton>
        </section>
      </div>
      <MenuButton size={MenuButtonSize.Big}>Start Game</MenuButton>
    </article>
  );
};
