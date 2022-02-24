import React from 'react';
import {Checkbox, IconButton, Paper, Typography} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import {TaskType} from '../../../types/types';

interface TodoItemPropsType {
    task: TaskType
}

export const TodoItem = ({task}: TodoItemPropsType) => {
    // Functions

    return (
        <Paper elevation={8} className={'between m10 p10'}>
            <Checkbox size={'small'}
            />
            <Typography>
                {task.title}
            </Typography>
            <IconButton size="small"
                        color={'primary'}
            >
                <HighlightOffSharpIcon/>
            </IconButton>
        </Paper>
    );
};

