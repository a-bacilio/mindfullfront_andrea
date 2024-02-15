import React from "react";
import { Route, Routes as Router } from "react-router";
import Index from "../pages/index/Index";
import Levels from "../pages/Levels";
import Level from "../pages/Level";

function Routes() {
    return (
        <Router>
            <Route
                path='/' element={<Index />} />

            <Route
                path="/level/:level_x" element={<Level />} />

            <Route
                path='/levels' element={<Levels />} />



        </Router>
    )
}

export default Routes