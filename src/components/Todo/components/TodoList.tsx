import React from 'react';
import {List} from '@mui/material';
import {TodoItem} from './TodoItem';
import {useAppSelector} from '../../../hooks/redux';

export const TodoList = () => {
    const {tasks} = useAppSelector(state => state.tasks)

    return (
        <List>
            {tasks.map(task => <TodoItem key={task.id} {...task}/>)}
        </List>
    );
};

