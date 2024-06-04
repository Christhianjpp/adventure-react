import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import adventureApi from '../../api/adventureApi'


export interface CategoriesState {
    categories: [{
        _id: string,
        name: string,
    }],
    total: number,
    loading: boolean,
}

const initialState: CategoriesState = {
    categories: [{
        _id: '',
        name: '',
    }],
    total: 0,
    loading: false,
}
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const resp = await adventureApi.get('/category')
        return resp.data
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories: (state, action: PayloadAction<CategoriesState>) => {
            state.categories = action.payload.categories
            state.total = action.payload.total
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload.categories
                state.total = action.payload.total
                state.loading = false
            })

    },
})


export const { getCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
















