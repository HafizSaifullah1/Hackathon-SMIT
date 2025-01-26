import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage  from "../component/LadingPage";
import  LoanCalculator  from "../component/LoanCalculator";
import Login from '../screen/Login'
import Signup from '../screen/Signup'
const AppRoutes = () => {
    return (
        <Routes>
            {/* Main layout wraps all routes */}
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/landingpage' element={<LandingPage />} />
            <Route path='/loancalculation' element={<LoanCalculator />} />
        </Routes>
    );
};

export default AppRoutes;
