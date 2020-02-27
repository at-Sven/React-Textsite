import React from 'react';
import axios from 'axios';
import './App.css';

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

          <span>Heute ist {new Date().getDay() === 5 ? 'Freitag, WUHO!' : 'nicht Freitag'}</span>

          <div className="content">
            {this.state.coins.map((coin: any) => (
              <div key={coin.id} className="coinFrame">
                <img src={coin.image.small} alt="" />
                <p>{coin.name} ({coin.symbol})</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}
