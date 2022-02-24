import React from 'react';
import {NavBar} from '../components/NavBar';
import {Grid} from '@mui/material';
import {Todo} from '../components/Todo/Todo';
import {useAppSelector} from '../hooks/redux';

export const MyTodos = () => {
    const {todos} = useAppSelector(state => state.todos)
    const tasks = useAppSelector(state => state.tasks)
    return (
        <>
            <NavBar/>
            <Grid container spacing={3} mt={3} justifyContent={'center'}>
                {todos.map(todo => <Todo key={todo.id} tasks={tasks[todo.id]} title={todo.title}/>)}
            </Grid>
        </>
    );
};

