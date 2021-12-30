import React, {useState} from 'react';
import './App.css';
import Pagewrap from "./components/pagewrap/pagewrap";
import Menu from "./components/menu/menu";

function App() {

    const [menu, setMenu] = useState(false);
    const changeMenu:(event: React.MouseEvent<HTMLElement>) => void = () =>{setMenu(!menu)}


    return (
    <div className="App">
        <Pagewrap isOpenMenu={menu} changeMenu={changeMenu} />
        {/*<Menu isOpenMenu={menu} changeMenu={changeMenu}/>*/}
    </div>
    );
}

export default App;
