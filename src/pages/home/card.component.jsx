import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

export default function CampingPage() {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader>

            </CardHeader>
            <CardMedia>

            </CardMedia>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}