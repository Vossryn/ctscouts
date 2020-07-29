import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../assets/images/boy_scouts_of_america_logo.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: "75px"
    },
    logoContainer: {
        display: "inline-block",
        height: "100%"
    },  
    bsalogo: {
        height: "100%",
        marginTop: "4px"
    },
    spacer: {
        display: "inline-block",
        width: "2px",
        height: "70px",
        backgroundColor: "#003f87",
        marginRight: "5px"
    },
    districtClassContainer: {
        display: "inline-block",
        verticalAlign: "top",
        paddingTop: "10px"
    },
    districtClass: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    }
});

export default function MainMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div id="logo-container" className={classes.logoContainer}>
                <img
                    src={Logo}
                    className={classes.bsalogo}
                    alt="boy_scouts_of_america_logo"
                />
            </div>
            <div className={classes.spacer}></div>
            <div className={classes.districtClassContainer}>
                <Typography variant="h5" className={classes.districtClass}>
                    Croatan Trails District&#44;
                </Typography>
                <Typography variant="h5" className={classes.districtClass}>
                    East Carolina Council
                </Typography>
            </div>
        </div>
    );
}