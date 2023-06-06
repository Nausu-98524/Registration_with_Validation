import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShowData = () => {
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <div className="container py-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Field</th>
              <th scope="col">User Data</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>First Name</td>
              <td>{formData.firstName}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Last Name</td>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>E-mail</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Country</td>
              <td>{formData.country}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>State</td>
              <td>{formData.state}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>City</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Gender</td>
              <td>{formData.gender}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Age</td>
              <td>{formData.age}</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Date of Birth</td>
              <td>{formData.dob}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <button onClick={handleClick} className="btn btn-danger text-center">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
