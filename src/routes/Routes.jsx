import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Index from "../pages/index/Index";
import Levels from "../pages/Levels";
import Level from "../pages/Level";
import Consent from "../pages/Consent";
import PSS10 from "../pages/PSS10";

function Routes() {
    return (
        <Router>
            <Route
                path='/' element={<Index />} />

            <Route
                path="/level/:level_x" element={<Level />} />

            <Route
                path='/levels' element={<Levels />} />

            <Route
                path='/consent' element={<Consent />} />
                
            <Route
                path='/pss10' element={<PSS10 />} />



        </Router>
    )
}

export default Routes