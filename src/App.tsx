import React, {useCallback, useState} from 'react';
import './App.css';
import Pagewrap from "./components/pagewrap/pagewrap";
import Menu from "./components/menu/menu";

function App() {
    const [position,setPosition] = useState([
        {id: 1, position: `Home`, themeColor: `#e1f5fe`, menuColor:`#81d4fa`},
        {id: 2, position: `Programming`, themeColor: `#ffebee`,menuColor:`#ef9a9a`},
        {id: 3, position: `Work`, themeColor: `#e8f5e9`,menuColor:`#a5d6a7`},
        {id: 4, position: `Game`, themeColor: `#fff8e1`,menuColor:`#ffe082`},
    ]);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const changeMenu:(event: React.MouseEvent<HTMLElement>) => void = () =>{setIsOpenMenu(!isOpenMenu);console.log(isOpenMenu)}


    return (
    <div className="App" >
        {!isOpenMenu &&<Pagewrap isOpenMenu={isOpenMenu} changeMenu={changeMenu} />}
        {isOpenMenu && <Menu isOpenMenu={isOpenMenu} changeMenu={changeMenu}/>}
    </div>
    );
}

export default App;
