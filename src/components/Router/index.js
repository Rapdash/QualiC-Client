import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import { SignUpPage } from "../../pages/SignUp";
import { Navbar } from "../Navbar";


export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            
            <Route path="/signup" component={SignUpPage} />
        </BrowserRouter>
    )
}