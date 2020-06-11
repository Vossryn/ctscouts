import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
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