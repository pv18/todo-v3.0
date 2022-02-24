import {TodoType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';

export interface TodosSlice {
    todos: TodoType[]
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
    name:'todos',
    initialState,
    reducers: {

    }
})

export default todosSlice.reducer