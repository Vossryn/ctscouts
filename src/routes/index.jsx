import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Home from "../pages/home";
import Calendar from "../pages/calendar";
import Camping from "../pages/camping";
import FindaUnit from "../pages/find_a_unit";
import Resources from "../pages/resources";

import ScrollToTop from "../components/Scrolltotop.component";

import "./styles.grid.scss";

// import PrivateRoute from "./privateRoute";

const useStyles = makeStyles({
    root: {
        paddingTop: "147px",
        paddingBottom: "40px",
        marginBottom: "-10px",
        minHeight: "calc(100vh - 30px)"
    },
    paperpadding: {
        padding: "70px 20px 40px 20px",
        borderRadius: "0px"
    },
    body: {
        marginTop: "-80px",
        marginBottom: "7px",
        height: "100%"
    }
});

export default function Router() {
    const classes = useStyles();

    return (
        <div className={[classes.root, "grid-site-container"].join(" ")}>
            <div className={[classes.body, "grid-body"].join(" ")}>
                <Paper elevation={1} className={classes.paperpadding}>
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
                </Paper>
            </div>
        </div>
    )
}
