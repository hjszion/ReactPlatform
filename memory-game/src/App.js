import React, {useState, useEffect} from 'react';
import './App.css';
import Grid from "./components/Grid";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            game_status: 1,
            answer:Array(16).fill(0),
            guess:Array(16).fill(0),
            guess_cnt:0,
            result:Array(16).fill(0),
            notification:"",
        };
    }

    initiateGame(){
        console.log("Initiate Game");
        const new_answer = Array(16).fill(0);
        for(var i=0; i<4; i++){
            var rdn = Math.floor(Math.random()*Math.floor(16));
            new_answer[rdn] = 1;
        };
        const new_guess = Array(16).fill(0);
        const new_result = Array(16).fill(0);
        this.setState({game_status: 1, answer:new_answer, guess:new_guess, guess_cnt:0, result:new_result, notification:""});
        setTimeout(() => {this.second_phase()}, 1000);
        // setTimeout(this.second_phase(), 3000);
    }

    second_phase(){
        console.log("Second Phase!");
        this.setState({game_status: 2, notification: "Get Ready to memorize cells in 3 seconds!"});
        setTimeout(() => {this.third_phase()}, 3000);
    }

    third_phase(){
        console.log("Third Phase!");
        this.setState({game_status: 3, notification: "You Only Got 3 Seconds to remember!", result:this.state.answer});
        setTimeout(() => {this.forth_phase()}, 3000);
    }

    forth_phase(){
        console.log("Forth Phase!");
        this.setState({game_status: 4, notification: "Guess the correct cells! You have 6 seconds!", result:this.state.guess});
        setTimeout(() => {this.final_phase()}, 6000);
    }

    final_phase(){
        console.log("Final Phase!");
        const compare = Array(16).fill(0);
        for(var i=0; i<16; i++){
            if(this.state.answer[i] == 1 &&  this.state.guess[i] == 1){
                compare[i] = 3;
            }else if(this.state.answer[i] == 1 && this.state.guess[i] != 1){
                compare[i] = 4;
            }else if(this.state.answer[i] != 1 && this.state.guess[i] == 1){
                compare[i] = 5;
            }
        }
        this.setState({game_status: 5, notification: `You guess right ${this.state.guess_cnt} out of ${4}`, result:compare});
    }

    guess(i){
        if(this.state.game_status == 4){
            console.log("guessing!");
            const tmp_guess = this.state.guess;
            if(tmp_guess[i] == 0){
                tmp_guess[i] = 1;
                if(this.state.answer[i] == tmp_guess[i]){
                    this.setState({guess_cnt:this.guess_cnt+1});
                }
                this.setState({result:tmp_guess, guess:tmp_guess});
            }
        }
    }

    render(){
        var btn_str = "";
        if(this.state.game_status === 1){
            btn_str = "Start Game!";
        }else if(this.state.game_status === 5){
            btn_str = "Play Again!";
        };
        const btn = <button onClick={() => this.initiateGame()}>{btn_str}</button>;
        return (
            <div className="App">
                <h1>Memory Game</h1>
                <p>{this.state.notification}</p>
                {/*{*/}
                {/*    () => {*/}
                {/*        console.log("status:", this.state.game_status);*/}
                {/*        if (this.state.game_status == 1 || this.state.game_status == 5) {*/}
                {/*            return btn;*/}
                {/*        }*/}
                {/*    }*/}
                {/*}*/}
                {this.state.game_status == 1 || this.state.game_status == 5 ? btn : ""}
                <br />
                <Grid guess={(i) => this.guess(i)} result={this.state.result}/>
            </div>
        );
    }
}

export default App;


