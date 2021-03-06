import React, { useState } from 'react'

// React Redux
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { logoutSuccess } from '../redux/reducer'

// Styles
import '../App.css'

// firebase
import firebase from 'firebase'
import '../firebase/firebase'


export const logout = () => async dispatch => {
    try {
        // console.log("pressed")
        return dispatch(logoutSuccess())
    }
    catch (e) {
        return console.error("Error in logout: ", e)
    }
}

const PopUp = () => {

    const dispatch = useDispatch()

    return (
        <button className="logOutBtn" onClick={ () => {
            firebase.auth().signOut().then(function() {
                dispatch(logout())
              }).catch(function(error) {
                console.error(error)
              });
        } }>
            Log out
        </button>
    )
}

export default function SignIn() {
    
    const user = useSelector(state => state.user)

    let usernameUnClean = user.user
    let username = ''
    if(usernameUnClean.includes(" ")){
        let userArr = usernameUnClean.split(" ")
        username = userArr[0]
    }
    else {
        username = usernameUnClean
    }

    const [isLogOut, setIsLogOut] = useState(false)

    return (
        <span className="logoutSection">
            <span 
                className="userLoggedIn"
                onClick={ () => setIsLogOut(!isLogOut) }
            >
                {/* console.log(user.user.includes(" ")) */}
                { username }
            </span>
            { isLogOut && <PopUp /> }
        </span>
    )
}
