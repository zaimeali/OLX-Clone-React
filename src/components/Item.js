import React, { useState } from 'react'

// Bootstrap
import { Card } from 'react-bootstrap'

// Material UI
import { Grid } from '@material-ui/core'

// Styles
import '../App.css'

// Icons
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function Item({ Image, Price, Title, Place, Time, IsFeatured }) {

    const [isHeart, setIsHeart] = useState(false)

    const formatter = new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 3,
        // style: 'currency',
        // currency: 'PKR',
    });

    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
            <Card className="card__wrapper">
                { IsFeatured && <span className="card__featured__tag">Featured</span> }
                { 
                    isHeart ? 
                        <span className="card__heart__icon">
                            <FavoriteIcon className="card__heart__icon__isSelected" onClick={ () => setIsHeart(!isHeart) } />
                        </span> : 
                        <span className="card__heart__icon">
                            <FavoriteBorderIcon onClick={ () => setIsHeart(!isHeart) } />
                        </span> 
                }
                <div className="card__image__div">
                    <Card.Img style={{ objectFit: "cover", }} className="card__image" alt={ Title } src={ Image } />
                </div>
                <Card.Body className="card__body">
                    <Card.Title className="card__price">Rs.{ formatter.format(Price) }</Card.Title>
                    <Card.Text className="card__title">{ Title }</Card.Text>
                    <small className="text-muted card__place">{ Place }</small>
                </Card.Body>
                { IsFeatured && <div className="card__featured" /> }
                {/*<Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>*/}
            </Card>
        </Grid>
    )
}
