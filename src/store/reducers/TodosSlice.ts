import {TodoType} from '../../types/types';
import {v1} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';

export interface TodosSlice {
    todos: TodoType[]
}

const todoID1 = v1()
const todoID2 = v1()

const initialState: TodosSlice = {
    todos: [
        {id: todoID1, title: 'Что учить', filter: 'all'},
        {id: todoID2, title: 'Что купить', filter: 'all'},
    ]
}

const todosSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {

    }
})

export default todosSlice.reducer