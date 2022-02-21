import React from 'react';
import {Grid, Paper} from '@mui/material';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import {TodoFilters} from './components/TodoFilters';

export const Todo = () => {
    return (
        <Grid item>
            <Paper className={'paper'} variant={'outlined'}>
                <TodoForm/>
                <TodoList/>
                <TodoFilters/>
            </Paper>

        </Grid>
    );
};

