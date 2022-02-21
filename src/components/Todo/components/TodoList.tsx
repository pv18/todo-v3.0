import React from 'react';
import {List} from '@mui/material';
import {TodoItem} from './TodoItem';
import {useAppSelector} from '../../../hooks/redux';
import {FilterType, TodoType} from '../../../types/types';

interface TodoListPropsType {
    todo: TodoType
}

export const TodoList = ({todo}: TodoListPropsType) => {
    const {tasks} = useAppSelector(state => state.tasks)
    const {filter} = useAppSelector(state => state.tasks)
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
    const filteredTasks = getFilteredTasks(filter)
    return (
        <List>
            {filteredTasks.map(task => <TodoItem key={task.id} {...task}/>)}
        </List>
    );
};

