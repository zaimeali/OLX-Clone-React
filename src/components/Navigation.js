import React from 'react'

// React Router
import { 
    Switch, 
    Route 
} from 'react-router-dom'

// Components
import Home from './Home'
import About from './About'

export default function Navigation() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
