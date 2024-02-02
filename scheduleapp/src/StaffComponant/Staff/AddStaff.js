import React, { useEffect, useState } from "react";
import { Container, Form, Input } from "reactstrap";
import axios from "axios";
import StaffAPI from "../ScheduleAPIS/StaffAPI";
import { ToastContainer, toast } from "react-toastify";


const AddStaff = () => {
  useEffect(() => {
    document.title = "Add Staff 🤦‍♀️🤦‍♀️🤦‍♀️";
  }, []);

  const [addstaff, SetAddStaff] = useState({
    staffName: "",
    staffEmail: "",
    staffRole: "",
    staffContact: "",
    staffPassword: "",
    staffReapetPassword: "",
  });

  const addStaffDetails = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(addstaff);
    addStaffRecords(addstaff);
  };

  const addStaffRecords = (data) => {
    axios.post(`${StaffAPI}/addStaffRecords`, data)
      .then((response) => {
        toast.success("Data added successfully...");
      })
      .catch((error) => {
        toast.error("Failed to add records to the server");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetAddStaff((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      {/* ... Your existing JSX code ... */}
      <Form onSubmit={addStaffDetails}>
        <ToastContainer/>
        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffName}
            onChange={handleInputChange}
            name="staffName"
          />
          <label className="form-label" htmlFor="form1Example1">
            Full Name
          </label>
        </div>

        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffEmail}
            onChange={handleInputChange}
            name="staffEmail"
          />
          <label className="form-label" htmlFor="form1Example1">
            Enter Email 
          </label>
        </div>

        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffContact}
            onChange={handleInputChange}
            name="staffContact"
          />
          <label className="form-label" htmlFor="form1Example1">
            Enter Contact 
          </label>
        </div>
        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffRole}
            onChange={handleInputChange}
            name="staffRole"
          />
          <label className="form-label" htmlFor="form1Example1">
            Enter Role 
          </label>
        </div>

        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffPassword}
            onChange={handleInputChange}
            name="staffPassword"
          />
          <label className="form-label" htmlFor="form1Example1">
            Enter Password 
          </label>
        </div>
        <div data-bs-input-init className="form-outline mb-2">
          <Input
            type="text"
            id="form1Example1"
            className="form-control"
            value={addstaff.staffReapetPassword}
            onChange={handleInputChange}
            name="staffReapetPassword"
          />
          <label className="form-label" htmlFor="form1Example1">
            Enter Repeat Password 
          </label>
        </div>
        <div data-bs-input-init className="form-outline mb-4 text-center">
          <button
            data-bs-ripple-init
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign in
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddStaff;
