import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header"

function App() {
return (
    <>
        <div className="app">
            <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Header />
                            <Home />
                        </Route>

                    </Routes>
            </BrowserRouter>
        </div>
    </>
);
}

export default App;