import React from "react";
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap"


export const NavItem = ({ to, text}) => (
    <Nav.Item>
        <LinkContainer>
            <Link to={to}>{text}</Link>
        </LinkContainer>
    </Nav.Item>
)