import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

const useStyles = makeStyles({
    bsah4: {
        fontFamily: "Marcellus",
        color: '#003f87'
    },
    subheader: {
        fontFamily: "Marcellus",
        color: '#CE1126'
    },
    downloadnow: {
        padding: "10px",
        backgroundColor: "#fff7f0"
    },
    downloadnowlist: {
        marginTop: "0px",
        listStyleType: "none"
    },
    downloadnowitem: {
        marginLeft: "-20px",
        listStyleType: "none"
    },
    downloadsection: {
        padding: "10px",
        marginTop: "10px",
        backgroundColor: "#fff7f0"
    },
    icons: {
        marginBottom: "-5px",
        marginRight: "10px"
    }
});

export default function Footer(props) {
    const classes = useStyles();

    const { customEntries } = props;

    return (
        <Paper elevation={2} className={classes.downloadsection}>
            <div>
                <div>
                    <Typography
                        variant="body1"
                        className={classes.subheader}
                    >
                        Download Now:
                    </Typography>
                </div>
                <div>
                    <ul className={classes.downloadnowlist}>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/2020_ITOLS_Specific_Registration.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                2020 ITOLS
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/2020_Leave_No_Trace_Trainer_Course.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                LNT Trainer Course
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/calendar_CTD_2020.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                2020 District Calendar
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/2019%20CT%20Merit%20Badge%20Counselors.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                2019 Merit Badge Counselors
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/calendar_CTD_2019.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                2019 District Calendar
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/524-406A.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                BSA Application (English)
                            </Link>
                        </li>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                href="downloads/pdf/524-423.pdf">
                                <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                                BSA Application (Spanish)
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Typography
                        variant="body1"
                        className={classes.subheader}
                    >
                        Register for an Event Now:
                        </Typography>
                </div>
                <div>
                    <ul className={classes.downloadnowlist}>
                        <li className={classes.downloadnowitem}>
                            <Link
                                variant="body2"
                                target="_blank"
                                rel="noopener"
                                href="https://www.tentaroo.com/ecc/">
                                <OpenInNewSharpIcon fontSize="small" className={classes.icons} />
                                Register for an event online
                            </Link>
                        </li>
                    </ul>
                </div>
                {(typeof customEntries === 'undefined') ? null : customEntries.map(entry => (
                    <div>
                        <div>
                            <Typography
                                variant="body1"
                                className={classes.subheader}
                            >
                                {entry.sectionTitle}
                            </Typography>
                        </div>
                        <div>
                            <ul className={classes.downloadnowlist}>
                                {entry.items.map(item => (
                                    <li className={classes.downloadnowitem}>
                                        <Link
                                            variant="body2"
                                            target="_blank"
                                            rel="noopener"
                                            href={item.link}>
                                            {(item.iconType === "OpenInNewSharpIcon") ? <OpenInNewSharpIcon fontSize="small" className={classes.icons} /> : null}
                                            {(item.iconType === "PictureAsPdfIcon") ? <PictureAsPdfIcon fontSize="small" className={classes.icons} /> : null}
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Paper>
    );
}