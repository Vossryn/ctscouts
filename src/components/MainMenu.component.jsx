import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Slide from "@material-ui/core/Slide";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';

import SiteHeader from './SiteHeader/SiteHeader.component'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        borderRadius: "0px"
    },
    toolbar: {
        minHeight: "inherit"
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
    }
});

const menuItems = [
    { label: "Home", link: "/" },
    { label: "Calendar", link: "/calendar" },
    { label: "Find a Unit", link: "/find_a_unit" },
    { label: "Camping", link: "/camping" },
    { label: "Resources", link: "/resources" }
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
        <div className={classes.root}>
            <AppBar
                position="fixed"
                color="inherit"
            >
                <Toolbar className={[trigger ? classes.hidden : classes.shown, classes.toolbar].join(' ')}>
                    <SiteHeader />
                </Toolbar>

                <Paper className={classes.root}>
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
        </div>
    );
}