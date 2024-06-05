import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adventureApi from '../../api/adventureApi'
import { User } from '../../interfaces/userInterface'
import { RouteElement } from '../../interfaces/routeInterface'


export interface AuthState {
    user: User | null,
    token: string | null,
    loading: boolean,
    error: string,
    userRoutes: {
        routes: RouteElement[];
        total: number;
    }
    userRoutesLoading: boolean,
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: '',
    userRoutes: {
        routes: [],
        total: 0

    },
    userRoutesLoading: false,
}
export const fetchUserRoutes = createAsyncThunk(
    'auth/fetchUserRoutes',
    async () => {
        const resp = await adventureApi.post('/shearch/routeuser')

        return resp.data
    }

)

export const fetchVerifyToken = createAsyncThunk(
    'auth/fetchverifyToken',
    async (id_token: string) => {
        const resp = await adventureApi.post('/auth/google-react-outh', { id_token })
        return resp.data
    })


export const checkToken = createAsyncThunk(
    'auth/checkToken',
    async () => {

        const resp = await adventureApi.get('/auth')

        return resp.data
    }

)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthState>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token || '');
            state.loading = false;
            state.error = '';

        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
            state.loading = false;
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVerifyToken.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchVerifyToken.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
                state.loading = false;
                state.error = 'null';
            }).addCase(fetchVerifyToken.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || ''
            }).addCase(checkToken.pending, (state) => {
                state.loading = true
            }).addCase(checkToken.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
                state.loading = false;
                state.error = 'null';
            }).addCase(checkToken.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || ''
            }).addCase(fetchUserRoutes.pending, (state) => {
                state.userRoutesLoading = true
            }).addCase(fetchUserRoutes.fulfilled, (state, action: PayloadAction<{ routes: RouteElement[]; total: number }>) => {
                state.userRoutes.routes = action.payload.routes
                state.userRoutes.total = action.payload.total
                state.userRoutesLoading = false
            }).addCase(fetchUserRoutes.rejected, (state, action) => {
                state.userRoutesLoading = false
                state.error = action.error.message || ''
            })


    }


})

export const { login, logout } = authSlice.actions
export default authSlice.reducer