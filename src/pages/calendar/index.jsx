import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';

import BigCalendar from './BigCalendar.component';
import DownloadNowBlock from '../../components/DownloadNowBlock.component';

import PageBanner from '../../assets/images/calendar_banner.png';

import './styles.grid.scss';

const useStyles = makeStyles(theme => ({
  claendarContainer: {
    padding: "10px"
  },
  bsah4: {
    fontFamily: "Marcellus",
    color: '#003f87'
  },
  subheader: {
    fontFamily: "Marcellus",
    color: '#CE1126'
  },
  subheaderSmall: {
    fontFamily: "Marcellus",
    fontSize: "21px",
    color: '#CE1126'
  },
  hrmargin: {
    marginTop: "0px"
  },
  boldText: {
    fontWeight: "bold"
  },
  wordWrap: {
    overflowWrap: "break-word"
  },
  banner: {
    width: "100%"
  }
}));

const downloadNowCustomEntries = [
  {
    sectionTitle: "East Carolina Council Events:",
    items: [
      {
        text: "ECC Events",
        link: "http://www.eccbsa.org/Event%20Flyers",
        iconType: "OpenInNewSharpIcon"
      }
    ]
  }
]

export default function CalendarPage() {
  const classes = useStyles();

  return (
    <div className="grid-calendar-container">
      <div className="grid-calendar-header-image">
        <img className={classes.banner}
          src={PageBanner}
          alt="" />
      </div>
      <div className="grid-event-bar">
        <Typography variant="h4" className={classes.bsah4}>
          Monthly Events
        </Typography>
        <hr className={classes.hrmargin}></hr>
        <Typography variant="h5" className={classes.subheader}>
          District Eagle Boards:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>When: </span>
                            3rd Thursday each month
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Contact: </span>
                            Mr. Tracy Kruse
                            <br></br>
                            (252-732-4280)
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Must call 2 weeks in advance for an appointment
            </Typography>
          </li>
        </ul>
        <Typography variant="h5" className={classes.subheader}>
          Roundtable Meetings:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>When: </span>
                            3rd Thursday each month at 7pm
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Where: </span>
                            Zoom meeting
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Who: </span>
                            Leaders &amp; Parents
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Why: </span>
                            Learn more about being a Scout leader, and how to offer a better Scout program to your sons
            </Typography>
          </li>
        </ul>
        <Typography variant="h5" className={classes.subheaderSmall}>
          OA Coree Chapter Meetings:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>When: </span>
                            2nd Sunday each month at 3pm
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Where: </span>
                            Camp Sam Hatcher, Sam Hatcher Rd., Newport, NC
            </Typography>
            <Link
              variant="body2"
              target="_blank"
              rel="noopener"
              href={"https://www.google.com/maps/dir//34.7425667,-76.9125404/@34.7388732,-76.9151134,3017m/data=!3m1!1e3?hl=en"}
              title="Get Directions - Camp Sam Hatcher, Sam Hatcher Rd., Newport, NC"
            >
              Get Directions <OpenInNewSharpIcon fontSize="inherit" />
            </Link>
          </li>
        </ul>
        <Typography variant="h5" className={classes.subheaderSmall}>
          District Committee Meetings:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>When: </span>
                            2nd Thursday each month at 7pm
                        </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span className={classes.boldText}>Where: </span>
                            Zoom meetings
                        </Typography>
            {/* <Link 
                variant="body2"
                target="_blank"
                rel="noopener"
                href={"https://www.google.com/maps/place/167+Howard+Blvd,+Newport,+NC+28570/@34.786593,-76.862131,725m/data=!3m2!1e3!4b1!4m2!3m1!1s0x89a8eb0d136e5501:0xe28313b8cbb7a1cb!6m1!1e1?hl=en"}
                title="Get Directions - Scout Hut at 167 Howard Blvd, Newport, NC"
            >
                Get Directions <OpenInNewSharpIcon fontSize="inherit" />
            </Link> */}
          </li>
        </ul>
      </div>
      <div className="grid-calendar">
        <Paper elevation={2} className={classes.claendarContainer}>
          <BigCalendar />
        </Paper>
      </div>
      <div className="grid-add-calendar">
        <Typography variant="h4" className={classes.bsah4}>
          Add Our Calendar to Yours:
        </Typography>
        <hr className={classes.hrmargin}></hr>
        <Typography variant="h5" className={classes.subheader}>
          District Eagle Boards:
                </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              For Google Calendars, simply add "southerndistictecc@gmail.com"
            </Typography>
          </li>
          <li>
            <Typography variant="body2" className={classes.wordWrap}>
              If you need the ICAL, https://calendar.google.com/calendar/ical/southerndistrictecc%40gmail.com/public/basic.ics
            </Typography>
          </li>
        </ul>
      </div>
      <div className="grid-download-now">
        <DownloadNowBlock customEntries={downloadNowCustomEntries} />
      </div>
    </div>
  )
}