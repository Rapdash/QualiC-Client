import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import { SignUpPage, SignInPage } from "../../pages";
import { Navbar } from "../Navbar";


export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
        </BrowserRouter>
    )
}