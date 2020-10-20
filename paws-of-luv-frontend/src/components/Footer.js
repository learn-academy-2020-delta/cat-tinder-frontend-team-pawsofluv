import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    {/* <p>Footer</p> */}
                    <Nav className="nav">
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/CatIndex">Cat Index</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/CatNew">Create New Cat</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </>
        )
    }
}

export default Footer