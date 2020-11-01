import React from 'react'

// Styles
import '../App.css'

export default function FooterItem({ title, items }) {
    return (
        <section>
            <h4 className="item__title">{ title }</h4> 
            <ul className="item__ul">
                { items.map((item, index) => (
                    <li className="item__li" key={ index }>{ item }</li>
                )) }
            </ul>
        </section>
    )
}
