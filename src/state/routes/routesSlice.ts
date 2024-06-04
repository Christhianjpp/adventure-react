import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RouteElement } from "../../interfaces/routeInterface";
import adventureApi from "../../api/adventureApi";



export interface RoutesState {
    routes: RouteElement[];
    total: number;
    loading: boolean;
    loadingMore: boolean;
    activeRoute: RouteElement | null;
    loadingRoute: boolean;
    error?: string;
}

const initialState: RoutesState = {
    routes: [],
    total: 0,
    loading: false,
    loadingMore: false,
    activeRoute: null,
    loadingRoute: false,
    error: undefined
}


export const fetchInitialRoutes = createAsyncThunk(
    'routes/fetchInitialRoutes',
    async ({ category, province }: { category: string, province: string }) => {
        const resp = await adventureApi.post(`/shearch/routesnotlogin?category=${category}&province=${province}&desde=0`);
        return resp.data;
    }
);
export const fetchMoreRoutes = createAsyncThunk(
    'routes/fetchMoreRoutes',
    async ({ category, province, desde }: { category: string, province: string, desde: number }) => {
        const resp = await adventureApi.post(`/shearch/routesnotlogin?category=${category}&province=${province}&desde=${desde}`);
        return resp.data;
    }
);

export const fetchRoute = createAsyncThunk(
    'routes/fetchRoute',
    async (id: string) => {
        console.log('id', id)
        console.log('fetch')
        const resp = await adventureApi.get(`/route/${id}`);
        return resp.data;
    }
);

// export const fetchRoutes = createAsyncThunk(
//     'routes/fetchRoutes',
//     async ({ desde }: { desde: number }) => {
//         const resp = await adventureApi.post(`/shearch/routesnotlogin?category=${category}&province=${province}&desde=${desde}`)
//         console.log(resp.status)
//         // const resp = await adventureApi.get('/route')

//         return resp.data
//     }
// )

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        getRoutes: (state, action) => {
            state.routes = action.payload.router
            state.total = action.payload.total
        },
        setActiveRoute: (state, action) => {
            state.activeRoute = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialRoutes.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchInitialRoutes.fulfilled, (state, action) => {

                state.routes = action.payload.routes
                state.total = action.payload.total
                state.loading = false
            })
            .addCase(fetchInitialRoutes.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchMoreRoutes.pending, (state) => {
                state.loadingMore = true;
            })
            .addCase(fetchMoreRoutes.fulfilled, (state, action) => {
                state.routes = [...state.routes, ...action.payload.routes]; // Concatenar los nuevos resultados
                state.total = action.payload.total;
                state.loadingMore = false;
            })
            .addCase(fetchMoreRoutes.rejected, (state) => {
                state.loadingMore = false;
            })
            .addCase(fetchRoute.pending, (state) => {
                state.loadingRoute = true;
            })
            .addCase(fetchRoute.fulfilled, (state, action) => {
                state.activeRoute = action.payload;
                state.loadingRoute = false;
            }).addCase(fetchRoute.rejected, (state) => {
                state.loadingRoute = false;
            })
    },

})

export const { getRoutes } = routesSlice.actions

export default routesSlice.reducer