import React, {useState} from 'react';
import styles from "./game.module.css";
import Select from "./select/select";
import GameField from "./fields/gamefield";
import Fields from "./fields/fields";

const Game = () => {

    const [selected, setSelected] = useState(`not`);
    const onChange = () =>{
        setSelected(`yes`)
    }

    return (
        <>
            <main className={styles.wrap}>
                {selected==`not` && <Select change={onChange} />}
                {selected==`yes` && <GameField />}
            </main>
        </>
    );
};

export default Game;
