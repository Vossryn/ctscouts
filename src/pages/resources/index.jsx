import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import PageBanner from '../../assets/images/resources_banner.png';

import Resourcelinks from './ResourceLinks.component';

import './styles.grid.scss';

const useStyles = makeStyles(theme => ({
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
  fullWidth: {
    width: "100%"
  },
  icons: {
    marginBottom: "-2px"
  },
  boldSpan: {
    fontWeight: "bold"
  },
  downloads: {
    padding: "10px",
    backgroundColor: "#fff7f0"
  },
  banner: {
    width: "100%"
  }
}));

export default function CampingPage() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [districtCommitteeContacts, setDistrictCommitteeContacts] = useState([]);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubExpand = (panel) => (event, isExpanded) => {
    setSubExpanded(isExpanded ? panel : false);
  };

  const getData = async () => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEET_ID,
      callback: googleData => {
        setDistrictCommitteeContacts(googleData["District Committee Contacts"].elements);
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
    <div className="grid-resources-container">
      <div className="grid-resources-header-image">
        <img className={classes.banner}
          src={PageBanner}
          alt="" />
      </div>
      <div className="grid-resources-about">
        <Typography variant="h4" className={classes.bsah4}>
          Southern District of ECC Scout Resources
                </Typography>
        <hr className={classes.hrmargin}></hr>
        <Typography variant="body1">
          If you're new to Scouting, your handbook should be your first stop when looking for information
          or visit our website to get information specific to our District.
                </Typography>
      </div>
      <Resourcelinks className="grid-resources-downloads" />
      <div className="grid-resources-expansion-panels-1">
        <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              When Can My Child Join Cub Scouts?
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Cub Scouting is a year-round program whose mission is to
                  develop character and ethical decision-making skills for
                  boys and girls in kindergarten through fifth grades
                  (5 to 10 years old).
                                </Typography>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/CubScouts.aspx"
                      title="Everything Cub Scouts need to know"
                    >
                      Everything Cub Scouts need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/Parents.aspx"
                      title="Everything parents need to know"
                    >
                      Everything parents need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/Leaders/DenLeaderResources.aspx"
                      title="Everything Den Leaders need to know"
                    >
                      Everything Den Leaders need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/Leaders/CubmasterResources.aspx"
                      title="Everything Cubmasters need to know"
                    >
                      Everything Cubmasters need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/Leaders/PackCommitteeResources.aspx"
                      title="What is a Pack Committee?"
                    >
                      What is a Pack Committee?
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/FAQS.aspx"
                      title="Frequently Asked Questions"
                    >
                      Frequently Asked Questions
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/HealthandSafety/Guidelines_Policies.aspx"
                      title="Guidelines &amp; Policies"
                    >
                      Guidelines &amp; Policies
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/CubScouts/Leaders.aspx"
                      title="and more. . ."
                    >
                      and more. . .
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Typography variant="body1">
                  One of the best ways to learn more is to attend monthly leader/parent Roundtable meetings.
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  <span className={classes.boldSpan}>When:</span> 3rd Thursday each month at 7pm
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  <span className={classes.boldSpan}>Where:</span> Zoom meeting
                                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              When Can My Child Join Boy Scouts?
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Boy Scouting, one of the traditional membership divisions of the BSA,
                  is available to boys who have earned the Arrow of Light rank and are at
                  least 10 years old or have completed the fifth grade and are at least 10,
                  or who are 11, but not yet 18 years old. The program achieves the BSA's
                  objectives of developing character, citizenship, and personal fitness.
                                </Typography>
              </div>
              <div>
                <ul>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/scoutsource/BoyScouts.aspx"
                      title="Everything Boy Scouts need to know"
                    >
                      Everything Boy Scouts need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/scoutsource/BoyScouts/Adults.aspx"
                      title="Everything Adult Leaders &amp; Parents need to know"
                    >
                      Everything Adult Leaders &amp; Parents need to know
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/scoutsource/BoyScouts/AdvancementandAwards.aspx"
                      title="Advancement and Awards"
                    >
                      Advancement and Awards
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/scoutsource/BoyScouts/GuideforMeritBadgeCounselors.aspx"
                      title="Merit Badge Counselors"
                    >
                      Merit Badge Counselors
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      variant="body2"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/Home/HealthandSafety/Guidelines_Policies.aspx"
                      title="Guidelines &amp; Policies"
                    >
                      Guidelines &amp; Policies
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Typography variant="body1">
                  One of the best ways to learn more is to attend monthly leader/parent Roundtable meetings.
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  <span className={classes.boldSpan}>When:</span> 1st Thursday each month at 7pm
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  <span className={classes.boldSpan}>Where:</span> The Church of Jesus Christ of
                                    Latter-day Saints, 3606 Country Club Rd, Morehead City, NC (
                                        <Link
                    variant="body2"
                    target="_blank"
                    rel="noopener"
                    href="https://www.google.com/maps/place/The+Church+of+Jesus+Christ+of+Latter-day+Saints/@34.738165,-76.762269,725m/data=!3m2!1e3!4b1!4m7!1m4!3m3!1s0x89a89393d9fc9773:0xeebbae3a32f1bf76!2s3606+Country+Club+Rd,+Morehead+City,+NC+28557!3b1!3m1!1s0x89a89393b26e3ddf:0x103aa4bd891320f2!6m1!1e1?hl=en"
                    title="get directions"
                  >
                    get directions
                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                  </Link>
                                    )
                                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleExpand('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              How do I become a Scout Leader?
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Behind every Scout is a long line of committed volunteers (parents) who share
                  those same traits. Volunteering has always been the very bedrock of the Scouting
                  program. Ask any of our volunteers and they’ll tell you, volunteering with Scouting
                  is as rewarding to them as it is meaningful to the kids. Watching kids grow
                  is one thing — leading them through the process is a whole new experience all together.

                  First say, "Yes," and then you'll discover there are plenty leaders
                  within your son's Pack or Troop, CT District, or East Carolina Council
                  who are willing to help and guide you through the process.
                  Here are the first steps:
                                </Typography>
                <ul>
                  <li>
                    Take Youth Protection (Required): This is an online course offered
                    at MyScouting.org and takes approximately 15 minutes to complete.
                    Even if you're not planning to be a uniformed Scout leader, this is
                    good training for all parents. First time on MyScouting.org you will
                    be asked to create a login in order to access the various training
                    modules. User TIP: remember your login credentials, because each
                    account is treated as a separate individual, and when it comes
                    time to re-take the training, the system will not be able to
                    cross-reference you if you have multiple accounts.
                                    </li>
                  <li>
                    Get Registered (Required): All adult leaders are required to fill out a
                    BSA Application, which is approved by your son's Scout Unit Chartered
                    Organization, then submitted to East Carolina Council at which time a
                    background-check will be completed.
                                    </li>
                  <li>
                    Committee Chair, Cubmaster (and Assistants), Scoutmaster (and Assistants),
                    and Den Leaders are the primary positions within a Pack or Troop that do
                    require additional training. Just like Youth Protection, most are offered
                    online; however, some require instructor led and hands-on training.
                                    </li>
                </ul>
              </div>
              <div>
                <Accordion expanded={subExpanded === 'sub-panel1'} onChange={handleSubExpand('sub-panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.subheaderblue} variant="h6">
                      Cub Scout Leader Training
                                        </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <div>
                        <Typography variant="body1">
                          Note: (r) required,
                                                    &nbsp;<Link
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            href="https://my.scouting.org/"
                            title="(e) e-Course/Online"
                          >
                            (e) e-Course/Online
                                                        <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                          </Link>,&nbsp;
                                                    (i) classroom-practical training
                                                </Typography>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Youth Protection (r,e,i)
                                                    </li>
                          <li>
                            Den Leader Position Specific (r,e)
                                                    </li>
                          <li>
                            Cubmaster Position Specific (r,e)
                                                    </li>
                          <li>
                            Pack Committee Position Specific (r,e)
                                                    </li>
                          <li>
                            This is Scouting (e)
                                                    </li>
                          <li>
                            Safe Swim Defense (e)
                                                    </li>
                          <li>
                            Safety Afloat (e)
                                                    </li>
                          <li>
                            Hazardous Weather (e)
                                                    </li>
                          <li>
                            If you can hear the rumble of thunder, YOU ARE within striking distance of lightening! Take the course to find out more.
                                                    </li>
                          <li>
                            Basic Adult Leader Outdoor Orientation (BALOO) (i)
                                                    </li>
                          <li>
                            required if you plan to take your Pack or Webelos Den camping
                                                    </li>
                          <li>
                            <Link
                              variant="body2"
                              target="_blank"
                              rel="noopener"
                              href="http://www.scouting.org/Training/Adult.aspx"
                              title="Find out more about adult training"
                            >
                              Find out more about adult training
                                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={subExpanded === 'sub-panel2'} onChange={handleSubExpand('sub-panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.subheaderblue} variant="h6">
                      Boy Scout Leader Training
                                        </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <div>
                        <Typography variant="body1">
                          Note: (r) required, &nbsp;
                                                    <Link
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            href="https://my.scouting.org/"
                            title="(e) e-Course/Online"
                          >
                            (e) e-Course/Online
                                                        <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                          </Link>,&nbsp;
                                                    (i) classroom-practical training
                                                </Typography>
                      </div>
                      <div>
                        <ul>
                          <li>
                            Youth Protection (r,e,i)
                                                    </li>
                          <li>
                            Scoutmaster Specific (r,e, i)
                                                    </li>
                          <li>
                            Intro to Outdoor Leadership Skills (ITOLS) (r,i)
                                                    </li>
                          <li>
                            Troop Committee (r,e)
                                                    </li>
                          <li>
                            Fast Start: Boy Scouting (e)
                                                    </li>
                          <li>
                            This is Scouting (e)
                                                    </li>
                          <li>
                            Safe Swim Defense (e)
                                                    </li>
                          <li>
                            Safety Afloat (e)
                                                    </li>
                          <li>
                            Weather Hazards (e)
                                                    </li>
                          <li>
                            If you can hear the rumble of thunder, YOU ARE within striking
                            distance of lightening! Take the course to find out more.
                                                    </li>
                          <li>
                            Climb on Safely (e)
                                                    </li>
                          <li>
                            Trek Safely (e)
                                                    </li>
                          <li>
                            <Link
                              variant="body2"
                              target="_blank"
                              rel="noopener"
                              href="http://www.scouting.org/Training/Adult.aspx"
                              title="Find out more about adult training"
                            >
                              Find out more about adult training
                                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={subExpanded === 'sub-panel3'} onChange={handleSubExpand('sub-panel3')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.subheaderblue} variant="h6">
                      Other Adult Training
                                        </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <div>
                        <Typography variant="body1">
                          Note: (r) required, &nbsp;
                                                    <Link
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            href="https://my.scouting.org/"
                            title="(e) e-Course/Online"
                          >
                            (e) e-Course/Online
                                                        <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                          </Link>,&nbsp;
                                                    (i) classroom-practical training
                                                </Typography>
                      </div>
                      <div>
                        <ul>
                          <li>
                            District Commissioner(r,e)
                                                    </li>
                          <li>
                            Charter Organization Representative (r,e)
                                                    </li>
                          <li>
                            Merit Badge Counselor(r,e)
                                                    </li>
                          <li>
                            Woodbadge(i)
                                                    </li>
                          <li>
                            The Trainers EDGE(i)
                                                    </li>
                          <li>
                            <Link
                              variant="body2"
                              target="_blank"
                              rel="noopener"
                              href="http://www.scouting.org/Training/Adult.aspx"
                              title="Find out more about adult training"
                            >
                              Find out more about adult training
                                                            <OpenInNewSharpIcon fontSize="inherit" className={classes.icons} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleExpand('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Where Can I Purchase a Scout Uniform?
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Before purchasing a uniform and handbook, it's a great idea
                  to visit your son's Scout Unit first, that way you can make a
                  list of things you'll need and avoid having to make multiple
                  trips to the Scout shop. Here are a few options:
                                </Typography>
              </div>
              <div>
                <ul>
                  <li>
                    ECC's Scout Shop in Kinston (
                                            <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="https://www.google.com/maps/place/Boy+Scouts+of+America/@35.285897,-77.584591,17z/data=!3m1!4b1!4m2!3m1!1s0x89aeb5478b984359:0x2a6dde660761eb06?hl=en"
                      title="get directions"
                    >
                      get directions
                                            </Link>
                                            )
                                        </li>
                  <li>
                    Scout Shop - Ace Hardware in Emerald Isle (
                                            <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="https://www.google.com/maps/place/300+Emerald+Plantation+Rd,+Emerald+Isle,+NC+28594/@34.6622747,-77.0486642,18z/data=!3m1!4b1!4m2!3m1!1s0x89a8fafb17051189:0x12d14e2a5ddb6cd?hl=en"
                      title="get directions"
                    >
                      get directions
                                            </Link>
                                        )
                                        </li>
                  <li>
                    <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="https://www.scoutshop.org/"
                      title="ScoutShop.org"
                    >
                      ScoutShop.org
                                        </Link>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleExpand('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Eagle Scout Information &amp; Board of Review
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Ready to start working on your rank of Eagle Scout? Once you've
                  earned your rank of Life, here are the steps you need to follow
                  (Don't start working on your Eagle Service Project until it's been
                  officially approved by beneficiary, Scoutmaster, Troop Committee
                  Chair, and Eagle Board of Review Coordinator):
                                </Typography>
              </div>
              <div>
                <ol>
                  <li>
                    <Typography>
                      Continue working on your rank requirements listed in your handbook.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Download Eagle Scout Service Project Workbook.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Download Eagle Scout Application.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Once you've downloaded the Service Project Workbook, take the time
                      to read the instructions as they will help guide you through the process.
                      Don't start working on your Eagle Service Project until it's been officially
                      approved by beneficiary, Scoutmaster, Troop Committee Chair, and Eagle Board
                      of Review Coordinator
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Meet with the point of contact (beneficiary) for your project and use the
                      Project Proposal &amp; and Plan sections of the workbook to guide your discussion
                      while planning the scope of your Eagle Service Project. Once you have your
                      Proposal completed and filled out, you and your beneficiary will sign off
                      on your Proposal.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Then meet with your Scoutmaster and Troop Committee Chair to review your
                      proposal and get their signatures.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      With your Proposal completly filled out, and once you've gotten all the
                      required signatures, your ready to schedule a time to discuss your project
                      proposal with the Eagle Board of Review Coordinator (see contact info below).
                      Although it's not required, it will help to start filling out your project
                      plan and have that with you when you meet with the BOR Coordinator.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      If you need to do a fundraiser in order to do your project, be sure you
                      fill out the Fundraising Form located in the Proposal section of the workbook.
                      This is required before you meet with the BOR Coordinator to get your
                      proposal approved.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Now you can begin work on your project.
                                        </Typography>
                  </li>
                  <li>
                    <Typography>
                      Start filling out your Eagle Application. Keep in mind that you'll need 5
                      references (6 if you're employeed) (see Requirement 2), and you'll need to
                      write a "statement of your ambitions" (see Certification by Applicant listed
                      after Requirement 6) le
                                        </Typography>
                  </li>
                </ol>
              </div>
              <div>
                <Typography variant="body1" className={classes.subheaderblue}>
                  Eagle Project Board of Review
                                </Typography>
                <ul>
                  <li>
                    <span className={classes.boldSpan}>Contact:</span>
                                        Mr. Tracy Kruse (phone: 252-732-4280)
                                    </li>
                  <li>
                    <span className={classes.boldSpan}>When:</span>
                                        3rd Thursday each month
                                    </li>
                  <li>
                    <span className={classes.boldSpan}>Where:</span>
                                        Camp Sam Hatcher, Sam Hatcher Rd., Newport, NC (
                                            <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="https://www.google.com/maps/dir//34.7425667,-76.9125404/@34.7388732,-76.9151134,3017m/data=!3m1!1e3?hl=en"
                      title="get directions"
                    >
                      get directions
                                            </Link>
                                       )
                                    </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleExpand('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Order of the Arrow
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  For more than 95 years, Scouting's National Honor Society, the Order
                  of the Arrow (OA), has recognized Scouts and Scouters who best exemplify
                  the Scout Oath and Law in their daily lives. This recognition provides
                  encouragement for others to live these ideals as well. Arrowmen are
                  known for maintaining camping traditions and spirit, promoting year-round
                  and long-term resident camping, developing leaders, and providing
                  cheerful service to others. OA service, activities, adventures, and
                  training for youth and adults are models of quality leadership development
                  and programming that enrich, support, and help to extend Scouting
                  to America's youth.
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  Southern District of ECC, OA Coree Chapter
                                </Typography>
                <ul>
                  <li>
                    When: meets 2nd Sunday each month at 3pm
                                    </li>
                  <li>
                    Where: Camp Sam Hatcher, Sam Hatcher Rd., Newport, NC (
                                            <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="https://www.google.com/maps/dir//34.7425667,-76.9125404/@34.7388732,-76.9151134,3017m/data=!3m1!1e3?hl=en"
                      title="get directions"
                    >
                      get directions
                                            </Link>
                                        )
                                    </li>
                  <li>
                    <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="http://croatan.org/"
                      title="more information"
                    >
                      more information
                                            </Link>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleExpand('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Friends of Scouting
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Friends of Scouting is the annual campaign where the
                  East Carolina Council, BSA asks Scouting families, businesses
                  and civic-minded citizens to support our mission of providing
                  the Scouting program to thousands of young people in eastern
                  North Carolina. By being a supporter, you're helping to fund
                  efforts to maintain awesome Scout properties within our Council,
                  and pay salaries to a very few number of professional Scouters
                  who manage the program. Without the support of Friends of Scouting,
                  our program would not be what it is today. Thanks for your support!
                                    <Link
                    variant="body1"
                    target="_blank"
                    rel="noopener"
                    href="http://www.eccbsa.org/Support%20Us/Friends%20of%20Scouting"
                    title="Want to find out more?"
                  >
                    Want to find out more?
                                    </Link>
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleExpand('panel8')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Scouts with Special Needs
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Youth with physical disabilities and youth and adults with developmental or
                  cognitive challenges are welcome in the Boy Scouts of America. As outlined
                  in this section, various accommodations exist to facilitate advancement.
                  These youth do not need to join a special unit oriented to serving members
                  with disabilities, although those exist and may be beneficial in some cases.
                  The severity of disability will indicate how members should be registered.
                  See “
                                    <Link
                    variant="body1"
                    target="_blank"
                    rel="noopener"
                    href="http://www.scouting.org/Home/GuideToAdvancement/SpecialNeeds/RegisterQualifiedMembers.aspx"
                    title="Registering Qualified Members Beyond Age of Eligibility"
                  >
                    Registering Qualified Members Beyond Age of Eligibility,
                                    </Link>
                                    ” 10.1.0.0.
                                </Typography>
                <Typography variant="body1">
                  When knowledgeable parents or volunteers are able to provide assistance
                  and oversight, most anyone can be a member. While leaders should be
                  enthusiastic about helping those with special needs, they should also
                  recognize the demands that will be placed on their patience, understanding,
                  and skill in working on advancement.
                                    <Link
                    variant="body1"
                    target="_blank"
                    rel="noopener"
                    href="http://www.scouting.org/filestore/pdf/510-071.pdf"
                    title="Scouting for those with special needs"
                  >
                    Scouting for those with special needs.
                                    </Link>
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel9'} onChange={handleExpand('panel9')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Scouts with Food Allergies
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  Millions of children and adults in the United States have been diagnosed
                  with specific food allergies that can be life-threatening. It is very
                  important for parents to communicate with your son's Scout leaders so
                  that they understand how to take precautions. Reading ALL food ingredient
                  labels is the first step in keeping Scouts safe. For example, a Scout with
                  a peanut allergy will know to avoid the obvious, like peanut butter,
                  if they are allergic to peanuts. However, not all things are that obvious.
                  For those with a peanut allergy, a hotdog or hamburger bun may seem like a
                  harmless choice because they clearly do not contain peanuts. Would you
                  agree? If you do, then you could have just made a decision that would
                  have cost a Scout his life! Watch out for "Processed in a facility, or
                  on equipment, that also processes peanuts" It is important to realize
                  that there are lots of food items that have been "processed in a facility
                  that also processes peanut products," which can be a problem due to
                  cross-contamination. Just because the name of the allergen is not included
                  in the product's name, or one of the ingredients does it mean it is safe.
                  Communicate with parents, and read all food labels to be safe, rather
                  than sorry.
                                </Typography>
              </div>
              <br />
              <div>
                <Typography variant="body1" className={classes.subheaderblue}>
                  How do I read food labels - list of ingredient?
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  Not sure which is more complicated, reading a food label or rocket science?
                  Fortunately, In 2006 the Food Allergen Labeling and Consumer Protection Act
                  (FALCPA) was passed mandating that all labels of food containing food
                  allergens declare the allergen in plain language, either in the ingredient
                  list or via:
                                </Typography>
                <ul>
                  <li>
                    The word "Contains" followed by the name of the major allergen - for example, "Contains: Milk, Wheat".
                                    </li>
                  <li>
                    A parnthtical statement in the list of ingredients - for example, "albumin (egg)".
                                    </li>
                  <li>
                    Food labels may also contain: "processed in a facility, or on equipment that
                    also processes peanuts." Although not required by FALCPA, it is important to
                    watch for this too since cross-contamination is very possible.
                                    </li>
                </ul>
              </div>
              <br />
              <div>
                <Typography variant="body1" className={classes.subheaderblue}>
                  What Does Knowing About Food Allergens Have to do with Scouting?
                                </Typography>
              </div>
              <div>
                <Typography variant="body1">
                  Any time food is shared it's important to those with allergies
                  to know what's in the food being served. Since Boy Scouting uses
                  the Patrol method, and generally assigns cooking responsibilities
                  to patrols on a rotating basis, it's important that all Scouters
                  know how to incorporate any food allergies issues into their
                  meal planning and preparations.
                                </Typography>
                <ul>
                  <li>
                    <Link
                      variant="body1"
                      target="_blank"
                      rel="noopener"
                      href="http://www.scouting.org/filestore/HealthSafety/pdf/2013Guidelines_Managing_Food_Allergies.pdf"
                      title="Guidelines for Managing Food Allergies"
                    >
                      Guidelines for Managing Food Allergies.
                                        </Link>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel10'} onChange={handleExpand('panel10')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.subheader} variant="h5">
              Hazardous Weather
                        </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <Typography variant="body1">
                  If you like Scouting, one of the reasons is probably that you like
                  being outside. Outside is not always good, especially during severe
                  weather. That's why it's important that ALL Scouters understand and
                  recognize potential weather threats before it's too late. Although
                  it is not required to be considered a "trained" Scout leader, it
                  doesn't hurt to take a few minutes to take BSA's Weather Hazards
                  online training.
                                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="grid-resources-district-contacts">
        <Typography variant="h4" className={classes.bsah4}>
          District Committee Contacts
        </Typography>
        <hr className={classes.hrmargin}></hr>
        <div className="contact-cards">
          {districtCommitteeContacts.map((dcc, index) => (
            <Card className="contact-cards-card" key={index}>
              <CardContent>
                <Typography variant="h5">
                  {dcc.Position}
                </Typography>
                <Typography variant="h6">
                  {dcc.FirstName} {dcc.LastName}
                </Typography>
                <Typography variant="body1">
                  {dcc.Email}
                </Typography>
                <Typography variant="body1">
                  {dcc.PhoneNumber}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}