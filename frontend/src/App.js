import React from 'react';
import Home from './Home';

import {
    ThemeProvider, 
    createMuiTheme, 
    makeStyles
} from '@material-ui/core';

const useStyle = makeStyles ({
    root:{
       
    }
});

function App() {
    const classes = useStyle();
    const theme = createMuiTheme({
        palette:{
            main: '#f44336'
        },
        secondary:{
            main: '#3f51b5'
        }
    });
    return (
        <ThemeProvider theme={theme}>
           <Home />
        </ThemeProvider>  
    );
}

export default App;
