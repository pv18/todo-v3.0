import React from 'react';
import {Checkbox, IconButton, Paper, Typography} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

export const TodoItem = () => {
    return (
        <Paper elevation={8} className={'between m10 p10'}>
            <Checkbox size={'small'}/>
            <Typography>
                any text
            </Typography>
            <IconButton size="small" color={'primary'}>
                <HighlightOffSharpIcon/>
            </IconButton>
        </Paper>
    );
};

