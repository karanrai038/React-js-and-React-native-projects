import React from "react";
// import Pic1 from "./1.jpg";
// import Pic2 from "./2.jpg";
// import Pic3 from "./3.jpg";
import userData from "./Data/userFeedBackData";
import Carousel from "./Carousel";
import LowerNav from "./LowerNav";
import NavBar from "./Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Web from "./Web";
import AppDev from "./AppDev";
import Comp from "./Comp";
import Footer from "./Footer";
import UserFeedBack from "./UserFeedBack";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
        <div className="container">
          <Carousel />
          <LowerNav></LowerNav>
          <div>
            <Routes>
              <Route exact path="/" element={<Web />} />
              <Route path="/web" element={<Web />} />
              <Route path="/AppDev" element={<AppDev />} />
              <Route path="/Comp" element={<Comp />} />
            </Routes>
            <hr />
          </div>
          <h1 className="h3 text-center">
            Look what other's have to say about us
          </h1>
          <div className="row">
            {userData.map((data) => {
              return (
                <UserFeedBack
                  title={data.title}
                  subtitle={data.subtitle}
                  text={data.text}
                  footerData={data.footerData}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
