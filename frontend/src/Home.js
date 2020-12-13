import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import logo from './images/preto.png';
import logoBranco from './images/branco.png';

import { useTheme } from '@material-ui/core/styles';

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

import SearchBar from './SearchBar';
import youtube from './api/youtube';
import VideosList from './VideosList';

const useStyle = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appbar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    divv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'inherit',
        marginLeft: 100
    },
    icons: {
    },
    logo: {
        height: 25,
        marginLeft: 30

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
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    subheader: {
        textTransform: 'uppercase'
    },
    divLogo:{
        marginRight: 200
    },
    divSearch:{
        paddingBottom: 10,
        width: 500
    }
}));

export default ({ darkMode, setDarkMode }) => {
    const theme = useTheme();
    const classes = useStyle();

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        handleSubmit("reactjs");
    }, []);

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appbar}>
                <IconButton
                    edge="start"
                    aria-label="menu"
                    className={classes.divLogo}
                >
                    <MenuIcon />
                    <img src={theme.palette.type === 'dark' ? logoBranco : logo} alt="logo" className={classes.logo} />
                </IconButton>

                {/* <div className={classes.divSearch}> */}
                <SearchBar onSubmit={handleSubmit} />
                {/* </div> */}

                <div className={classes.divv}>
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <IconButton>
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton>
                        <AppsIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AccountCircleIcon />}
                    >Fazer Login</Button>
                </div>
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
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText primary={'Ínicio'} classes={{ primary: classes.listItemText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }} >
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText primary={'Em Alta'} classes={{ primary: classes.listItemText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText primary={'Incrições'} classes={{ primary: classes.listItemText }} />
                                </ListItem>
                            </List>
                            <Divider />

                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <VideoLibrary />
                                    </ListItemIcon>
                                    <ListItemText primary={'Biblioteca'} classes={{ primary: classes.listItemText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>
                                        <History />
                                    </ListItemIcon>
                                    <ListItemText primary={'Histórico'} classes={{ primary: classes.listItemText }} />
                                </ListItem>
                            </List>
                            <Divider />

                            <Box p={5}>
                                <Typography variant='body1'>
                                    Faça o login para Curtir vídeos, comentar e se inscrever
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        color='secondary'
                                        variant="outlined"
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

                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Música' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Esporte' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Jogos' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Filmes' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Notícias' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Ao vivo' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Destaque' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Video 360' classes={{ primary: classes.listItemText }} />
                            </ListItem>

                            <Divider />
                            <ListItem button classes={{ root: classes.listItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText primary='Procurar mais' classes={{ primary: classes.listItemText }} />
                            </ListItem>
                            <Divider />
                        </div>
                    </Drawer>
                </Hidden>

                <Box>
                    <Toolbar />
                    <Grid
                        container
                        spacing={2}
                        style={{
                            padding: "30px",
                            marginRight: "30px"
                        }}
                    >
                        <VideosList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </Grid>
                </Box>
            </Box>
        </div>
    );

    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 12,
                key: 'AIzaSyCEdtFcGKYEHWBy_JCUJrzCAsMY3R_xm1o',
                q: searchTerm
            }
        });
        setVideos(videos);
        setSelectedVideo(videos[0]);
    }
}