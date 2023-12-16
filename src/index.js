import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './style/forexpens.css';
import './style/style.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Signup from './components/signup';
import Home from './components/home';
import Login from './components/login';
import Add from './components/add-new';
import Edit from './components/expenseedit';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/edit/:id",
    element: <Edit />
  },
  {
    path: "/add",
    element: <Add />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
