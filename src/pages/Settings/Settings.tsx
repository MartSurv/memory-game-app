import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Settings.module.scss";
import { Title } from "../../components/atoms/Title";
import { Version } from "../../components/atoms/Version";
import { OptionsCard } from "../../components/molecules/OptionsCard";
import { SettingsLayout } from "../../templates/SettingsLayout";
import { GridSize, Theme } from "../../types/settings";
export const Settings: React.FC = () => {
  const [gridSize, setGridSize] = useState(GridSize["4x4"]);
  const [theme, setTheme] = useState(Theme.Numbers);
  const navigate = useNavigate();

  const handleGridSizeSelect = (gridSize: GridSize) => {
    setGridSize(gridSize);
  };

  const handleThemeSelect = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <SettingsLayout>
      <Title text="memory" />
      <div className={styles.optionsCardWrapper}>
        <OptionsCard
          gridSize={gridSize}
          theme={theme}
          onGridSizeSelect={handleGridSizeSelect}
          onThemeSelect={handleThemeSelect}
          onStartGame={() => navigate(`/game?size=${gridSize}`)}
        />
        <Version />
      </div>
    </SettingsLayout>
  );
};
