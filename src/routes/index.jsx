import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Home from "../pages/home";
import Calendar from "../pages/calendar";
import Camping from "../pages/camping";
import FindaUnit from "../pages/find_a_unit";
import Resources from "../pages/resources";

import ScrollToTop from "../components/Scrolltotop.component";

// import PrivateRoute from "./privateRoute";

const useStyles = makeStyles({
    root: {
        paddingTop: "150px",
        paddingBottom: "40px",
        marginBottom: "-10px",
        minHeight: "calc(100vh - 40px)"
    }
});

export default function Router() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg" component={Paper}>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/camping" component={Camping} />
                <Route exact path="/find_a_unit" component={FindaUnit} />
                <Route exact path="/resources" component={Resources} />

                {/* <Route exact path="/registration" component={Registration} /> */}
                {/* <PrivateRoute exact path="/dashboard" component={MainContent} /> */}

                <Redirect to="/" />
            </Switch>
        </Container>
    )
}
