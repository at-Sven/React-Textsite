import React from 'react';
import axios from 'axios';
import './App.css';

export default class CoinDetails extends React.Component<{}, { coins: object[] }> {

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
            <div className="CoinDetails" >
                <header className="App-header">

                    {this.state.coins.map((coin: any) => (
                        <div key={coin.id}>
                            <img src={coin.image.large} alt="" />
                            <h1>{coin.name} ({coin.symbol})</h1>
                            <hr />
                            <h2>last update</h2>
                            <p>{coin.last_updated}</p>
                            <hr />
                            <h2>Marked Data</h2>
                            <p><strong>Current Prize in following currencies:</strong></p>
                            <p>US Dollar ($): {coin.market_data.current_price.usd} </p>
                            <p>Euro (€): {coin.market_data.current_price.eur} </p>
                            <p>Jap. Yen (¥) : {coin.market_data.current_price.jpy} </p>
                            <p><strong>Prize Changes in the last:</strong> </p>
                            <p>24 hours: {coin.market_data.price_change_24h} US Dollar</p>
                            <p><strong>Prize Changes in percent:</strong> </p>
                            <p>24 hours: {coin.market_data.price_change_percentage_24h}% </p>
                            <p>7 Days: {coin.market_data.price_change_percentage_7d}% </p>
                            <p>14 Days : {coin.market_data.price_change_percentage_14d}% </p>
                        </div>
                    ))}
                </header>
            </div>
        );
    }
}
