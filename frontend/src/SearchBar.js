import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        marginBottom: 10


    },
}));
export default ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const classes = useStyles();

    const handleChange = (event) => setSearchTerm(event.target.value);
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }


    return (
        <TextField
            className={classes.input}
            label="Search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
        />
    );
}