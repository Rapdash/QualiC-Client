import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { SignUpPage } from "../../pages/SignUp";


export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/signup" component={SignUpPage} />
        </BrowserRouter>
    )
}