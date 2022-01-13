import React, {useState} from 'react';
import styles from "./game.module.css";
import Select from "./select/select";
import GameField from "./fields/gamefield";

const Game = () => {

    const [selected, setSelected] = useState(`not`);
    const onChange = () => {
        setSelected(`yes`)
    }

    return (
        <>
            <main className={styles.wrap}>
                <video src="bg.mp4" loop autoPlay muted></video>
                {selected == `not` && <Select change={onChange}/>}
                {selected == `yes` &&
                <section className={styles.circle}>
                    <article>
                        <GameField/>
                    </article>
                </section>
                }
            </main>
        </>
    );
}
;

export default Game;
