import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Navbar as BNavbar, Nav } from "react-bootstrap"

import * as routes from "../../constants/routes";
import { NavItem } from "./NavItem";
import { FirebaseContext } from "../../data/firebase";

export const Navbar = () => {
    const firebase = useContext(FirebaseContext);
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
                    <NavItem to={routes.checklists} text="Checklists" />
                    <NavItem to={routes.newChecklist} text="Create New Checklist" />
                    </>
                    )
                }
                </Nav>
            </BNavbar.Collapse>
        </BNavbar>
    )
}