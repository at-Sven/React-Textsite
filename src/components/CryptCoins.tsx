import React from 'react';
import axios from 'axios';
import '../App.css';
import Coin from '../Coin';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
    coins: Coin[]
}

interface State {
    coins: Coin[];
}

class CryptCoins extends React.Component<any, State> {

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins')
            .then((res) => {
                this.setState({ coins: res.data });
            })
    }

    showCoinDetails(coinID: string, e: any) {
        console.log(coinID + ", für spätere Aufrufe");
    };

    render() {
        if (!this.state) { return null }
        return (
            <div className="content">
                {this.state.coins.map((coin: any) => (
                    <div key={coin.id} className="coinFrame"
                        onClick={() => this.props.history.push(`/coins/${coin.id}`)}>
                        <p> <img src={coin.image.thumb} alt="" /> {coin.name}</p>
                    </div>
                ))}
            </div>

        );
    }
}

export default withRouter(CryptCoins)
