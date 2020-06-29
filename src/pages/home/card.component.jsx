import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    contentheader: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    img: {

    },
    content: {
        height: "300px"
    }
}));

export default function CampingPage(props) {
    const classes = useStyles();
    const { title, img, content, link, linkText } = props;

    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia>
                {img}
                <Skeleton variant="rect" height={150}/>
            </CardMedia>
            <CardContent className={classes.content}>
                <Typography 
                    className={classes.contentheader}
                    variant="h4"
                >
                    {title}
                </Typography>
                <hr></hr>
                <Typography
                    variant="body1"
                >
                    {content}
                </Typography>
                <Link
                    variant="body2"
                    href={link}
                >
                    {linkText}  <OpenInNewSharpIcon fontSize="inherit" />
                </Link>
            </CardContent>
        </Card>
    )
}