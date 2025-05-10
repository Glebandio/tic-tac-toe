import {TicTacToe} from "./pages/Game/tic-tac-toe.tsx";
import './app.css'

export const App = () => {
    return (
        <section className={'game'}>
            <TicTacToe />
        </section>
    );
}
