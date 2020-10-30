import { Grid } from '@material-ui/core'
import React from 'react'
import { Card } from 'react-bootstrap'

// Styles
import '../App.css'

export default function Item({ Image, Price, Title, Place, Time }) {
    return (
        <Grid item xs={ 3 }>
            <Card className="card__wrapper">
                <Card.Img className="card__image" alt={ Title } src={ Image } />
                <Card.Body>
                    <Card.Title>{ Title }</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                {/*<Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>*/}
            </Card>
        </Grid>
    )
}
