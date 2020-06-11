import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link as RouterLink } from 'react-router-dom';

import Logo from '../assets/images/boy_scouts_of_america_logo.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: "100%",
        height: "75px",
        textAlign: "center",
        backgroundColor: "white"
    },
    bsalogo: {
        maxHeight: "200px",
        marginTop: "-59px",
        marginBottom: "-59px"
    },
    spacer: {
        width: "3px",
        height: "100%",
        backgroundColor: "#003f87"
    }
});

export default function MainMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img
                src={Logo}
                className={classes.bsalogo}
                alt="boy_scouts_of_america_logo"
            />
            <div className={classes.spacer}></div>
        </div>
    );
}