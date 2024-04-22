import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Game.module.scss";
import { Button } from "../../components/atoms/Button";
import { Tab } from "../../components/atoms/Tab";
import { Title } from "../../components/atoms/Title";
import { GameButton } from "../../components/molecules/GameButton";
import { GameOverModal } from "../../components/organisms/GameOverModal";
import { Path } from "../../router";
import { GameLayout } from "../../templates/GameLayout";
import { ButtonType, TitleStyle } from "../../types/components";
import { GridSize } from "../../types/settings";
import { formatTime, generateGame } from "../../utils/game";

export const Game: React.FC = () => {
  const navigate = useNavigate();
  const completedTimeoutRef = useRef<NodeJS.Timeout>();
  const failedimeoutRef = useRef<NodeJS.Timeout>();
  const timeRef = useRef<NodeJS.Timeout>();
  const [searchParams] = useSearchParams();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [completedValues, setCompletedValues] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const gridSize = Number(searchParams.get("size"));

  const mainClassNames = classNames({
    [styles.main]: true,
    [styles.main4x4]: gridSize === GridSize["4x4"],
    [styles.main6x6]: gridSize === GridSize["6x6"],
  });
  const game = useMemo(() => generateGame(gridSize), [gridSize]);
  const isGameOver = useMemo(
    () => completedValues.length === game.length,
    [completedValues.length, game.length]
  );

  const handleNewGameClick = () => navigate(Path.Settings);

  const handleRestartClick = () => {
    setSelectedValues([]);
    setCompletedValues([]);
    setMoves(0);
    setSeconds(0);
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

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timeRef.current);
  }, []);

  useEffect(() => {
    if (gridSize !== GridSize["4x4"] && gridSize !== GridSize["6x6"]) {
      navigate(Path.Settings);
    }
  }, [gridSize, navigate]);

  useEffect(() => {
    if (isGameOver) {
      clearInterval(timeRef.current);
    }
  }, [isGameOver]);

  return (
    <GameLayout>
      <header className={styles.header}>
        <Title text="memory" style={TitleStyle.Dark} />
        <div className={styles.headerActions}>
          <Button type={ButtonType.Primary} onClick={handleRestartClick}>
            Restart
          </Button>
          <Button type={ButtonType.Secondary} onClick={handleNewGameClick}>
            New Game
          </Button>
        </div>
      </header>
      <main className={mainClassNames}>
        {game.map((value, index) => {
          return (
            <GameButton
              key={`${value}-${index}`}
              completed={completedValues.includes(value)}
              selected={gameButtonSelected(value)}
              type={gridSize}
              value={value}
              onClick={handleValueSelect}
            />
          );
        })}
      </main>
      <footer className={styles.footer}>
        <Tab left="Time" right={formatTime(seconds)} />
        <Tab left="Moves" right={moves.toString()} />
      </footer>
      <GameOverModal
        title="You did it!"
        subtitle="Game over! Here's how you got on…"
        visible={isGameOver}
        onNewGameButtonClick={handleNewGameClick}
        onRestartButtonClick={handleRestartClick}
      >
        <Tab left="Time Elapsed" right={formatTime(seconds)} />
        <Tab left="Moves Taken" right={`${moves.toString()} Moves`} />
      </GameOverModal>
    </GameLayout>
  );
};
