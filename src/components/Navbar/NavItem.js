import React from "react";
import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"


export const NavItem = ({ to, text}) => (
    <Nav.Item>
        <LinkContainer to={to}>
            <Nav.Link className="mx-auto active">{text}</Nav.Link>
        </LinkContainer>
    </Nav.Item>
)