import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    {/* <p>Footer</p> */}
                    <Nav style={{ display: "flex", justifyContent: "left" }} className="nav">
                        <NavItem>
                            <NavLink style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href="/CatIndex">Cat Index</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "black", textShadow: "1px 1px 1px black", fontSize: "18px" }} href="/CatNew">Create New Cat</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </>
        )
    }
}

export default Footer