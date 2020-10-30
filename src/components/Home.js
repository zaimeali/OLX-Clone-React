import React from 'react'

// Material UI
import { Grid } from '@material-ui/core'

// Styles
import '../App.css'

// Components
import Item from './Item'

export default function Home() {

    const items = [
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/wiesfi40s6fp3-PK/image;s=272x0',
            title: 'Body massager 2 speed',
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/c27mo73ugckv-PK/image;s=272x0',
            title: '3.25 Marla House fully furnished'
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/5m70na2p76uc3-PK/image;s=272x0',
            title: 'Center Table',
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vi3zy24xq2672-PK/image;s=272x0',
            title: 'Hayatabad Marla'
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vddtvhqkncm02-PK/image;s=272x0',
            title: 'Samsung note 5 dual sim available complete box sale and exchange',
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/fpu5fgzm14ik-PK/image;s=272x0',
            title: 'Gaming keyboard and mouse and razer mouse pad'
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vikiko64jizb1-PK/image;s=272x0',
            title: 'Audionic s45 airbuds',
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/gzuyubuqf92h1-PK/image;s=272x0',
            title: 'Iphone 11 128GB LLA STOCK BOX PACK NON ACTIVE NON PTA❌'
        },
    ]

    return (
        <div className="main__container">
            <Grid container spacing={ 3 }>
                { items.map((item, index) => (
                    <Item key={ index } Title={ item.title } Image={ item.img } />
                ) ) }
            </Grid>
        </div>
    )
}
