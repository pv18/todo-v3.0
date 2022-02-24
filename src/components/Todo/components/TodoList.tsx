import React from 'react';
import {List} from '@mui/material';
import {TodoItem} from './TodoItem';
import {useAppSelector} from '../../../hooks/redux';
import {FilterType, TaskType} from '../../../types/types';

interface TodoListPropsType {
    tasks: TaskType[]
}

export const TodoList = ({tasks}:TodoListPropsType) => {
    const {todos} = useAppSelector(state => state.todos)
    // Functions
    const getFilteredTasks = (filter: FilterType) => {
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed)
            case 'completed':
                return tasks.filter(task => task.completed)
            default:
                return tasks
        }
    }
    return (
        <List>
            {tasks.map(task => <TodoItem key={task.id}
                                         task={task}
            />)}
        </List>
    );
};

