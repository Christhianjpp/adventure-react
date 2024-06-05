import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

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
import { NearPage } from './pages/NearPage.tsx';

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", element: <HomePage />,
      },
      {
        path: "/cerca", element: <NearPage />,
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

    {/* <GoogleOAuthProvider clientId="581594054169-4hhhemuhcqgsgfpofei6i3tm3nb3r2r4.apps.googleusercontent.com"> */}
    <GoogleOAuthProvider clientId="581594054169-8evn08f94ro8dm5j72c2doqqvjngcsoc.apps.googleusercontent.com">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
