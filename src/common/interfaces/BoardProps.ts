export interface BoardProps {
    userCombination: number[];
    compCombination: number[];
    winningCombination: number[] | null;
    isUserTurn: boolean;
    handleCellClick: (cell: number, isComputer?: boolean) => void;
    getRandomNumberFromBoard: () => number;
    checkWinner: (playerCombination: number[]) => boolean;
    setIsUserTurn: (turn: boolean) => void;
}