import React from 'react';
import {Grid, Paper} from '@mui/material';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import {TodoFilters} from './components/TodoFilters';
import {TitleForm} from '../TitleForm';
import {FilterType, TodoType} from '../../types/types';

interface TodoPropsType {
    todo: TodoType
}

export const Todo = ({todo}: TodoPropsType) => {
    return (
        <Grid item>
            <Paper className={'paper'} variant={'outlined'}>
                <TitleForm title={todo.title}/>
                <TodoForm/>
                <TodoList todo={todo}/>
                <TodoFilters/>
            </Paper>

        </Grid>
    );
};

