import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Root from './root.tsx'
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
        >

        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
