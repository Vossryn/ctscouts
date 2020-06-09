import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: "0 auto",
        width: "800px",
        height: "1000px"
    }
}));

export default function CampingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>
                Camping
            </Typography>
        </div>
    )
}