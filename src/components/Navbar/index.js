import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Navbar as BNavbar, Nav } from "react-bootstrap"

import { NavItem } from "./NavItem";
import { FirebaseContext } from "../../data/firebase";

export const Navbar = () => {
    const firebase = useContext(FirebaseContext);
    console.log(firebase.auth)
    return (
        <BNavbar expand="md" variant="dark" bg="dark">
            <Link to="/">
                <BNavbar.Brand>QualiC</BNavbar.Brand>
            </Link>
            <BNavbar.Toggle />
            <BNavbar.Collapse>
                <Nav className="mr-auto">
                { !firebase.auth.currentUser && (
                    <>
                    <NavItem to="/checklists" text="Checklists" />
                    <NavItem to="/new-checklist" text="Create New Checklist" />
                    </>
                    )
                }
                </Nav>
            </BNavbar.Collapse>
        </BNavbar>
    )
}