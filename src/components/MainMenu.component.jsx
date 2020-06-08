import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../assets/images/boy_scouts_of_america_logo.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: "0px"
    },
    logoWrapper: {
        width: "100%",
        height: "75px",
        textAlign: "center",
        backgroundColor: "white"
    },
    bsalogo: {
        height: "200px",
        marginTop: "-59px",
        marginBottom: "-59px"
    }
});

export default function MainMenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.logoWrapper}>
                <img
                    src={Logo}
                    className={classes.bsalogo}
                    alt="boy_scouts_of_america_logo"
                />
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Home" />
                <Tab label="Calendar &amp; Events" />
                <Tab label="Help Me Find a Unit" />
                <Tab label="Camping" />
                <Tab label="Resources" />
                <Tab label="Scouting.org" />
            </Tabs>
        </Paper>
    );
}