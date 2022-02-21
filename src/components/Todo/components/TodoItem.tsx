import React from 'react';
import {Checkbox, IconButton, Paper, Typography} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import {TaskType} from '../../../types/types';

interface TodoItemPropsType {
    id: string
    title: string
    completed: boolean
}

export const TodoItem = ({id, title, completed}: TodoItemPropsType) => {
    return (
        <Paper elevation={8} className={'between m10 p10'}>
            <Checkbox size={'small'}/>
            <Typography>
                {title}
            </Typography>
            <IconButton size="small" color={'primary'}>
                <HighlightOffSharpIcon/>
            </IconButton>
        </Paper>
    );
};

