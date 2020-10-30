import React from 'react'

// React Router
import { Link } from 'react-router-dom'

// Logo
import { ReactComponent as Logo } from './../img/olx-logo.svg';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

export default function Header() {
    return (
        <nav className="header flex">
            <Logo />
            <div className="location flex">
                <SearchIcon className="icon__location" />
                <input className="input__location" placeholder="Pakistan" />
                <button className="button__location">
                    <ExpandMoreIcon />
                </button>
            </div>
            <div className="search__product flex">
                <input 
                    type="text" 
                    className="searchText__product" 
                    placeholder="Find Cars, Mobile Phones and more..." 
                />
                <SearchIcon />
            </div>
            <div className="header__buttons flex">
                <button>
                    Login
                </button>
                <button>
                    <AddIcon />
                    SELL
                </button>
            </div>
        </nav>
    )
}
