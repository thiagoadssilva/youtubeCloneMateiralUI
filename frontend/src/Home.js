import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import logo from './images/preto.png';

import {
    makeStyles, 
    AppBar,
    Toolbar,
    IconButton,    
    Button,
    Drawer,
    List,    
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText

} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

const useStyle = makeStyles((theme) => ({
    root:{
        height: '100vh'
    },
    appbar:{
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    grow:{
        flexGrow: 1
    },
    icons:{
    },
    menuIcon:{
        paddingRight: theme.spacing(6)
    },
    logo:{
        height: 25
    }, 
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
      borderRight: 'none'
    },
    drawerContainer: {
      overflow: 'auto',
    },
    listItemText:{
        fontSize: 14
    },
    listItem:{
        paddingTop: 4,
        paddingBottom: 4
    }
}));

export default () => {
    const classes = useStyle();
    return(
        <div className={classes.root}>  
            <AppBar color='inherit' className={classes.appbar}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuIcon} 
                    color="inherit" 
                    aria-label="menu"
                >
                <MenuIcon />
                </IconButton>

                <img src={logo} alt="logo"  className={classes.logo}/>


                <div className={classes.grow}/>
                <IconButton 
                    className={classes.icons} 
                    color="inherit" 
                >
                <VideoCallIcon />
                </IconButton>
                <IconButton 
                    className={classes.icons} 
                    color="inherit" 
                >
                <AppsIcon />
                </IconButton>
                <IconButton 
                    className={classes.icons} 
                    color="inherit" 
                >
                <MoreVertIcon />
                </IconButton>
                
                <Button 
                    variant="outlined" 
                    color="primary"
                    startIcon={<AccountCircleIcon />}
                >Fazer Login</Button>
            </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    <ListItem button   classes={{root: classes.listItem}}>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText primary={'Ínicio'} classes={{primary: classes.listItemText}}/>
                    </ListItem>
                    <ListItem button  classes={{root: classes.listItem}} >
                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                        <ListItemText primary={'Em Alta'} classes={{primary: classes.listItemText}}/>
                    </ListItem>
                    <ListItem button  classes={{root: classes.listItem}}>
                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                        <ListItemText primary={'Incrições'} classes={{primary: classes.listItemText}}/>
                    </ListItem>
                </List>
                <Divider />
                </div>
            </Drawer>
        </div>
    );
}