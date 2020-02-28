import React from 'react';
import axios from 'axios';
import './App.css';

import Coin from '../src/Coin';
import CoinDetails from './CoinDetails';

interface State {
  coins: Coin[];
  coinID: string;
}
export default class App extends React.Component<{}, State> {

  componentDidMount() {
    axios.get('https://api.coingecko.com/api/v3/coins')
      .then((res) => {
        this.setState({ coins: res.data });
      })
  }

  showCoinDetails(coinID: string, e: any) {
    console.log(coinID + ", für spätere Aufrufe");
    this.setState({ coinID: coinID });
  };

  render() {
    if (!this.state) { return null }
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Cryptocurrency Status</h1>
          <span id="isItFryday">(Heute ist {new Date().getDay() === 5 ? 'Freitag, Wuho!' : 'nicht Freitag'})</span>

          <div className="content">
            {this.state.coins.map((coin: any) => (
              <div key={coin.id} className="coinFrame"
                onClick={(e) => this.showCoinDetails(coin.id, e)}>
                <p> <img src={coin.image.thumb} alt="" /> {coin.name}</p>
              </div>
            ))}
          </div>

          <CoinDetails coindID={this.state.coinID} />
        </header>
      </div>
    );
  }
}
