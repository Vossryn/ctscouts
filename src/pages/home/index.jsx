import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    bash4: {
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
        marginTop: "0px"
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" component={Paper}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Skeleton variant="rect" height={250}></Skeleton>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h4" className={classes.bash4}>
                                Welcome to Croatan Trails!
                            </Typography>
                            <hr className={classes.hrmargin}/>
                            <Typography variant="body1">
                                Located along the Crystal Coast in eastern North Carolina, the Croatan Trails (CT) District is one of nine making up the East Carolina Council, and serves Carteret and east Craven Counties, and is home to Coree Chapter of the Order of the Arrow.
                            </Typography>
                            <Link 
                                variant="body2"
                                hreg={'http://visitor.constantcontact.com/manage/optin/ea?v=001K_4EBhhTrxTn9sfJiqjEP7SfWG_iYNyw1GljlONRt6qyOCAVm2L-vKZYxmuEoVQFs2gnUOQSAOUX3E7nKY7ozg%3D%3D'}>
                                Add me to CT District's e-mail list
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper>
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
                                                <li>
                                                    <Typography variant="body2">
                                                        2020 ITOLS
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2">
                                                        LNT Trainer Course
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2">
                                                        2020 District Calendar
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2">
                                                        2019 Merit Badge Counselors
                                                    </Typography>
                                                </li>
                                                <li>
                                                    <Typography variant="body2">
                                                        2019 District Calendar
                                                    </Typography>
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
                            <Typography variant="h4">
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
                            <Typography variant="body1">
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h4">
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
                            <Typography variant="body1">
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
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
                            <Typography variant="h4">
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
                            <Typography variant="body1">
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                                <Skeleton variant="text"></Skeleton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}