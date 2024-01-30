import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import staff_api from "../STAFFAPIS/StaffAPI";
import "react-toastify/dist/ReactToastify.css";

const StaffList = () => {
  const [staff, setStaffList] = useState([]);

  useEffect(() => {
    document.title = "Add Staff😜😜";
    showStaffList();
  }, []); // Empty dependency array to run the effect only once after the initial render


  //  ********************** show the Staff Records ****************************
  const showStaffList = () => {
    axios.get(`${staff_api}/staffrecords`).then(
      (response) => {
        setStaffList(response.data); // Assuming response.data is the array
        toast.success("Data fetched from the server");
      },
      (error) => {
        toast.error("Failed to fetch records from the server");
      }
    );
  };

  // ********************** delete the Staff Records *****************************

  const deleteStaffRecords=(staffid)=>{
    alert("hii");
      console.log("====>"+staffid); 
    axios.delete(`${staff_api}/deletestaff/${staffid}`).then(
        (response)=>{
            toast.success("data delete successfully....");
            showStaffList();
        },(error)=>{
              toast.error("something wrong...");
        }
    )
  }

  return (
    <div className="container-fluid">
      <ToastContainer />

      <div class="card">
        <div class="card-header text-center">
          <h1>STAFF RECORDS</h1>
        </div>
      </div>
      <table className="table table-striped table-bordered  table-hover bordered mt-4">
        <thead>
          <tr>
            <th>Staff Id</th>
            <th>Staff Name</th>
            <th>STAFF CONTACT</th>
            <th>STAFF EMAIL</th>
            <th>STAFF ROLE</th>
            <th>PASSWORD</th>
            <th>REAPEAT PASSWORD</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(staff) &&
            staff.map((course) => (
              <tr>
                <td>{course.staffId}</td>
                <td>{course.staffName}</td>
                <td>{course.staffContact}</td>
                <td>{course.staffEmail}</td>
                <td>{course.staffRole}</td>
                <td>{course.staffPassword}</td>
                <td>{course.staffReapetPassword}</td>
                <td className="d-flex">
                 <button className="btn"  type="submit" > <i
                    class="fa fa-pencil-square-o fa-2x  text-success me-1"
                    aria-hidden="true"
                   
                  ></i></button>
                  <button className="btn" onClick={()=>deleteStaffRecords(course.staffId)}>
                  <i
                    class="fa fa-trash fa-2x text-danger"
                    aria-hidden="true"
                  ></i>
                  </button>
                
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
