import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CategoriesState {
    categories: [{
        _id: string,
        name: string,
    }],
    total: number,
}

const initialState: CategoriesState = {
    categories: [{
        _id: '',
        name: '',
    }],
    total: 0,
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories: (state, action: PayloadAction<CategoriesState>) => {
            state.categories = action.payload.categories
            state.total = action.payload.total
        },
    },
})


export const { getCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
















