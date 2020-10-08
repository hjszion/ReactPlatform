import React from 'react';
import './App.css';
import WrapFarm from "./components/HOCs/WrapFarm";
import WrapCave from "./components/HOCs/WrapCave";
import WrapCasino from "./components/HOCs/WrapCasino";
import WrapHouse from "./components/HOCs/WrapHouse";
import Score from "./components/Score";
import History from "./components/history";

const App = () => {
  return (
    <div className="App">
        <div>
            <Score />
            <br />
            <WrapFarm />
            <WrapCave />
            <WrapCasino />
            <WrapHouse />
            <br />
            <History />
        </div>
    </div>
  );
}

export default App;
