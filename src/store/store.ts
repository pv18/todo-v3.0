import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './reducers/TasksSlice';
import todosReducer from './reducers/TodosSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        tasks: tasksReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


// Определяем 3 базовых типа которые понадобяться в работе

// Тип нашего состояния. Его можно получить либо из reducer или из самого store
// Тип из reducer
// export type RootState = ReturnType<typeof rootReducer>


// Тип из store
// export type RootState = ReturnType<typeof setupStore> альтернативная запись

// Получим Тип самого store
// export type AppStore = ReturnType<typeof setupStore>


// Получим Тип Dispatch нашего хранилища
// export type AppDispatch = AppStore['dispatch']
