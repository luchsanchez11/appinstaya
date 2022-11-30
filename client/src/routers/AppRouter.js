import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import OrderManagement from "../pages/OrderManagement";
import CreateOrder from "../pages/CreateOrder";
import UpdateOrder from "../pages/UpdateOrder";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PriveteRoute";


function AppRouter() {
  return (
    <div>
      <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<LoginPage/>} />
                <Route exact path="/register" element={<RegisterPage/>} />
                <Route exact path="/dashboard" element={<PrivateRoute><OrderManagement/></PrivateRoute>} />
                <Route exact path="/create-order" element={<PrivateRoute><CreateOrder/></PrivateRoute>} />
                <Route exact path="/update-order" element={<PrivateRoute><UpdateOrder/></PrivateRoute>} />
                

                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default AppRouter;