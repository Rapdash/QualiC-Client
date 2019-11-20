import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import { SignUpPage, SignInPage } from "../../pages";
import { Navbar } from "../Navbar";
import * as routes from "../../constants/routes";


export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path={routes.signIn} component={SignInPage} />
            <Route path={routes.signUp} component={SignUpPage} />
        </BrowserRouter>
    )
}