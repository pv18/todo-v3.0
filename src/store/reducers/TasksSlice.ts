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

export interface RemoveTaskType {
    todolistID: string
    taskID: string
}

export interface RemoveTaskListType {
    todolistID: string
}

export interface ChangeCompletedTaskType {
    todolistID: string
    taskID: string
}

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
        addTask(state, action: PayloadAction<AddTaskType>) {
            const todolistID = action.payload.todolistID
            const newTask = {id: v1(), title: action.payload.title, completed: false}
            state[todolistID] = [newTask, ...state[todolistID]]
        },
        removeTask(state, action: PayloadAction<RemoveTaskType>) {
            const todolistID = action.payload.todolistID;
            state[todolistID] = state[todolistID]
                .filter(task => task.id !== action.payload.taskID)
        },
        changeCompletedTask(state, action: PayloadAction<ChangeCompletedTaskType>) {
            const todolistID = action.payload.todolistID;
            const taskID = action.payload.taskID
            state[todolistID] = state[todolistID]
                .map(task => (task.id !== taskID ? task : {...task, completed: !task.completed}))
        },
        removeTaskList(state, action: PayloadAction<RemoveTaskListType>) {
            delete state[action.payload.todolistID]
        }
    }
})

export const {addTask, removeTask, changeCompletedTask,removeTaskList} = tasksSlice.actions;

export default tasksSlice.reducer;