import React from 'react'

// React Router
// import { Link } from 'react-router-dom'

// Logo
import { ReactComponent as Logo } from './../img/olx-logo.svg';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

// React Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import SignIn from './SignIn';


const LoginButton = ({ isLogin, setLogin }) => {
    return (
        <button className="loginBtn" onClick={() => setLogin(!isLogin)}>
            Login
        </button>
    )
}

export default function Header({ isLogin, setLogin }) {


    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    if(isLogin) {
        document.getElementById('overflow__hide').style.overflow = "hidden";
    }
    else {
        document.getElementById('overflow__hide').style.overflow = "auto";
    }

    return (
        <nav className="header flex">
            <Logo />
            <div className="location flex">
                <SearchIcon className="icon__location icons" />
                <input className="input__location" placeholder="Pakistan" />
                <button className="button__location icons">
                    <ExpandMoreIcon />
                </button>
            </div>
            <div className="search__product flex">
                <input 
                    type="text" 
                    className="searchText__product" 
                    placeholder="Find Cars, Mobile Phones and more..." 
                />
                <div className="searchText__buttonDiv">
                    <SearchIcon className="searchText__button" />
                </div>
            </div>
            <div className="header__buttons flex">
                { user.user ? <SignIn /> : <LoginButton isLogin={ isLogin } setLogin={ setLogin } /> }
                <button className="sellBtn">
                    <AddIcon />
                    <span className="sellBtnText">SELL</span>
                </button>
            </div>
        </nav>
    )
}
