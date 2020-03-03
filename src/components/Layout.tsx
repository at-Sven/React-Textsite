import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    children: any
}

export default function Layout(props: Props) {
    return (
        <>
            <div className='ui large top fixed menu'>
                <div className='ui container'>
                    <NavLink exact to='/' className='item' activeClassName='active'>Home</NavLink>
                    <NavLink to='/coins' className='item' activeClassName='active'>Coins</NavLink>
                </div>
            </div>

            <div className='ui vertical stripe' style={{ marginTop: '100px' }}>
                <div className='ui middle aligned stackable grid container'>
                    {props.children}
                </div>
            </div>
        </>
    )
}