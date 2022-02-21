import {TaskType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';

export interface TasksSlice {
    tasks: TaskType[]
}

const initialState: TasksSlice = {
    tasks: [
        {id: v1(), title: 'HTML', completed: false},
        {id: v1(), title: 'CSS', completed: true},
        {id: v1(), title: 'JS', completed: false},
    ]
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }
})

export default tasksSlice.reducer;