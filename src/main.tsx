import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import HomePage from './pages/HomePage.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx';
import Root from './routes/root.tsx';
import ProfilePage from './pages/profile/ProfilePage.tsx';

import { store } from './state/store.tsx'
import { Provider } from 'react-redux'
import { RouterPage } from './pages/RouterPage.tsx';

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", element: <HomePage />,
      },
      {
        path: "/cerca", element: <HomePage />,
      },
      {
        path: "/:user", element: <ProfilePage />,
      },
      {
        path: "/router/:router", element: <RouterPage />,
      }

    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
