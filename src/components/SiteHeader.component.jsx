import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../assets/images/boy_scouts_of_america_logo.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    bsalogo: {
        height: "75px",
        marginTop: "4px",
        float: "left"
    },
    spacer: {
        width: "2px",
        height: "60px",
        backgroundColor: "#003f87",
        marginTop: "10px",
        marginRight: "5px",
        float: "left"
    },
    districtClassContainer: {
        marginTop: "10px",
        float: "left"
    },
    districtClass: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    }
});

export default function MainMenu() {
    const classes = useStyles();

    return (
        <div>
            <img
                src={Logo}
                className={classes.bsalogo}
                alt="boy_scouts_of_america_logo"
            />
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