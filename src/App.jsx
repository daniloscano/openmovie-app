import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route index path='/' element={} />

                    <Route path='*' element={} />
                </Routes>
            </Router>
            <div>App online</div>
        </>
    )
}

export default App
