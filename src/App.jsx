import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import TvShowsPage from "./pages/TvShowsPage.jsx";

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route index path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/tvshows' element={<TvShowsPage />} />

                    <Route path='*' element={<h1>404 Not Found</h1>} />
                </Routes>
            </Router>
            <div>App online</div>
        </>
    )
}

export default App
