import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
// import Faqs from "./Components/Faqs";
import Home from './Components/Home'
import Rules from "./Components/Rules";

export default function MyRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rules" element={<Rules />} />
        </Routes>
        </BrowserRouter>
    )
}