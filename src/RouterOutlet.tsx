import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CoinDetails from './components/CoinDetails'
import CryiptCoins from './components/CryptCoins'
import Forms from './components/Forms';

export default function RouterOutlet() {
    return (
        <Switch>

            <Route path='/coins/:id'>
                <CoinDetails />
            </Route>


            <Route path='/coins'>
                <CryiptCoins />
            </Route>



            <Route path='/form'>
                <Forms />
            </Route>

            <Route path='/'>
            </Route>
        </Switch >
    )
}
