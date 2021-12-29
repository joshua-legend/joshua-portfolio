import React, {useState} from 'react';
import './App.css';
import Pagewrap from "./components/pagewrap/pagewrap";
import Menu from "./components/menu/menu";

function App() {

    const [menu, setMenu] = useState(false);

    return (
    <div className="App">
        <Pagewrap isOpenMenu={menu}  />
        {/*<Menu IsOpenMenu={menu}/>*/}
    </div>
    );
}

export default App;
