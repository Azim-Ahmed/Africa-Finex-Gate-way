import React, { useState } from 'react';
import {
    Navbar,
    Nav, Collapse,
    NavItem,
    Button,
    NavbarToggler,
    NavbarBrand,
    Container
} from 'reactstrap';
import {
    Link,
    NavLink
} from "react-router-dom";
import './NavSection.css'

const NavSection = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <Navbar className="navsection_background" light expand="md">
            <Container className="">
                <NavbarBrand >
                    <Link className="underline_navsection" to="/"><strong>
                        <h3 id="NavBrandArea" className="colorSection">Africa Finex gateway Fiat</h3>
                    </strong></Link>
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggleNavbar}
                    className="mr-2 bg-danger"
                />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav
                        style={{ fontSize: "1.3rem" }}
                        className=" ml-auto justify-content-around  align-items-center"
                        navbar
                    >
                        <NavItem>
                            <NavLink className="mr-4  colorSection" to="/">Buy Coin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="mr-3 colorSection" to="/stablecoinsellone">Sell Coin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="mr-3 colorSection" to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className=" mr-3 colorSection" to="/about">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            {
                                <Button outline color="danger" className="text-center ">Helpline</Button>
                            }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>

    );
};

export default NavSection;