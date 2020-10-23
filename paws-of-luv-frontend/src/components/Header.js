import React, { useState } from 'react'

import {
    Collapse,
    Container,
    Jumbotron,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import leftCat from '../assets/leftCat.png';
import rightCat from '../assets/rightCat.png';

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container fluid>
                    <div className="goodStretch">
                        <img src={leftCat} alt="kitty stretch left" className="leftCat" />
                        <h1 className="display-3">Paws of Luv</h1>
                        <img src={rightCat} alt="kitty stretch right" className="rightCat" />
                        <br />
                    </div>
                    <div className="goodStretch">
                        <p className="lead">Your Puuurrfect Match Awaits!</p>
                    </div>
                    <Navbar className="butts" light>
                        <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/catindex">See All the Cats</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/catnew">Create a New Cat</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </Jumbotron>
        </React.Fragment >
    )
}

export default Header
