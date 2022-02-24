import {TaskType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {todoID1, todoID2} from './TodosSlice';

export interface TasksSlice {
    [id: string]: TaskType[]
}

export interface AddTaskType {
    title: string
    todolistID: string
}

export type ActionType = AddTaskType

const initialState: TasksSlice = {
    [todoID1]: [
        {id: v1(), title: 'HTML', completed: false},
        {id: v1(), title: 'CSS', completed: true},
        {id: v1(), title: 'JS', completed: false},
    ],
    [todoID2]: [
        {id: v1(), title: 'milk', completed: false},
        {id: v1(), title: 'bread', completed: true},
        {id: v1(), title: 'water', completed: false},
    ],
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ActionType>) {
            const newTask = {id: v1(), title: action.payload.title, completed: false}
            state[action.payload.todolistID] = [newTask, ...state[action.payload.todolistID]]
        },
    }
})

// export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;