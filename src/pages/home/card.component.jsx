import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

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
    },
    icons: {
        marginBottom: "-2px"
    },
    imageContainer: {
        textAlign: "center",
        paddingTop: "20px"
    },
    image: {
        height: "150px"
    }
}));

export default function CampingPage(props) {
    const classes = useStyles();
    const { title, img, content, link, linkText } = props;

    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia className={classes.imageContainer}>
                <img className={classes.image}
                 src={img}
                 alt="">
                </img>
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
                    target="_blank"
                    rel="noopener"
                    title={linkText}
                >
                    {linkText}  <OpenInNewSharpIcon fontSize="inherit" className={classes.icons}/>
                </Link>
            </CardContent>
        </Card>
    )
}