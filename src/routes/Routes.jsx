import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import Index from "../pages/index/Index";
import Levels from "../pages/Levels";
import Level from "../pages/Level";
import Consent from "../pages/Consent";
import PSS10 from "../pages/PSS10";
import Anim from "../pages/Anim";
import Clock from "../pages/Clock";
import Mauq from "../pages/Mauq";
import Apitest from "../pages/Apitest";

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

            <Route
                path='/mauq' element={<Mauq />} />    
           
            <Route
                path='/anim' element={<Anim />} />
            
            <Route
                path='/clock' element={<Clock />} />

<Route
                path='/apitest' element={ <Apitest/>} />
        
        </Router>
    )
}

export default Routes