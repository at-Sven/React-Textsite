import React from 'react';
import axios from 'axios';
import './App.css';

export default class CoinDetails extends React.Component<any, any> {

    coin: string = this.props.coinID;

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
            .then((res) => {
                this.setState({ coins: res.data });
                console.log(this.coin);
            })
    }

    render() {
        if (!this.state) { return null }

        const coin = this.state.coins;

        return (
            <div className="CoinDetails" >
                <div className="coinDetail">
                    <div key={coin.id}>
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
            </div>
        );
    }
}
