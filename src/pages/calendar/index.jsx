import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BigCalendar from './BigCalendar.component';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px",
        paddingBottom: "20px"
    },
    claendarContainer: {
        padding: "10px"
    }
}));

export default function CalendarPage() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg" component={Paper}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={1} className={classes.claendarContainer}>
                        <BigCalendar />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}