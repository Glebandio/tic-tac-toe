import Lottie from "lottie-react";
import circleAnimationData from "../../../assets/lottie/json/oval.json";
import crossAnimationData from "../../../assets/lottie/json/cross.json";
import type {FieldProps} from "../../interfaces/FieldProps.ts";
import './field.css'

export const Field = ({
                          cell,
                          userCombination,
                          compCombination,
                          winningCombination,
                          isUserTurn,
                          handleCellClick,
                          getRandomNumberFromBoard,
                          checkWinner,
                          setIsUserTurn,
                      }: FieldProps) => {
    const isUser = userCombination.includes(cell);
    const isComp = compCombination.includes(cell);
    const isOccupied = isUser || isComp;

    const handleClick = () => {
        if (isOccupied || !isUserTurn) return;
        handleCellClick(cell);
        setIsUserTurn(false);
    };

    return (
        <div
            className={`game_field ${winningCombination?.includes(cell) ? "win" : ""} ${
                winningCombination?.length ? "dissapear" : ""
            }`}
            onClick={handleClick}
        >
            {isUser ? (
                <Lottie
                    onComplete={() => {
                        if (!checkWinner(userCombination)) {
                            handleCellClick(getRandomNumberFromBoard(), true);
                        }
                    }}
                    className='game_field-mark'
                    loop={false}
                    animationData={circleAnimationData}
                />
            ) : isComp ? (
                <Lottie
                    onComplete={() => {
                        if (!checkWinner(compCombination)) {
                            setIsUserTurn(true);
                        }
                    }}
                    className='game_field-mark'
                    loop={false}
                    animationData={crossAnimationData}
                />
            ) : null}
        </div>
    );
};