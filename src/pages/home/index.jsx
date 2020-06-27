import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Skeleton from '@material-ui/lab/Skeleton';

import Card from './card.component';
import DownloadNowBlock from '../../components/DownloadNowBlock.component';

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
    }
}));

const cards = [
    {
        title: 'Cub Scouts',
        img: '',
        content: 'Cub Scouting is a year-round program whose mission is to develop character and ethical decision-making skills for youth in kindergarten through fifth grades (5 to 10 years old).',
        link: 'https://beascout.scouting.org',
        linkText: 'Sign up today!'
    },
    {
        title: 'Boy Scouts',
        img: '',
        content: 'Boy Scouting, is a year-round program for youth 11–17 designed to build character, citizenship, and personal fitness through a vigorous outdoor program and peer group leadership with the counsel of an adult Scoutmaster.',
        link: 'https://beascout.scouting.org',
        linkText: 'Sign up today!'
    },
    {
        title: 'Adult Leaders',
        img: '',
        content: 'Behind every trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean and reverent Scout is a long line of committed volunteers who share those same traits. Volunteering has always been the very bedrock of the Scouting program. Watching kids grow is one thing — leading them through the process is a whole new experience all together.',
        link: 'https://beascout.scouting.org/Volunteer.aspx',
        linkText: 'Become a Leader!'
    }
]

export default function HomePage() {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Skeleton variant="rect" height={250}></Skeleton>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography variant="h4" className={classes.bsah4}>
                            Welcome to Croatan Trails!
                            </Typography>
                        <hr className={classes.hrmargin} />
                        <Typography variant="h6">
                            Located along the Crystal Coast in eastern North Carolina, the Croatan Trails (CT) District is one of nine making up the East Carolina Council, and serves Carteret and east Craven Counties, and is home to Coree Chapter of the Order of the Arrow.
                            </Typography>
                        <Link
                            variant="body2"
                            href={'http://visitor.constantcontact.com/manage/optin/ea?v=001K_4EBhhTrxTn9sfJiqjEP7SfWG_iYNyw1GljlONRt6qyOCAVm2L-vKZYxmuEoVQFs2gnUOQSAOUX3E7nKY7ozg%3D%3D'}>
                            Add me to CT District's e-mail list
                            </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <DownloadNowBlock />
                    </Grid>
                </Grid>
            </Grid>
            {(cards.map((dataItem, index) => {
                return (
                    <Grid item xs={4} key={index}>
                        <Card
                            title={dataItem.title}
                            img={dataItem.img}
                            content={dataItem.content}
                            link={dataItem.link}
                            linkText={dataItem.linkText}
                        ></Card>
                    </Grid>
                )
            }))}
        </Grid>
    )
}