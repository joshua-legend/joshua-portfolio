import React from 'react';
import styles from "./game.module.css";
import Leftline from "./lines/leftline";

const Game = () => {
    return (
        <>
            <main className={styles.wrap}>
                {/*<UtilityBar />*/}
                <Leftline />
                {/*<Dino />*/}

            </main>
        </>
    );
};

export default Game;
