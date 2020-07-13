import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Skeleton from '@material-ui/lab/Skeleton';

import Datagrid from './datagrid.component';

import './styles.grid.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    bsah4: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    subheader: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    },
    hrmargin: {
        marginTop: "0px"
    }
}));

const cubScoutData = [
    { number: '61', master: 'Drew Guthrie', phone: '252-342-4979', meetingPlace: 'Newport Scout Hut, Newport', meetingDay: 'Last Monday', meetingTime: '6:30 pm', commissioner: 'Joey Boone' },
    { number: '130', master: 'Ed Suggs', phone: '919-608-0973', meetingPlace: 'First United Methodist Church, Morehead City', meetingDay: 'Last Monday', meetingTime: '6:30 pm', commissioner: 'Darryl James' },
    { number: '252', master: 'Steve Weeks', phone: '252-725-2503', meetingPlace: 'Davis Scout Hut,Davis (ALP-295)', meetingDay: 'call', meetingTime: 'call', commissioner: 'Rod Kirkland' },
    { number: '446', master: 'Jay Gossert', phone: '919-455-1041', meetingPlace: 'Cape Carteret Presbyterian Church, Cape Carteret', meetingDay: 'call', meetingTime: 'call', commissioner: 'Tony Smith' },
    { number: '472', master: 'Jay Hamilton', phone: '', meetingPlace: 'Latter-Day Saints Church, Morehead City', meetingDay: '4th Wednesday', meetingTime: '6:30 pm', commissioner: 'Brian Snow' },
    { number: '551', master: 'Monica Kruse', phone: '252-447-8344', meetingPlace: 'Annunciation Catholic Church, Havelock', meetingDay: '4th Friday', meetingTime: '6:00 pm', commissioner: 'Hank Dierker' }
];

const boyScoutData = [
    { number: '61', master: 'Dave McCubbin', phone: '252-269-4512', meetingPlace: 'Newport Scout Hut, Newport', meetingDay: 'Tuesday', meetingTime: '6:30 pm', commissioner: 'Joey Boone' },
    { number: '130', master: 'Patrick Faulkner', phone: '252-725-0787', meetingPlace: 'First United Methodist Church, Morehead City', meetingDay: 'Monday', meetingTime: '7:00 pm', commissioner: 'Darryl James' },
    { number: '252', master: 'Paul Murphy', phone: '252-729-9131', meetingPlace: 'Davis Scout Hut, Davis (ALP-295)', meetingDay: 'Monday', meetingTime: '7:30 pm', commissioner: 'Rod Kirkland' },
    { number: '272', master: 'Dale McFarland', phone: '252-249-3353', meetingPlace: 'Trinity Presbyterian Church, Havelock', meetingDay: 'Monday', meetingTime: '7:00 pm', commissioner: 'Hank Dierker' },
    { number: '446', master: 'Stan Kegley', phone: '252-814-5531', meetingPlace: 'Cape Carteret Presbyterian Church, Cape Carteret', meetingDay: 'Monday', meetingTime: '7:00 pm', commissioner: 'Tony Smith' },
    { number: '728', master: 'Jon Petry', phone: '252-764-2225', meetingPlace: 'Bethlehem United Methodist Church (Bogue)', meetingDay: 'Monday', meetingTime: '7:00 pm', commissioner: 'Brian Alexander' },
    { number: '472', master: 'Brooks Pace', phone: '252-342-1500', meetingPlace: 'Latter-Day Saints Church, Morehead City', meetingDay: 'Wednesday', meetingTime: '7:00 pm', commissioner: 'Brian Snow' },
    { number: '7730', master: 'Jennifer Boiding & Pat Curley', phone: '910-340-3383', meetingPlace: 'Camp Albemarle', meetingDay: '1st & 3rd Wednesday', meetingTime: '6:00 pm', commissioner: 'Not Assigned' }
];

const seaScoutData = [
    { number: '61', master: 'Pat Curley', phone: '910-340-3383', meetingPlace: 'Camp Albemarle', meetingDay: '1st & 3rd Wednesday', meetingTime: '6:00 PM', commissioner: 'Unassigned' }
];

export default function FindaunitPage() {
    const classes = useStyles();

    return (
        <div className="grid-findaunit-container">
            <div className="grid-findaunit-header-image">
                <Skeleton variant="rect" height={250}></Skeleton>
            </div>
            <div className="grid-join-today">
                <Typography variant="h4" className={classes.bsah4}>
                    Join Scouting Today!
                    </Typography>
                <hr className={classes.hrmargin} />
                <Typography
                    variant="body1"
                    className={classes.subheader}
                >
                    Here's how:
                    </Typography>
                <ul>
                    <li>
                        <Typography>
                            You may contact a Cub Scout Pack or Boy Scout Troop directly using the information provided here.
                            </Typography>
                    </li>
                    <li>
                        <Typography>
                            Use&nbsp;
                                    <Link 
                                        href="https://beascout.scouting.org/"
                                        target="_blank"
                                        rel="noopener"
                                        title="BSA's website"
                                    >
                                        BSA's website
                                    </Link>
                                    &nbsp;to guide you through the process.
                            </Typography>
                    </li>
                </ul>
            </div>
            <div className="data-grid-1">
                <Datagrid type="cub" tableHeader="Cub Scout Pack Info" rows={cubScoutData} />
            </div>
            <div className="data-grid-2">
                <Datagrid type="boy" tableHeader="Boy Scouts Troop Info" rows={boyScoutData} />
            </div>
            <div className="data-grid-3">
                <Datagrid type="sea" tableHeader="Sea Scout Info" rows={seaScoutData} />
            </div>
        </div>
    )
}