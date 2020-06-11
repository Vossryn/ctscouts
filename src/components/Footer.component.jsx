import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '40px',
        backgroundColor: '#003f87',
        color: "#ffffff"
    }
});

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Grid container>
                &nbsp;
            </Grid>
        </footer>
    );
}