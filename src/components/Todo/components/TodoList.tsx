import React from 'react';
import {List} from '@mui/material';
import {TodoItem} from './TodoItem';

export const TodoList = () => {
    return (
        <List>
            <TodoItem/>
        </List>
    );
};

