import { Field } from "../field/field.tsx";
import {BOARD} from "../../constatns/board.ts";
import type {BoardProps} from "../../interfaces/BoardProps.ts";
import "./board.css"

export const Board = ({
                          userCombination,
                          compCombination,
                          winningCombination,
                          isUserTurn,
                          handleCellClick,
                          getRandomNumberFromBoard,
                          checkWinner,
                          setIsUserTurn,
                      }: BoardProps) => (
    <div className="game_board">
        <div className="game_board-body">
            {BOARD.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <Field
                        key={`${rowIndex}-${cellIndex}`}
                        cell={cell}
                        userCombination={userCombination}
                        compCombination={compCombination}
                        winningCombination={winningCombination}
                        isUserTurn={isUserTurn}
                        handleCellClick={handleCellClick}
                        getRandomNumberFromBoard={getRandomNumberFromBoard}
                        checkWinner={checkWinner}
                        setIsUserTurn={setIsUserTurn}
                    />
                ))
            )}
        </div>
    </div>
);