import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import NewCustomer from "./new-customer/newCustomer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewCustomer />} />
        {/* <Route path="/deposit" element={<NewCustomer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
