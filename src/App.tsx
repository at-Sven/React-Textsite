import React from 'react';
import axios from 'axios';
import './App.css';

import Coin from '../src/Coin';

interface State {
  coins: Coin[];
}
export default class App extends React.Component<{}, { coins: object[] }> {

  constructor(props: any) {
    super(props);
    this.state = { coins: [] };
  }




  componentDidMount() {
    axios.get('https://api.coingecko.com/api/v3/coins')
      .then((res) => {
        this.setState({ coins: res.data });
      })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Cryptocurrency Status</h1>
          <span id="isItFryday">(Heute ist {new Date().getDay() === 5 ? 'Freitag, Wuho!' : 'nicht Freitag'})</span>

          <div className="content">
            {this.state.coins.map((coin: any) => (
              <div key={coin.id} className="coinFrame">
                <p> <img src={coin.image.thumb} alt="" /> {coin.name}</p>
              </div>
            ))}
          </div>

          {this.state.coins.map((coin: any) => (
            <div key={coin.id} className="coinDetail">
              <div>
                <img src={coin.image.large} alt="" />
                <h1>{coin.name} ({coin.symbol})</h1>
                <hr />
                <h2>last update</h2>
                <p>{new Date(coin.last_updated).toUTCString()}</p>
                <hr />
                <h2>Marked Data</h2>
                <div className="marketInfos">
                  <div className="currentState">
                    <p><strong>Current Prizes:</strong></p>
                    <p>${coin.market_data.current_price.usd} </p>
                    <p>{coin.market_data.current_price.eur}€ </p>
                    <p>¥{coin.market_data.current_price.jpy} </p>
                  </div>
                  <div>
                    <p><strong>High / Low:</strong> </p>
                    <p><span id="highest">↑</span> {coin.market_data.high_24h.usd} <span id="lowest">↓</span> {coin.market_data.low_24h.usd}</p>
                    <p><span id="highest">↑</span> {coin.market_data.high_24h.eur} <span id="lowest">↓</span> {coin.market_data.low_24h.eur}</p>
                    <p><span id="highest">↑</span> {coin.market_data.high_24h.jpy} <span id="lowest">↓</span> {coin.market_data.low_24h.jpy}</p>
                  </div>
                </div>
                <div className="prizePercent">
                  <p><strong>Prize Changes in percent:</strong> </p>
                  <p>24 hours: {Math.round(coin.market_data.price_change_percentage_24h * 100) / 100}% </p>
                  <p>7 Days: {Math.round(coin.market_data.price_change_percentage_7d * 100) / 100}% </p>
                  <p>14 Days : {Math.round(coin.market_data.price_change_percentage_14d * 100) / 100}% </p>
                </div>
                <hr />
                <p><strong>Prize Changes in the last 24 hours:</strong> </p>
                <p>${Math.round(coin.market_data.price_change_24h * 100) / 100} US Dollar</p>
              </div>
            </div>
          ))}
        </header>
      </div>
    );
  }
}
