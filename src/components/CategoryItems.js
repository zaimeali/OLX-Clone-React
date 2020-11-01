import React from 'react'
import { Card, CardColumns, Container, Row } from 'react-bootstrap'

// Styles
import '../App.css'

export default function CategoryItems() {

    const itemsCategory = [
        {
            title: "Vehicles",
            items: ["Tractors & Trailers", "Boats", "Other Vehicles", "Rickshaws", "Buses, Vans & Trucks", "Spare Parts", "Cars Accessories", "Cars on Installment", "Cars"],
        },
        {
            title: "Mobiles",
            items: ["Mobile Phones", "Accessories", "Tablets"],
        },
        {
            title: "Electronics & Home Appliances",
            items: ["Washing Machines & Dryers", "Fridges & Freezers", "AC & Coolers", "Kitchen Appliances", "Generators, UPS & Power Solutions", "Other Home & Appliances", "Games & Entertainment", "Cameras & Accessories", "TV-Video-Audio", "Computers & Accessories"],
        },
        {
            title: "Property for Sale",
            items: ["Portions & Floors", "Shops - Offices - Commercial Spaces", "Apartments & Flats", "Houses", "Land & Plots"],
        },
        {
            title: "Animals",
            items: ["Other Animals", "Pet Food & Accessories", "Horses", "Livestock", "Dogs", "Cats", "Hens & Aseel", "Birds", "Fish & Aquariums"],
        },
        {
            title: "Furniture & Home Decor",
            items: ["Other Household items", "Office Furniture", "Curtains & Blinds", "Rugs & Carpets", "Painting & Mirrors", "Garden & Outdoor", "Tables & Dining", "Home Decoration", "Beds & Wardrobes", "Sofa & Chairs"],
        },
        {
            title: "Business, Industrial & Agriculture",
            items: ["Medical & Pharmacy", "Other Business & Industry", "Agriculture", "Construction", "Trade", "Food & Restaurants", "Business for Sale"],
        },
        {
            title: "Bikes",
            items: ["Scooters", "ATV & Quads", "Bicycles", "Spare Parts", "Motorcycles"],
        },
        {
            title: "Fashion & Beauty",
            items: ["Other Fashion", "Couture", "Lawn & Pret", "Wedding", "Watches", "Skin & Hair", "Make Up", "Jewellery", "Footwear", "Clothes", "Accessories"],
        },
        {
            title: "Property for Rent",
            items: ["Land & Plots", "Vacation Rentals - Guest Houses", "Roommates", "Rooms", "Shops", "Offices", "Apartments", "Houses"],
        },
        {
            title: "Jobs",
            items: ["Other Jobs", "Part-Time", "Domestic Stuff", "Medical", "Manufacturing", "Accounting & Finance", "Human Resources", "IT & Networking"],
        },
        {
            title: "Services",
            items: ["Farm & Fresh Food", "Catering & Restaurants", "Home & Office Repairs", "Movies", "Health & Beauty", "Electronic & Computer Repair", "Car Rental", "Travel & Visa", "Education & Classes"],
        },
        {
            title: "Books, Sports & Hobbies",
            items: ["Other Hobbies", "Gym & Fitness", "Sports & Equipment", "Books & Magazines"],
        }
    ]

    return (
        <Container>
            <Row className="category__dropdown">
                <CardColumns className="category__cardColumns">
                    { itemsCategory.map((item, index) => (
                        <Card key={ index } className="category__card">
                            <Card.Title 
                                style={{ textAlign: "left", color: '#002f34', fontSize: '14px', }}
                            >{ item.title }</Card.Title>
                            
                                <ul className="category__list">
                                    { item.items.map((cat, i) => (
                                        <li className="category__li" key={ i }>{ cat }</li>
                                    )) }
                                </ul>
                        </Card>
                    )) }
                </CardColumns>
            </Row>
        </Container>
    )
}
