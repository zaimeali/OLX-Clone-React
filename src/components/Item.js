import { Grid } from '@material-ui/core'
import React from 'react'
import { Card } from 'react-bootstrap'

// Styles
import '../App.css'

export default function Item({ Image, Price, Title, Place, Time, IsFeatured }) {

    const formatter = new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 3,
        // style: 'currency',
        // currency: 'PKR',
    });

    return (
        <Grid item xs={ 3 }>
            <Card className="card__wrapper">
                <div className="card__image__div">
                    <Card.Img className="card__image" alt={ Title } src={ Image } />
                </div>
                <Card.Body>
                    <Card.Title className="card__price">Rs.{ formatter.format(Price) }</Card.Title>
                    <Card.Text className="card__title">{ Title }</Card.Text>
                    <small className="text-muted card__place">{ Place }</small>
                </Card.Body>
                {/*<Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>*/}
            </Card>
        </Grid>
    )
}
