import React from 'react';
import {Grid, Paper} from '@mui/material';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import {TodoFilters} from './components/TodoFilters';
import {TitleForm} from '../TitleForm';
import {TaskType} from '../../types/types';

interface TodoPropsType {
    tasks: TaskType[]
    title:string
}

export const Todo = ({title,tasks}: TodoPropsType) => {
    return (
        <Grid item>
            <Paper className={'paper'} variant={'outlined'}>
                <TitleForm title={title}/>
                <TodoForm/>
                <TodoList tasks={tasks}/>
                <TodoFilters/>
            </Paper>

        </Grid>
    );
};

