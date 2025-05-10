import Lottie from "lottie-react";
import { memo, useEffect, useState } from "react";
import gridAnimationData from "../../assets/lottie/json/grid.json";
import { Board } from "../../common/components/board/board.tsx";
import { useGameLogic } from "../../common/hooks/useGameLogic.ts";
import "./tic-tac-toe.css";

export const TicTacToe = memo(() => {
    const [startGame, setStartGame] = useState(false);
    const game = useGameLogic();

    useEffect(() => {
        if (!game.winningCombination?.length && game.availableFields.flat().length) return;
        const timer = setTimeout(game.resetStates, 2000);
        return () => clearTimeout(timer);
    }, [game.winningCombination, game.availableFields]);

    return (
        <section className={'game'}>
        <div className={'game_container'}>
            <Lottie
                onComplete={() => setStartGame(true)}
                loop={false}
                animationData={gridAnimationData}
            />
            {startGame && <Board {...game} />}
        </div>
        </section>
    );
});