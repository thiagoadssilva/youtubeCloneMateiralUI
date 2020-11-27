import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import thumb1 from './images/thumb1.png';


import logo from './images/preto.png';
import logoBranco from './images/branco.png';

import {useTheme} from '@material-ui/core/styles';

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
    ListItemText,
    Box,
    ListSubheader,
    Grid,
    Hidden,
    Switch
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

const useStyle = makeStyles((theme) => ({
    root:{
        height: '100vh',
        backgroundColor: theme.palette.background.dark
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
    },
    subheader:{
        textTransform: 'uppercase'
    }
}));

const videos =[
    {
        id:1,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
        thumb: thumb1
    },
    {
        id:2,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:3,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:4,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:5,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:5,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:6,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    {
        id:7,
        title: 'Thiago jose da silva',
        channel: 'Thiago',
        views: '11 mi de visualizações',
        date: 'Há 1 semana',
        avatar: logo,
         thumb: thumb1
    },
    
]

export default ({darkMode, setDarkMode}) => {
    const theme = useTheme();
    const classes = useStyle();
    return(
        <div className={classes.root}>  
            <AppBar color='inherit' className={classes.appbar}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuIcon} 
                     
                    aria-label="menu"
                >
                <MenuIcon />
                </IconButton>

                <img src={theme.palette.type === 'dark' ? logoBranco : logo} alt="logo"  className={classes.logo}/>


                <div className={classes.grow}/>
                <Switch 
                    value={darkMode}  
                    onChange={() => setDarkMode(!darkMode)}
                    classes={classes.icons}
                />
                <IconButton 
                    className={classes.icons} 
                     
                >
                <VideoCallIcon />
                </IconButton>
                <IconButton 
                    className={classes.icons} 
                     
                >
                <AppsIcon />
                </IconButton>
                <IconButton 
                    className={classes.icons} 
                >
                <MoreVertIcon />
                </IconButton>
                
                <Button 
                    variant="outlined" 
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                >Fazer Login</Button>
            </Toolbar>
            </AppBar>
            
            <Box display='flex'>
                <Hidden mdDown>
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

                            <List>
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>
                                        <VideoLibrary />
                                    </ListItemIcon>
                                    <ListItemText primary={'Biblioteca'} classes={{primary: classes.listItemText}}/>
                                </ListItem>
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>
                                        <History />
                                    </ListItemIcon>
                                    <ListItemText primary={'Histórico'} classes={{primary: classes.listItemText}}/>
                                </ListItem>
                            </List>
                            <Divider />

                            <Box p={5}>
                                <Typography variant='body1'>
                                    Faça o login para Curtir vídeos, comentar e se inscrever
                                </Typography>
                                <Box mt={2}>    
                                    <Button 
                                        variant='outlines'
                                        color='secondary'
                                        startIcon={<AccountCircleIcon />}
                                    >
                                        Fazer Login
                                    </Button>
                                </Box>
                            </Box>
                            <Divider />

                            <List 
                                component='nav'
                                aria-aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O Melhor do youtube
                                    </ListSubheader>
                                }
                            
                            />

                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Música' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Esporte' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Jogos' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Filmes' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Notícias' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Ao vivo' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Destaque' classes={{primary: classes.listItemText}}/>
                            </ListItem>
                            <ListItem button classes={{root: classes.listItem}}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Video 360' classes={{primary: classes.listItemText}}/>
                            </ListItem>

                            <Divider />
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText primary='Procurar mais' classes={{primary: classes.listItemText}}/>
                                </ListItem>
                            <Divider />    
                        </div>
                    </Drawer>
                </Hidden>
                
                
                <Box p={4}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{fontWeight: 500}}
                    >
                        Recomendados
                    </Typography>
                

                <Grid container spacing={2}>
                    {
                        videos.map((item, index) =>(
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <img 
                                        style={{width: '100%'}}
                                        alt={item.title}
                                        src={item.thumb}
                                    />
                                    <Box>
                                        <Typography
                                            style={{fontWeight: 600}}
                                            gutterBotton
                                            variant='body1'
                                            color='textPrimary'
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            style={{fontWeight: 600}}
                                            gutterBotton
                                            variant='body2'
                                            color='textSecondary'
                                        >
                                            {item.channel}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='textSecondary'
                                        >
                                            {`${item.views} - ${item.date}`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                        ))
                    }
                </Grid>
                </Box>
            </Box>
        </div>
    );
}