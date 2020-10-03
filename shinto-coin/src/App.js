import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom';
import Home from "./components/Home";
import Mine from "./components/Mine";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Ledger from "./components/Ledger";
import './App.css';
import WrapHome from "./components/HOCs/WrapHome";
import WrapMine from "./components/HOCs/WrapMine";
import WrapBuy from "./components/HOCs/WrapBuy";
import WrapSell from "./components/HOCs/WrapSell";
import WrapLedger from "./components/HOCs/WrapLedger";
import WrapDetail from "./components/HOCs/WrapDetail";

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {history:[], balance:100, shinto:0, rate:0.5, cnt:0, questions:[
              ["Qeustion: what is 1+1?",2],
              ["Question: what is 2+2?",4],
              ["Questions: what is 3+3?",6],
              ["Question: what is 4+4?",8],
              ["Question: what is 5+5?",10]
          ],
          record:null,
          url:""
      };
  }

  UpdateCoin = (amount) =>{
      console.log("updating coins!");
      this.setState({shinto:this.state.shinto+parseInt(amount)});
  }

  UpdateBalance = (factor, amount) => {
      console.log("updating balances!", amount)
      this.setState({balance:this.state.balance+factor*Math.floor(amount/this.state.rate)});
  }

  UpdateHistory = (record) => {
      console.log("updating history!");
      const prev = this.state.history.slice();
      prev.push(record);
      this.setState({history:prev, cnt:this.state.cnt+1});
  }

  MineCoin = () => {
      console.log("mining coins!");
      this.UpdateCoin();
      const record = {id:this.state.cnt, action:"mine", amount:1, value:Math.floor(1/this.state.rate)};
      this.UpdateHistory(record);
  }

  BuyCoin = (amount) => {
      console.log("buying coins!");
      if(this.state.balance >= Math.floor(amount/this.state.rate)){
          this.UpdateCoin(amount);
          this.UpdateBalance(-1, amount);
          // this.setState({balance:this.state.balance-Math.floor(amount/this.state.rate)});
          const record = {id:this.state.cnt, action:"buy", amount:amount, value:Math.floor(amount/this.state.rate)};
          this.UpdateHistory(record);
      }else{
          alert("not enough money to buy!");
      }
      console.log("state:", this.state);
  }

  SellCoin = (amount) => {
      console.log("selling coins!");
      if(amount <= this.state.shinto){
          this.UpdateBalance(1, amount);
          this.UpdateCoin(-amount);
          const record = {id:this.state.cnt, action:"sell", amount:amount, value:Math.floor(amount/this.state.rate)};
          this.UpdateHistory(record);
      }else{
          alert("not enough coins to sell!");
      }
      console.log("this.state:", this.state);
  }

  handleSubmit = (idx, answer) => {
      console.log("questions:", this.state.questions, "idx:", idx);
      console.log("question:", this.state.questions[idx]);
      console.log("answer:", answer);
      if(answer == this.state.questions[idx][1]){
          console.log("correct answer!");
          this.MineCoin();
      }else{
          alert("Wrong answer!");
      }
  }

  assignQuestion = () => {
      let idx = Math.floor(Math.random()*this.state.questions.length);
      return [idx, this.state.questions[idx]];
  }

  showDetail = (idx) => {
      // console.log("showing detail and idx is:", idx);
      const url = "/transaction" + "/" + idx;
      console.log("url:", url,"idx:", idx);
      console.log("record:", this.state.record);
      console.log("props:", this.props);
      this.props.history.push(url);
      this.setState({record:this.state.history[idx], url:url});
  }

  render(){
      return (
          <BrowserRouter>
              <div className="App">
                  <button><Link to="/home">Home</Link></button>
                  <button><Link to="/mine">Mine Coins</Link></button>
                  <button><Link to="/buy">Buy Coins</Link></button>
                  <button><Link to="/sell">Sell Coins</Link></button>
                  <button><Link to="/ledger">Browse Leger</Link></button>
                  <br />
                  <Switch>
                      <Route exact path="/home" component={WrapHome} />
                      <Route exact path="/mine" component={props => {
                          const question = this.assignQuestion();
                          return <WrapMine idx={question[0]} question={question[1]} handleSubmit={this.handleSubmit} />
                      }} />
                      <Route exact path="/buy" component={props => {
                          return <WrapBuy balance={this.state.balance} shinto={this.state.shinto} rate={this.state.rate} handleBuy={this.BuyCoin} />
                      }} />
                      <Route exact path="/sell" component={props => {
                          return <WrapSell balance={this.state.balance} shinto={this.state.shinto} rate={this.state.rate} handleSell={this.SellCoin} />
                      }} />
                      <Route exact path="/ledger" component={props => {
                          return <WrapLedger history={this.state.history} showDetail={this.showDetail} />
                      }}
                      />
                      <Route exact path="/transaction/:id" component={props => {
                          return <WrapDetail record={this.state.record.slice()} key={this.props.match.params.id} />;
                      }}
                      />
                  </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default withRouter(App);






