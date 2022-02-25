import {FilterType, TodoType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tasksSlice} from './TasksSlice';

export interface TodosSlice {
    todos: TodoType[]
}

interface ChangeTodolistFilterType {
    todolistID: string
    filter: FilterType
}

interface RemoveTodolistType {
    todolistID: string
}


export const todoID1 = v1()
export const todoID2 = v1()

const initialState: TodosSlice = {
    todos: [
        {id: todoID1, title: 'What to learn', filter: 'all'},
        {id: todoID2, title: 'What to buy', filter: 'all'},
    ]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeTodolistFilter(state, action: PayloadAction<ChangeTodolistFilterType>) {
            const todoList = state.todos.find(todo => todo.id === action.payload.todolistID);
            if (todoList) todoList.filter = action.payload.filter;
        },
        removeTodolist(state, action: PayloadAction<RemoveTodolistType>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.todolistID)
        }
    }
})

export const {changeTodolistFilter, removeTodolist} = todosSlice.actions;

export default todosSlice.reducer