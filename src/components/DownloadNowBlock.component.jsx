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

    const downloads = [
        {
            text: "2020 ITOLS",
            link: "downloads/pdf/2020_ITOLS_Specific_Registration.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "LNT Trainer Course",
            link: "downloads/pdf/2020_Leave_No_Trace_Trainer_Course.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "2020 District Calendar",
            link: "downloads/pdf/calendar_CTD_2020.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "2019 Merit Badge Counselors",
            link: "downloads/pdf/2019%20CT%20Merit%20Badge%20Counselors.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "2019 District Calendar",
            link: "downloads/pdf/calendar_CTD_2019.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "BSA Application (English)",
            link: "downloads/pdf/524-406A.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "BSA Application (Spanish)",
            link: "downloads/pdf/524-423.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "Camping Acknowledgement Form",
            link: "downloads/pdf/ECC_Camping_Acknowledgement_form.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "Stmt Resuming Activities 8-6-2020",
            link: "downloads/pdf/ECC_Stmt_Resuming_activities_8-6-2020.pdf",
            iconType: "PictureAsPdfIcon"
        },
        {
            text: "Unit Activity Rental Form-COVID 19",
            link: "downloads/pdf/ECC_Unit_Activity_Rental_Form-COVID_19_B.pdf",
            iconType: "PictureAsPdfIcon"
        }
    ]

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
                        {downloads.map((item, index) => (
                            <li className={classes.downloadnowitem} key={index}>
                                <Link
                                    variant="body2"
                                    target="_blank"
                                    rel="noopener"
                                    href={item.link}
                                    title={item.text}
                                >
                                    {(item.iconType === "OpenInNewSharpIcon") ? <OpenInNewSharpIcon fontSize="small" className={classes.icons} /> : null}
                                    {(item.iconType === "PictureAsPdfIcon") ? <PictureAsPdfIcon fontSize="small" className={classes.icons} /> : null}
                                    {item.text}
                                </Link>
                            </li>
                        ))}
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
                                href="https://www.tentaroo.com/ecc/"
                                title="Register for an event online"
                            >
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
                                {entry.items.map((item, index) => (
                                    <li className={classes.downloadnowitem} key={index}>
                                        <Link
                                            variant="body2"
                                            target="_blank"
                                            rel="noopener"
                                            href={item.link}
                                            title={item.text}
                                        >
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