import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes';
import AllProvider from './allContext/AllContext';
// import AllContext from './allContext/AllContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProvider>
      <RouterProvider router={router} />
    </AllProvider>
  </React.StrictMode>,
)


