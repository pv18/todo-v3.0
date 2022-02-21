import {FilterType, TaskType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TasksSlice {
    tasks: TaskType[]
    filter: FilterType
}

const initialState: TasksSlice = {
    tasks: [
        {id: v1(), title: 'HTML', completed: false},
        {id: v1(), title: 'CSS', completed: true},
        {id: v1(), title: 'JS', completed: false},
    ],
    filter: 'all'
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = {id: v1(), title: action.payload, completed: false}
            state.tasks.push(newTask)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        changeCompleted: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map(task =>
                (task.id !== action.payload) ? task : {...task, completed: !task.completed}
            )
        },
        changeFilter: (state, action:PayloadAction<FilterType>) => {
            state.filter = action.payload
        }
    }
})

export const {addTask, removeTask, changeCompleted, changeFilter} = tasksSlice.actions;

export default tasksSlice.reducer;