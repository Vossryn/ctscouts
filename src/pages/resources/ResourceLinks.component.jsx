import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined';


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
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.scouting.org/"
                        title="Boy Scouts of America"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Boy Scouts of America
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://councilspd.scouting.org/sitecore/content/council426.aspx"
                        title="East Carolina Council"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        East Carolina Council
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.oa-bsa.org/"
                        title="Order of the Arrow National Site"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Order of the Arrow National Site
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.campbonner.org/"
                        title="Camp Boddie Scout Reservation"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Camp Boddie Scout Reservation
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.pamlicoseabase.org/"
                        title="Pamlico Sea Base"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Pamlico Sea Base
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.boyscouttrail.com/"
                        title="Boy Scout Trail"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Boy Scout Trail
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://www.eccbsa.org/Newsletter"
                        title="Tarheel Scouter"
                    >
                        <OpenInNewSharpIcon fontSize="small" className={classes.icons}/>
                        Tarheel Scouter
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        target="_blank"
                        rel="noopener"
                        href="http://scout-wire.org/"
                        title="Scout Wire"
                    >
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
                        href="downloads/pdf/2020_ITOLS_Specific_Registration.pdf"
                        title="2020 ITOLS"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2020 ITOLS
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/2020_Leave_No_Trace_Trainer_Course.pdf"
                        title="LNT Trainer Course"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        LNT Trainer Course
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/calendar_CTD_2020.pdf"
                        title="2020 District Calendar"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2020 District Calendar
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/2019%20CT%20Merit%20Badge%20Counselors.pdf"
                        title="2019 Merit Badge Counselors"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2019 Merit Badge Counselors
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/calendar_CTD_2019.pdf"
                        title="2019 District Calendar"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        2019 District Calendar
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/524-406A.pdf"
                        title="BSA Application (English)"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        BSA Application (English)
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/524-423.pdf"
                        title="BSA Application (Spanish)"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        BSA Application (Spanish)
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/ECC_Camping_Acknowledgement_form.pdf"
                        title="Camping Acknowledgement Form"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        Camping Acknowledgement Form
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/ECC_Stmt_Resuming_activities_8-6-2020.pdf"
                        title="Stmt Resuming Activities 8-6-2020"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        Stmt Resuming Activities 8-6-2020
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/ECC_Unit_Activity_Rental_Form-COVID_19_B.pdf"
                        title="Unit Activity Rental Form-COVID 19"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        Unit Activity Rental Form-COVID 19
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="downloads/pdf/CT Meritbadge Counselors.pdf"
                        title="CT Meritbadge Counselors"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfIcon fontSize="small" className={classes.icons} />
                        CT Meritbadge Counselors
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="https://filestore.scouting.org/filestore/pdf/512-927_fillable.pdf"
                        title="Eagle Scout Project Workbook"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfOutlinedIcon fontSize="small" className={classes.icons} />
                        Eagle Scout Project Workbook
                    </Link>
                </li>
                <li className={classes.resourceitem}>
                    <Link
                        variant="body2"
                        href="https://filestore.scouting.org/filestore/pdf/512-927_fillable.pdf"
                        title="Eagle Scout Application"
                        target="_blank"
                        rel="noopener"
                    >
                        <PictureAsPdfOutlinedIcon fontSize="small" className={classes.icons} />
                        Eagle Scout Application
                    </Link>
                </li>
            </ul>
        </Paper>
    )
}
