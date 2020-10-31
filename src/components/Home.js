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
            price: 2500,
            location: "Qadri Colony, Lahore",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/c27mo73ugckv-PK/image;s=272x0',
            title: '3.25 Marla House fully furnished',
            price: 7500000,
            location: "Pak Arab Housing Society, Lahore",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/5m70na2p76uc3-PK/image;s=272x0',
            title: 'Center Table',
            price: 18800,
            location: "Mohlanwal Road, Lahore",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vi3zy24xq2672-PK/image;s=272x0',
            title: 'Hayatabad Marla',
            price: 40000000,
            location: "Peshawar, KPK",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vddtvhqkncm02-PK/image;s=272x0',
            title: 'Samsung note 5 dual sim available complete box sale and exchange',
            price: 17500,
            location: "PIA Colony, Rawalpindi",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/fpu5fgzm14ik-PK/image;s=272x0',
            title: 'Gaming keyboard and mouse and razer mouse pad',
            price: 5000,
            location: "Askari Villas, Rawalpindi",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/vikiko64jizb1-PK/image;s=272x0',
            title: 'Audionic s45 airbuds',
            price: 6500,
            location: "Sahiwal, Punjab",
            isFeatured: false,
        },
        {
            img: 'https://apollo-singapore.akamaized.net:443/v1/files/gzuyubuqf92h1-PK/image;s=272x0',
            title: 'Iphone 11 128GB LLA STOCK BOX PACK NON ACTIVE NON PTA❌',
            price: 122500,
            location: "Employee Society, Karachi",
            isFeatured: false,
        },
    ]

    return (
        <div className="main__container">
            <Grid container spacing={ 3 }>
                { items.map((item, index) => (
                    <Item 
                        key={ index } 
                        Title={ item.title } 
                        Image={ item.img } 
                        Price={ item.price }
                        Place={ item.location }
                        IsFeatured={ item.isFeatured }
                    />
                ) ) }
            </Grid>
        </div>
    )
}
