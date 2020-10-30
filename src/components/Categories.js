import React, { useState } from 'react'

// React Router
import { Link } from 'react-router-dom';

// Styles
import '../App.css'

// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Categories() {

    const category = [
        "Mobile Phones",
        "Cars",
        "Motorcycles",
        "Houses",
        "TV-Video-Audio",
        "Tablets",
        "Land & Plots",
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="categoryDiv flex">
            <div>
                <span className="allCategories__Text">All Categories</span>
                <button className="allCategories__Btn" onClick={ () => setIsOpen(!isOpen) }>
                    { isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </button>
            </div>
            <div className="category_items">
                { category.map((item, index) => (
                    <Link
                        key={ index }
                        className="category__item"
                        to={`page-${item}`}
                    >
                        { item }
                    </Link>
                )) }
            </div>
        </div>
    )
}
