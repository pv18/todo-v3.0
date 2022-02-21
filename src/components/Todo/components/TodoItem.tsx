import React from 'react';
import {Checkbox, IconButton, Paper, Typography} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import {useAppDispatch} from '../../../hooks/redux';
import {changeCompleted, removeTask} from '../../../store/reducers/TasksSlice';

interface TodoItemPropsType {
    id: string
    title: string
    completed: boolean
}

export const TodoItem = ({id, title, completed}: TodoItemPropsType) => {
    const dispatch = useAppDispatch();
    // Functions
    const clickHandler = () => dispatch(removeTask(id))
    const changeHandler = () => dispatch(changeCompleted(id))

    return (
        <Paper elevation={8} className={'between m10 p10'}>
            <Checkbox size={'small'}
                      checked={completed}
                      onChange={changeHandler}
            />
            <Typography>
                {title}
            </Typography>
            <IconButton size="small"
                        color={'primary'}
                        onClick={clickHandler}
            >
                <HighlightOffSharpIcon/>
            </IconButton>
        </Paper>
    );
};

