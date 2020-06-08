import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import MainMenu from '../components/MainMenu.component';

import Home from "../pages/home";

// import PrivateRoute from "./privateRoute";

export default function Router() {
    return (
        <div>
            <MainMenu></MainMenu>
            <Switch>
                <Route exact path="/" component={Home} />

                {/* <Route exact path="/registration" component={Registration} /> */}
                {/* <PrivateRoute exact path="/dashboard" component={MainContent} /> */}

                <Redirect to="/" />
            </Switch>
        </div>
    )
}
