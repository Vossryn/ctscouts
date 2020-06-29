import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link as RouterLink } from 'react-router-dom';

import Logo from '../assets/images/boy_scouts_of_america_logo.png';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: "100%",
        height: "75px",
        textAlign: "center",
        backgroundColor: "white"
    },
    logocontainer: {
        width: "485px",
        margin: "0px auto"
    },
    bsalogo: {
        height: "75px",
        marginTop: "4px"
    },
    spacer: {
        width: "3px",
        height: "calc(100% - 20px)",
        backgroundColor: "#003f87",
        marginTop: "10px",
        marginRight: "5px"
    },
    districtClassContainer: {
        marginTop: "10px"
    },
    districtClass: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    }
});

export default function MainMenu() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            <div className={classes.logocontainer}>
                <div>
                    <img
                        src={Logo}
                        className={classes.bsalogo}
                        alt="boy_scouts_of_america_logo"
                    />
                </div>
                <div>
                    <div className={classes.spacer}></div>
                </div>
                <div className={classes.districtClassContainer}>
                    <Typography variant="h5" className={classes.districtClass}>
                        Croatan Trails District&#44;
                    </Typography>
                    <Typography variant="h5" className={classes.districtClass}>
                        East Carolina Council
                    </Typography>
                </div>
            </div>
        </Container>
    );
}