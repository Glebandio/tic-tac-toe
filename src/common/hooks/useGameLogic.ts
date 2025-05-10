import { useState } from "react";
import {BOARD, initialComputerMove, winCombo} from "../constatns/board.ts";

export const useGameLogic = () => {


    const [availableFields, setAvailableFields] = useState<number[][]>(() =>
        BOARD.map((row) => row.filter((cell) => cell !== initialComputerMove))
    );
    const [compCombination, setCompCombination] = useState<number[]>([initialComputerMove]);
    const [userCombination, setUserCombination] = useState<number[]>([]);
    const [winningCombination, setWinningCombination] = useState<number[] | null>([]);
    const [isUserTurn, setIsUserTurn] = useState(true);

    const getRandomNumberFromBoard = () => {
        const allNumbers = availableFields.flat();
        const randomIndex = Math.floor(Math.random() * allNumbers.length);
        return allNumbers[randomIndex];
    };

    const handleCellClick = (targetCell: number, isComputer = false) => {
        const availableFieldsAfterClicked = availableFields.map((row) =>
            row.filter((cell) => cell !== targetCell)
        );

        setAvailableFields(availableFieldsAfterClicked);

        if (isComputer) {
            setCompCombination((prev) => [...prev, targetCell]);
        } else {
            setUserCombination((prev) => [...prev, targetCell]);
        }
    };

    const checkWinner = (playerCombination: number[]): boolean => {
        const winning = winCombo.find((combo) =>
            combo.every((num) => playerCombination.includes(num))
        );
        if (winning) {
            setWinningCombination(winning);
            setTimeout(() => resetStates(), 1000);
            return true;
        } else if (!availableFields.flat().length) {
            setWinningCombination(BOARD.flat());
            setTimeout(() => resetStates(), 1000);
            return true;
        }
        return false;
    };

    const resetStates = () => {
        const newAvailableFields = BOARD.map((row) =>
            row.filter((cell) => cell !== initialComputerMove)
        );

        setAvailableFields(newAvailableFields);
        setCompCombination([]);
        setUserCombination([]);
        setWinningCombination([]);
        setIsUserTurn(true);

        setTimeout(() => {
            setCompCombination([initialComputerMove]);
            setAvailableFields(BOARD.map((row) =>
                row.filter((cell) => cell !== initialComputerMove)
            ));
        }, 150);
    };

    return {
        availableFields,
        compCombination,
        userCombination,
        winningCombination,
        isUserTurn,
        setIsUserTurn,
        getRandomNumberFromBoard,
        handleCellClick,
        checkWinner,
        resetStates,
    };
};