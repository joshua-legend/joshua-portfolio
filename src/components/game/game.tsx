import React from 'react';
import styles from "./game.module.css";
import Fields from "./fields/fields";

const Game = () => {
    return (
        <>
            <main className={styles.wrap}>
                {/*<UtilityBar />*/}
                <Fields />
                {/*<Dino />*/}

            </main>
        </>
    );
};

export default Game;
