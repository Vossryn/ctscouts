import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const useStyles = makeStyles(theme => ({
    root: {
        padding: "10px",
        backgroundColor: "#fff7f0"
    },
    bsah4: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    subheader: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    },
    subheaderblue: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    hrmargin: {
        marginTop: "0px"
    },
    resourcelist: {
        marginTop: "0px",
        listStyleType: "none"
    },
    resourceitem: {
        marginLeft: "-20px",
        listStyleType: "none"
    },
    icons: {
        marginBottom: "-5px",
        marginRight: "10px"
    }
}));

export default function CampingPage(props) {
    const classes = useStyles();

    return (
        <Paper {...props} className={[props.className, classes.root].join(" ")}>
            <Typography variant="h6" className={classes.bsah4}>
                Resource Links
            </Typography>
            <ul className={classes.resourcelist}>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Boy Scouts of America
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        East Carolina Council
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Order of the Arrow National Site
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Camp Boddie Scout Reservation
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Pamlico Sea Base
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Boy Scout Trail
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Tarheel Scouter
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link>
                    <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Scout Wire
                    </Link>
                </li>
            </ul>
            <br />
            <Typography variant="h6" className={classes.bsah4}>
                Downloads
            </Typography>
            <ul className={classes.resourcelist}>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/2020_ITOLS_Specific_Registration.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2020 ITOLS
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/2020_Leave_No_Trace_Trainer_Course.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        LNT Trainer Course
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/calendar_CTD_2020.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2020 District Calendar
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/2019%20CT%20Merit%20Badge%20Counselors.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2019 Merit Badge Counselors
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/calendar_CTD_2019.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2019 District Calendar
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/524-406A.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        BSA Application (English)
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/524-423.pdf">
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        BSA Application (Spanish)
                    </Link>
                </li>
            </ul>
        </Paper>
    )
}
