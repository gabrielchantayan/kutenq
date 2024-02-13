// import './assets/css/main.css';
import pages from './pages/pageIndex.js'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AppBar from './components/AppBar.js';
import "./assets/styles/main.css";
import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
    {
        element: <><AppBar /><Outlet /></>,
        children: [
            {
                path: "/",
                element: <pages.Homepage />
            },
            {
                path: "/addrecipe",
                element: <pages.AddRecipe />
            },
        ]
    }
])

function App() {


    useEffect(() => {
        console.log('wun')
    }, []) 


    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <AppBar /> */}
                    <RouterProvider router={router} />

            {/* <Router>
                <Routes>
                    Index page *
                    <Route exact path='/' element={<pages.Homepage />} />
                    <Route path='/importrecipe' element={<pages.AddRecipe />} />
                    <Route path='/addrecipe' element={<pages.AddRecipe />} />
                    <Route exact path='/login' element={<pages.Login />} />
                </Routes>
            </Router> */}
        </LocalizationProvider>

    );
}

export default App;
