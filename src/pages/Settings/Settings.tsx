import { useState } from "react";

import { Title } from "../../components/atoms/Title";
import { OptionsCard } from "../../components/molecules/OptionsCard";
import { SettingsLayout } from "../../components/templates/SettingsLayout";
import { GridSize, Theme } from "../../types/settings";

export const Settings: React.FC = () => {
  const [gridSize, setGridSize] = useState(GridSize["4x4"]);
  const [theme, setTheme] = useState(Theme.Numbers);

  const handleGridSizeSelect = (gridSize: GridSize) => {
    setGridSize(gridSize);
  };

  const handleThemeSelect = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <SettingsLayout>
      <Title text="memory" />
      <OptionsCard
        gridSize={gridSize}
        theme={theme}
        onGridSizeSelect={handleGridSizeSelect}
        onThemeSelect={handleThemeSelect}
      />
    </SettingsLayout>
  );
};
