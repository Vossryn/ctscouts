import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

import Skeleton from '@material-ui/lab/Skeleton';

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
    },
    downloadnow: {
        padding: "10px",
        backgroundColor: "#fff7f0"
    },
    downloadnowlist: {
        marginTop: "0px",
        listStyleType: "none"
    },
    downloadnowitem: {
        marginLeft: "-20px",
        listStyleType: "none"
    },
    downloadsection: {
        padding: "10px",
        marginTop: "10px",
        backgroundColor: "#fff7f0"
    },
    icons: {
        marginBottom: "-5px",
        marginRight: "10px"
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg" component={Paper}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Skeleton variant="rect" height={250}></Skeleton>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h4" className={classes.bsah4}>
                                Welcome to Croatan Trails!
                            </Typography>
                            <hr className={classes.hrmargin} />
                            <Typography variant="h6">
                                Located along the Crystal Coast in eastern North Carolina, the Croatan Trails (CT) District is one of nine making up the East Carolina Council, and serves Carteret and east Craven Counties, and is home to Coree Chapter of the Order of the Arrow.
                            </Typography>
                            <Link
                                variant="body2"
                                href={'http://visitor.constantcontact.com/manage/optin/ea?v=001K_4EBhhTrxTn9sfJiqjEP7SfWG_iYNyw1GljlONRt6qyOCAVm2L-vKZYxmuEoVQFs2gnUOQSAOUX3E7nKY7ozg%3D%3D'}>
                                Add me to CT District's e-mail list
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={3}>
                                <Container className={classes.downloadnow}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <Typography
                                                variant="body1"
                                                className={classes.subheader}
                                            >
                                                Download Now:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ul className={classes.downloadnowlist}>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/2020_ITOLS_Specific_Registration.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        2020 ITOLS
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/2020_Leave_No_Trace_Trainer_Course.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        LNT Trainer Course
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/calendar_CTD_2020.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        2020 District Calendar
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/2019%20CT%20Merit%20Badge%20Counselors.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        2019 Merit Badge Counselors
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/calendar_CTD_2019.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        2019 District Calendar
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/524-406A.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        BSA Application (English)
                                                    </Link>
                                                </li>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="downloads/pdf/524-423.pdf">
                                                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                                        BSA Application (Spanish)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography
                                                variant="body1"
                                                className={classes.subheader}
                                            >
                                                Register for an Event Now:
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ul className={classes.downloadnowlist}>
                                                <li className={classes.downloadnowitem}>
                                                    <Link 
                                                        variant="body2" 
                                                        href="https://www.tentaroo.com/ecc/">
                                                        <OpenInNewSharpIcon fontSize="small" className={classes.icons} />
                                                        Register for an event online
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Paper>
                                <Skeleton variant="rect" height={150}></Skeleton>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h4" className={classes.bsah4}>
                                Cub Scouts
                            </Typography>
                            <hr className={classes.hrmargin} />
                            <Typography variant="body1">
                                Cub Scouting is a year-round program whose mission is to develop character and ethical decision-making skills for youth in kindergarten through fifth grades (5 to 10 years old).
                            </Typography>
                            <Link
                                variant="body2"
                                href={'https://beascout.scouting.org'}
                            >
                                Sign up today!
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h4" className={classes.bsah4}>
                                Boy Scouts
                            </Typography>
                            <hr className={classes.hrmargin} />
                            <Typography variant="body1">
                                Boy Scouting, is a year-round program for youth 11–17 designed to build character, citizenship, and personal fitness through a vigorous outdoor program and peer group leadership with the counsel of an adult Scoutmaster.
                            </Typography>
                            <Link
                                variant="body2"
                                href={'https://beascout.scouting.org'}
                            >
                                Sign up today!
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
                                <Skeleton variant="rect" height={150}></Skeleton>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Paper>
                                <Skeleton variant="rect" height={150}></Skeleton>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h4" className={classes.bsah4}>
                                Adult Leaders
                            </Typography>
                            <hr className={classes.hrmargin} />
                            <Typography variant="body1">
                                Behind every trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean and reverent Scout is a long line of committed volunteers who share those same traits. Volunteering has always been the very bedrock of the Scouting program. Watching kids grow is one thing — leading them through the process is a whole new experience all together.
                            </Typography>
                            <Link
                                variant="body2"
                                href={'https://beascout.scouting.org/Volunteer.aspx'}
                            >
                                Become a Leader!
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}