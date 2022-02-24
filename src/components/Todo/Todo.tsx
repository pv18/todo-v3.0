import React from 'react';
import {Grid, Paper} from '@mui/material';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import {TodoFilters} from './components/TodoFilters';
import {TitleForm} from '../TitleForm';
import {TaskType} from '../../types/types';

interface TodoPropsType {
    tasks: TaskType[]
    title: string
    todolistID: string
}

export const Todo = ({todolistID, title, tasks}: TodoPropsType) => {
    return (
        <Grid item>
            <Paper className={'paper'} variant={'outlined'}>
                <TitleForm title={title}/>
                <TodoForm todolistID={todolistID}/>
                <TodoList tasks={tasks}/>
                <TodoFilters/>
            </Paper>

        </Grid>
    );
};

