import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import SearchIcon from '@material-ui/icons/Search';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import SiteHeader from './SiteHeader.component'

const useStyles = makeStyles({
    root: {
        borderRadius: "0px"
    },
    toolbar: {
        minHeight: "inherit",
        zIndex: "100"
    },
    hidden: {
        height: "0px",
        transition: "height 0.2s linear",
        overflow: "hidden"
    },
    shown: {
        height: "75px",
        transition: "height 0.2s linear",
        overflow: "hidden"
    },
    logocontainer: {
        margin: "0px auto"
    }
});

const menuItems = [
    { label: "Home", link: "/", icon: <HomeIcon />},
    { label: "Calendar", link: "/calendar", icon: <EventIcon /> },
    { label: "Find a Unit", link: "/find_a_unit", icon: <SearchIcon /> },
    { label: "Camping", link: "/camping", icon: <NightsStayIcon /> },
    { label: "Resources", link: "/resources", icon: <MenuBookIcon /> }
]

let currentSite = 0 ;
    
var locArr = window.location.pathname.split("/");
menuItems.find((item, index) => {
    if (item.link === `/${locArr[1]}`) {
        currentSite = index;
        return true;
    }
    return false;
})

export default function MainMenu(props) {
    const classes = useStyles(); 
    const [tabsvalue, setTabsvalue] = useState(currentSite);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 75
    });

    const handleChange = (event, newValue) => {
        setTabsvalue(newValue);
    };

    return (
        <AppBar
            position="fixed"
            color="inherit"
            className={classes.root}
        >

            <Paper className={classes.root}>
                <Toolbar className={[trigger ? classes.hidden : classes.shown, classes.toolbar].join(' ')}>
                    <RouterLink to="/" className={classes.logocontainer}>
                        <SiteHeader />
                    </RouterLink>
                </Toolbar>
                <Tabs
                    value={tabsvalue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {
                        menuItems.map((item, index) => (
                            <Tab
                                icon={item.icon}
                                label={item.label}
                                component={RouterLink}
                                to={item.link}
                                key={index}
                            />
                        ))
                    }
                </Tabs>
            </Paper>
        </AppBar>
    );
}