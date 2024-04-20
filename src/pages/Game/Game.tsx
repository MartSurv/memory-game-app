import { useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Game.module.scss";
import { Button } from "../../components/atoms/Button";
import { Tab } from "../../components/atoms/Tab";
import { Title } from "../../components/atoms/Title";
import { GameButton } from "../../components/molecules/GameButton";
import { GameLayout } from "../../templates/GameLayout";
import { ButtonType, TitleStyle } from "../../types/components";
import { generateGame } from "../../utils/game";

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const completedTimeoutRef = useRef<NodeJS.Timeout>();
  const failedimeoutRef = useRef<NodeJS.Timeout>();
  const [searchParams] = useSearchParams();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [completedValues, setCompletedValues] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const gameSize = Number(searchParams.get("size"));
  const game = useMemo(() => generateGame(gameSize), [gameSize]);

  const handleNewGameClick = () => navigate(0);
  const handleRestart = () => {
    setSelectedValues([]);
    setCompletedValues([]);
    setMoves(0);
  };

  const gameButtonSelected = (value: string) => {
    if (selectedValues.length === 1) {
      return selectedValues[0] === value;
    }
    if (selectedValues.length === 2) {
      return selectedValues[1] === value || selectedValues[0] === value;
    }
  };

  const handleValueSelect = (value: string) => {
    setMoves(moves + 1);
    if (selectedValues.length === 0) {
      setSelectedValues([value]);
    }
    if (selectedValues.length === 1) {
      setSelectedValues([selectedValues[0], value]);

      clearTimeout(completedTimeoutRef.current);
      clearTimeout(failedimeoutRef.current);

      if (selectedValues[0][0] === value[0]) {
        completedTimeoutRef.current = setTimeout(() => {
          setCompletedValues([...completedValues, ...selectedValues, value]);
          setSelectedValues([]);
        }, 250);
      } else {
        failedimeoutRef.current = setTimeout(() => {
          setSelectedValues([]);
        }, 750);
      }
    }
  };

  return (
    <GameLayout>
      <header className={styles.header}>
        <Title text="memory" style={TitleStyle.Dark} />
        <div className={styles.headerActions}>
          <Button type={ButtonType.Primary} onClick={handleRestart}>
            Restart
          </Button>
          <Button type={ButtonType.Secondary} onClick={handleNewGameClick}>
            New Game
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        {game.map((value, index) => {
          return (
            <GameButton
              key={`${value}-${index}`}
              completed={completedValues.includes(value)}
              selected={gameButtonSelected(value)}
              value={value}
              onClick={handleValueSelect}
            />
          );
        })}
      </main>
      <footer className={styles.footer}>
        <Tab text="Time" number="0:00" />
        <Tab text="Moves" number={moves.toString()} />
      </footer>
    </GameLayout>
  );
};
