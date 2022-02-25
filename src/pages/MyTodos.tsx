import React from 'react';
import {NavBar} from '../components/NavBar';
import {Grid} from '@mui/material';
import {Todo} from '../components/Todo/Todo';
import {useAppSelector} from '../hooks/redux';
import {TodoType} from '../types/types';

export const MyTodos = () => {
    const {todos} = useAppSelector(state => state.todos)
    const tasks = useAppSelector(state => state.tasks)
    const getTasksForRender = (todolist: TodoType) => {
        switch (todolist.filter) {
            case 'active':
                return tasks[todolist.id].filter(t => !t.completed)
            case 'completed':
                return tasks[todolist.id].filter(t => t.completed)
            default:
                return tasks[todolist.id]
        }
    }
    return (
        <>
            <NavBar/>
            <Grid container spacing={3} mt={3} justifyContent={'center'}>
                {todos.map(todo => <Todo key={todo.id}
                                         tasks={getTasksForRender(todo)}
                                         todolistID={todo.id}
                                         title={todo.title}
                />)}
            </Grid>
        </>
    );
};

