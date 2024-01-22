// import './assets/css/main.css';
import pages from './pages/pageIndex.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AppBar from './components/AppBar.js';
import "./assets/styles/main.css";




function App() {
    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Router>
                <AppBar />
                <Routes>
                    {/* Index page */}
                    <Route exact path='/' element={<pages.Homepage />} />
                    <Route path='/importrecipe' element={<pages.AddRecipe />} />
                    <Route path='/addrecipe' element={<pages.AddRecipe />} />

                    <Route exact path='/manageusers' element={<pages.ManageUsers />} />
                    <Route exact path='/login' element={<pages.Login />} />
                </Routes>
            </Router>
        </LocalizationProvider>

    );
}

export default App;
