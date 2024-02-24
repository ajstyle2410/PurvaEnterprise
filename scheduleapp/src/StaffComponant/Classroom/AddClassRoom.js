import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Input } from "reactstrap";
import classroom_api from "../ScheduleAPIS/ClassRoom_api";
import { ToastContainer, toast } from "react-toastify";
const AddClassRoom = () => {
  useEffect = (() => {
    document.title = "Add Classrooms 😉😉";
  },[]);

  const [addclassroom, SetAddClassRooms] = useState([]);

   // ========= class handler ============ 
  const ClassRoomHandler = (e) => {
    const { name, value } = e.target;
    SetAddClassRooms((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const AddClassDetails=(e)=>{
    AddClassRoomRecords(addclassroom);
        console.log(addclassroom);
            e.preventDefault();
  }

  const AddClassRoomRecords = (data) => {
    axios.post(`${classroom_api}/addclassroom`, data).then(
      (response) => {
        toast.success("data added...");
      },
      (error) => {
        toast.error("data not added...");
      }
    );
  };

  return (
    <div className="container">
      <ToastContainer/>
      <div class="card mt-5">
        <h3 class="card-header text-center"> ClASSROOM </h3>
      </div>
      <Form className="d-grid mt-2"  onSubmit={AddClassDetails}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            ClassRoom Number
          </label>
          <Input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={addclassroom.classRoomNo}
            name="classRoomNo"
            onChange={ClassRoomHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Class Floor
          </label>
          <Input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={addclassroom.classFloor}
            name="classFloor"
            onChange={ClassRoomHandler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Class Limit
          </label>
          <Input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={addclassroom.classLimit}
            name="classLimit"
            onChange={ClassRoomHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default AddClassRoom;
