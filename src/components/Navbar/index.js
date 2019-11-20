import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Navbar as BNavbar, Nav } from "react-bootstrap"

import { NavItem } from "./NavItem";
import { FirebaseContext } from "../../data/firebase";

export const Navbar = () => {
    const firebase = useContext(FirebaseContext);
    return (
        <BNavbar expand="md">
            <Link to="/">
                <BNavbar.Brand>QualiC</BNavbar.Brand>
            </Link>
            <BNavbar.Toggle />
            <BNavbar.Collapse>
                <Nav className="mr-auto">
                { !firebase.auth.currentUser && (
                    <>
                    <NavItem to="/" text="Home" />
                    <NavItem to="/" text="Create New User" />
                    </>
                    )
                }
                </Nav>
            </BNavbar.Collapse>
        </BNavbar>
    )
}