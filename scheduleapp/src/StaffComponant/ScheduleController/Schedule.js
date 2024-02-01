import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Input } from "reactstrap";
import staff_api from "../ScheduleAPIS/StaffAPI";
const Schedule=()=>{


// *************************** Staff Records ****************************
const [staff, setStaffList] = useState([]);

  useEffect(() => {
    document.title = "Schedule page 📅📅📅";
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


    return(<div className="container">
  <div className="row">
    <div className="col-8"></div>
    <div className="col-4">
         <Input type="date" className="my-3 me-5 "></Input>
    </div>
  </div>
<table class="table table-striped table-hover borderd m-2 text-center">
  <thead>
    <tr className="bg-dark">
      <th scope="col">Staff Name</th>
      <th scope="col"> 8.00-10.00</th>
      <th scope="col">10.00-12.00</th>
      <th scope="col">12.00-1.00</th>
      <th scope="col">1.00-2.00</th>
      <th scope="col">2.00-4.00</th>
      <th scope="col">4.00-6.00</th>
    </tr>
  </thead>
  <tbody>
  
    {Array.isArray(staff) &&
            staff.map((course) => (
              <tr>
      <th scope="col">{course.staffName}</th>
      <td><select class="form-select form-select-sm" aria-label="Small select example">
<option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></td>

      </tr>
      ))}
    
      
  </tbody>
</table>

<div class="card">
 
  <div class="card-body text-center">
    <Button  class="btn btn-primary">Go somewhere</Button>
  </div>
</div>
    </div>);
}

export default Schedule;