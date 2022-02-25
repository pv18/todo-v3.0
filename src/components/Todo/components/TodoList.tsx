import React from 'react';
import {List} from '@mui/material';
import {TodoItem} from './TodoItem';
import {FilterType, TaskType} from '../../../types/types';

interface TodoListPropsType {
    todolistID: string
    tasks: TaskType[]
}

export const TodoList = ({todolistID, tasks}: TodoListPropsType) => {
    // Functions
    return (
        <List>
            {tasks.map(task => <TodoItem key={task.id}
                                         todolistID={todolistID}
                                         task={task}
            />)}
        </List>
    );
};

