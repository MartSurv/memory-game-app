import styles from "./OptionsCard.module.scss";
import { MenuButtonSize } from "../../../types/components";
import { GridSize, Theme } from "../../../types/settings";
import { Label } from "../../atoms/Label";
import { MenuButton } from "../MenuButton";

type OptionsCardProps = {
  theme: Theme;
  gridSize: GridSize;
  onThemeSelect: (theme: Theme) => void;
  onGridSizeSelect: (gridSize: GridSize) => void;
};

export const OptionsCard: React.FC<OptionsCardProps> = ({
  gridSize,
  theme,
  onGridSizeSelect,
  onThemeSelect,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardRow}>
        <Label text="Select Theme" />
        <section className={styles.cardRowOptions}>
          <MenuButton
            active={theme === Theme.Numbers}
            onClick={() => onThemeSelect(Theme.Numbers)}
          >
            Numbers
          </MenuButton>
          <MenuButton
            active={theme === Theme.Icons}
            onClick={() => onThemeSelect(Theme.Icons)}
          >
            Icons
          </MenuButton>
        </section>
      </div>
      <div className={styles.cardRow}>
        <Label text="Numbers of Players" />
        <section className={styles.cardRowOptions}>
          <MenuButton active>1</MenuButton>
          <MenuButton disabled>2</MenuButton>
          <MenuButton disabled>3</MenuButton>
          <MenuButton disabled>4</MenuButton>
        </section>
      </div>
      <div className={styles.cardRow}>
        <Label text="Grid Size" />
        <section className={styles.cardRowOptions}>
          <MenuButton
            active={gridSize === GridSize["4x4"]}
            onClick={() => onGridSizeSelect(GridSize["4x4"])}
          >
            4x4
          </MenuButton>
          <MenuButton
            active={gridSize === GridSize["6x6"]}
            onClick={() => onGridSizeSelect(GridSize["6x6"])}
          >
            6x6
          </MenuButton>
        </section>
      </div>
      <MenuButton size={MenuButtonSize.Big}>Start Game</MenuButton>
    </article>
  );
};
