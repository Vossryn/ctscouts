import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

import Skeleton from '@material-ui/lab/Skeleton';

import './styles.grid.scss';

const useStyles = makeStyles(theme => ({
    bsah4: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    subheader: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    },
    subheaderSmall: {
        fontFamily: "Marcellus",
        fontSize: "21px",
        color: '#CE1126'
    },
    hrmargin: {
        marginTop: "0px"
    },
    reservations: {
        padding: "10px",
        backgroundColor: "#fff7f0"
    },
    icons: {
        marginBottom: "-2px"
    }
}));

export default function CampingPage() {
    const classes = useStyles();

    return (
        <div className="grid-camping-container">
            <div className="grid-camping-header-image">
                <Skeleton variant="rect" height={250}></Skeleton>
            </div>
            <div className="grid-camping-about">
                <Typography variant="h4" className={classes.bsah4}>
                    Camp Sam Hatcher
                </Typography>
                <hr className={classes.hrmargin}></hr>
                <Typography variant="body1">
                    <Link
                        variant="body2"
                        href="https://www.google.com/maps/dir//34.7425667,-76.9125404/@34.7388732,-76.9151134,3017m/data=!3m1!1e3?hl=en">
                        <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                        Located in Newport, North Carolina
                    </Link>,
                    Camp Sam Hatcher offers great and affordable
                    campsites for units looking to visit the Crystal Coast. Sitting on 35 acres,
                    Camp Sam Hatcher is used for weekend outings by Cub Scout Packs, Boy Scout Troops,
                    Venturing Crews, and other non-Scouting groups. It also hosts an annual
                    Croatan Trails Cub Scout Day Camp in addition to a variety of District events.
                    Although most campsites do have potable water, they are still considered primative.
                    A small restroom and cold shower facility, large program pavilion, and lodge are available upon request.
                </Typography>
            </div>
            <Paper elevation={1} className={[classes.reservations, "grid-camping-reservations"].join(' ')}>
                <Typography variant="h5" className={classes.subheader}>
                    Make Reservations:
                </Typography>
                <Typography variant="body1">
                    Packs and Troops don't have to wait for District planned events to use Camp Sam Hatcher,
                    or other Council properties. You just need to submit a Properties Use Permit to East Carolina Council.
                </Typography>
            </Paper>
            <div className="grid-camping-ammenities">
                <Typography variant="h4" className={classes.bsah4}>
                    Ammenities
                </Typography>
                <hr className={classes.hrmargin}></hr>
                <Typography variant="body1">
                    Perhaps the best ammenity is the opportunity to listen to the wind 
                    blowing through the longleaf pines, but if you need more than that 
                    here's what you'll find:
                    <ul>
                        <li>
                            <Typography variant="body1">
                                A New Pirate Ship! It took a Big Rock Sports and East 
                                Carolina Council partnership to get her built, but she's 
                                now available to those who may not want to be on the water, 
                                but really like pretending to be a pirate!
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Potable water near most campsites.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                A small restroom and shower facility (upon request).
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Howard Lodge.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Large pavilion.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Fire-rings at campsites.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Activity Field.
                            </Typography>
                        </li>
                    </ul>
                </Typography>
            </div>
            <div>
                
            </div>
        </div>
    )
}