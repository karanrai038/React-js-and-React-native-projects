import React from "react";
import Navbar from "../navbar/navbar";

function NewCustomer() {
  return (
    <>
      <Navbar />
      <br />
      {/* form to register user */}
      <div className="container bg-light">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="fname">First Name</label>
              <input
                type="text"
                class="form-control"
                id="fname"
                placeholder="Enter your first name....."
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lname">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lname"
                placeholder="Enter your last name....."
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="age">Age </label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Enter your age....."
              />
            </div>
          </div>

          <div class="form-group col-md-3">
            <label for="aadhaar">Aadhaar Number</label>
            <input
              type="number"
              class="form-control"
              id="aadhaar"
              placeholder="Enter 12 digit aadhaar"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Uttar-Pradesh</option>
                <option>Delhi</option>
                <option>Rajasthan</option>
                <option>Bihar</option>
                <option>Madhya-Pradesh</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="number" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default NewCustomer;
