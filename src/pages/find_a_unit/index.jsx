import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Datagrid from './datagrid.component';
import Contactinfo from './contactinfo.component';

import PageBanner from '../../assets/images/find_a_unit_banner.png';

import './styles.grid.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  bsah4: {
    fontFamily: "Marcellus",
    color: '#003f87'
  },
  subheader: {
    fontFamily: "Marcellus",
    color: '#CE1126'
  },
  hrmargin: {
    marginTop: "0px"
  },
  banner: {
    width: "100%"
  },
  gridScrolSpan: {
    color: "#a9a9a9"
  }
}));

export default function FindaunitPage() {
  const classes = useStyles();

  const [cubScoutData, setCubScoutData] = useState([]);
  const [ScoutData, setScoutData] = useState([]);
  const [seaScoutData, setSeaScoutData] = useState([]);
  const [ventureScoutData, setVentureScoutData] = useState([]);
  const [explorerPostsData, setExplorerPostsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [contactInfo, setContactInfo] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);

  const getData = async () => {
    Tabletop.init({
      key: '1Gl-7qiIt1KaJ5ePYmHrkdJt05pn-f0YNOs8mAZYe9uc',
      callback: googleData => {
        setCubScoutData(googleData["Cub Scouts"].elements);
        setScoutData(googleData["Scouts"].elements);
        setSeaScoutData(googleData["Sea Scouts"].elements);
        setVentureScoutData(googleData["Venture Crews"].elements);
        setExplorerPostsData(googleData["Explorer Posts"].elements);
      }
    })
    setDataLoaded(true);
  }

  useEffect(() => {
    if (!dataLoaded) {
      getData();
    }
  });

  return (
    <div className="grid-findaunit-container">
      <Contactinfo
        contactInfo={contactInfo}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
      <div className="grid-findaunit-header-image">
        <img className={classes.banner}
          src={PageBanner}
          alt="" />
      </div>
      <div className="grid-join-today">
        <Typography variant="h4" className={classes.bsah4}>
          Join Scouting Today!
        </Typography>
        <hr className={classes.hrmargin} />
        <Typography
          variant="body1"
          className={classes.subheader}
        >
          Here's how:
        </Typography>
        <ul>
          <li>
            <Typography>
              You may contact a Cub Scout Pack or Boy Scout Troop directly using the information provided here.
            </Typography>
          </li>
          <li>
            <Typography>
              Use&nbsp;
                                    <Link
                href="https://beascout.scouting.org/"
                target="_blank"
                rel="noopener"
                title="BSA's website"
              >
                BSA's website
                                    </Link>
                                    &nbsp;to guide you through the process.
            </Typography>
          </li>
        </ul>
      </div>
      <div className="data-grid-1">
        <Typography id="hideSpan" className={classes.gridScrolSpan} variant="caption">
          ** Scroll Grid left/right for more information
        </Typography>
        <Datagrid
          tableHeader="Cub Scout Pack Info"
          rows={cubScoutData}
          setContactInfo={setContactInfo}
          setOpenDialog={setOpenDialog}
        />
      </div>
      <div className="data-grid-2">
        <Typography id="hideSpan" className={classes.gridScrolSpan} variant="caption">
          ** Scroll Grid left/right for more information
        </Typography>
        <Datagrid
          tableHeader="Scouting Troop Info"
          rows={ScoutData}
          setContactInfo={setContactInfo}
          setOpenDialog={setOpenDialog}
        />
      </div>
      <div className="data-grid-3">
        <Typography id="hideSpan" className={classes.gridScrolSpan} variant="caption">
          ** Scroll Grid left/right for more information
        </Typography>
        <Datagrid
          tableHeader="Sea Scout Info"
          rows={seaScoutData}
          setContactInfo={setContactInfo}
          setOpenDialog={setOpenDialog}
        />
      </div>
      <div className="data-grid-4">
        <Typography id="hideSpan" className={classes.gridScrolSpan} variant="caption">
          ** Scroll Grid left/right for more information
        </Typography>
        <Datagrid
          tableHeader="Venture Crew Info"
          rows={ventureScoutData}
          setContactInfo={setContactInfo}
          setOpenDialog={setOpenDialog}
        />
      </div>
      <div className="data-grid-5">
        <Typography id="hideSpan" className={classes.gridScrolSpan} variant="caption">
          ** Scroll Grid left/right for more information
        </Typography>
        <Datagrid
          tableHeader="Explorer Posts Info"
          rows={explorerPostsData}
          setContactInfo={setContactInfo}
          setOpenDialog={setOpenDialog}
        />
      </div>
    </div>
  )
}