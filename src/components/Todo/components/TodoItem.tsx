import React from 'react';
import {Checkbox, IconButton, Paper, Typography} from '@mui/material';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import {TaskType} from '../../../types/types';
import {useAppDispatch} from '../../../hooks/redux';
import {changeCompletedTask, removeTask} from '../../../store/reducers/TasksSlice';

interface TodoItemPropsType {
    todolistID: string
    task: TaskType
}

export const TodoItem = ({todolistID, task}: TodoItemPropsType) => {
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = () => {
        const taskID = task.id
        dispatch(removeTask({taskID, todolistID}))
    }
    const changeHandler = () => {
        const taskID = task.id
        dispatch(changeCompletedTask({taskID, todolistID}))
    }
    return (
        <Paper elevation={8} className={'between m10 p10'}>
            <Checkbox size={'small'}
                      checked={task.completed}
                      onChange={changeHandler}
            />
            <Typography>
                {task.title}
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

