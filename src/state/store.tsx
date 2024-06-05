import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice'
import categoriesSlice from './category/categoriesSlice'
import routesSlice from './routes/routesSlice'
import authSlice from './auth/authSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesSlice,
        routes: routesSlice,
        auth: authSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



