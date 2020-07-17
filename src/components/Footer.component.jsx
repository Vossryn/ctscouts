import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '40px',
        backgroundColor: '#003f87',
        color: "#ffffff"
    },
    container: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    copyright: {
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px"
    },
    webmaster: {
        position: "absolute",
        color: "#FFFFFF",
        top: "0",
        right: "0",
        padding: "10px"
    },
    ecclink: {
        color: "#FFFFFF"
    },  
    icons: {
        marginBottom: "-2px"
    }
});

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <div className={classes.container}>
                <Typography variant="caption" className={classes.copyright}>
                    &copy; 2020 Croatan Trails District | 
                    <Link
                        target="_blank"
                        rel="noopener"
                        href="http://www.eccbsa.org/"
                        title="East Carolina Council"
                        className={classes.ecclink}
                    >
                        &nbsp;East Carolina Council
                        <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                </Typography>
                <Link 
                    variant="caption"
                    href="mailto:vossryn+coratantrailswebmaster@gmail.com"
                    className={classes.webmaster}>
                    Webmaster: Britton Flynt
                </Link>
            </div>
        </footer>
    );
}