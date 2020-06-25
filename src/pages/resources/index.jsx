import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px",
        paddingBottom: "20px"
    }
}));

export default function ResourcesPage() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" component={Paper}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Skeleton variant="rect" height={250}></Skeleton>
                </Grid>
            </Grid>
        </Container>
    )
}