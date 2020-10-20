import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    {/* <p>Header</p> */}
                    <Nav>
                        <NavItem>
                            <NavLink className="nav" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav" href="/CatIndex">Cat Index</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav" href="/CatNew">Create New Kitty</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </>
        )
    }
}

export default Header