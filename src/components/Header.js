import React from 'react'

// React Router
import { Link } from 'react-router-dom'

// Components
import Navigation from './Navigation'

// Bootstrap
import { Navbar, Form, InputGroup, FormControl } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <InputGroup>
                    <FormControl 
                        placeholder="Pakistan"
                    />
                </InputGroup>
            </Form>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Navigation />
        </Navbar>
    )
}
