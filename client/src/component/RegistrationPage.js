import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { countries, states, cities } from "./data";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const history = useNavigate();

  useEffect(() => {
    if (dob) {
      const currentDate = new Date();
      const birthDate = new Date(dob);
      const diffInMilliseconds = currentDate - birthDate;
      const ageDate = new Date(diffInMilliseconds);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(calculatedAge);
    }
  }, [dob]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setState("");
    setCity("");
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setCity("");
  };
  const registrationData = {
    firstName,
    lastName,
    email,
    country,
    state,
    city,
    gender,
    dob,
    age,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (age <= 14) {
      alert("Enter Valid Age");
    } else if (age > 14) {
      await axios
        .post("http://localhost:9080/registration", {
          firstName,
          lastName,
          email,
          country,
          state,
          city,
          gender,
          dob,
          age,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already Register");
          } else if (res.data === "notexist") {
            alert("Registration Successfull");
            history("/display", { state: registrationData });
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
            pattern="[A-Za-z]+"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter your last name"
            pattern="[A-Za-z]+"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            className="form-control"
            id="country"
            value={country}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            className="form-control"
            id="state"
            value={state}
            onChange={handleStateChange}
            required
            disabled={!country}
          >
            <option value="">Select State</option>
            {states[country]?.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            disabled={!state}
          >
            <option value="">Select City</option>
            {state &&
              cities[state].map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={age}
            readOnly
          />
        </div>

        <div className="py-2" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary text-center">
            Save
          </button>
        </div>
      </form>
      <div style={{ right: "0px" }}>
        <Link to="/showdata" className="btn btn-success ">
          Show All Data
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
