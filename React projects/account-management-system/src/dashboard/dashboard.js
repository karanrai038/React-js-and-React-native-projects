import React from "react";
import Navbar from "../navbar/navbar";
// https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_960_720.jpg
function Dashboard() {
  return (
    <>
      {/* code for navbar */}
      <Navbar />
      <div className="container mt-3 bg-light">
        <div className="row align-items-center">
          <div className="col-6 mt-5">
            <form>
              <div className="form-group mt-5">
                <label htmlFor="user-name">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="user-name"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-check mt-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-outline-success m-1">
                  Login
                </button>
                <button type="reset" className="btn btn-outline-danger m-1">
                  Reset
                </button>
              </div>
            </form>
            <hr />
            <h4>Want to join us??</h4>
            <button className="btn btn-primary">Create a new account</button>
          </div>
          <div className="col-6">
            <img
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_960_720.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
