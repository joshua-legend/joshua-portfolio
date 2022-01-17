import React, {useState} from 'react';
import styles from "./game.module.css";
import Select from "./select/select";
import GameField from "./fields/gamefield";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faMobile} from "@fortawesome/free-solid-svg-icons";

const Game = () => {

    const [selected, setSelected] = useState(`not`);
    const [music, setMusic] = useState(``);
    const onChange = () => {setSelected(`yes`)}

    return (
        <>
            <main className={styles.wrap}>
                <video className={styles.video} src="gamebg.mp4" loop autoPlay muted></video>
                {selected == `not` && <Select change={onChange} select={setMusic}/>}
                {selected == `yes` &&
                    <section className={styles.circle}>
                        <article>
                            <GameField class={music}/>
                        </article>
                    </section>}
                <section className={styles.no}>
                    <FontAwesomeIcon icon={faMobile} size="lg" />
                    <p>Sorry, mobile or tablet cannot be supported or the screen is too small.</p>
                </section>
            </main>
        </>
    );
}
;

export default Game;
