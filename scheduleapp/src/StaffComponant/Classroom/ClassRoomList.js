import { useEffect, useState } from "react";
import axios from "axios";
import classroom_api from '../ScheduleAPIS/ClassRoom_api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassRoomList = () => {
  const [classroom, setClassRoom] = useState([]);

  useEffect(() => {
    classRoomList();
    document.title = "Classroom list";
  }, []); // Add an empty dependency array to run the effect only once on mount

  // ************************* ClassRoom List *************************************
  const classRoomList = () => {
    axios.get(`${classroom_api}/classroomlist`).then(
      (response) => {
        setClassRoom(response.data); // Use response.data to get the actual data
        console.log(response.data);
        toast.success("Classroom fetched...");
      },
      (error) => {
        toast.error("Classroom not fetched....");
      }
    );
  };

  //********************* Delete ClassRoom*********************** */

  const deleteClassRoomRecords = (deleteClassRoomId) => {
    axios.delete(`${classroom_api}/deleteclass/${deleteClassRoomId}`).then(
      (response) => {
        toast.success("ClassRoom Deleted.....");
        classRoomList();
      },
      (error) => {
        toast.error("Classroom not Deleted.....");
      }
    );
  };
  

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">CLASSROOM RECORDS</h2>
        </div>
      </div>
      <table className="table table table-striped-columns bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Class ID</th>
            <th scope="col">Class Room Number</th>
            <th scope="col">Class Floor</th>
            <th scope="col">Class Limit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(classroom) &&
            classroom.map((classs) => (
              <tr key={classs.classId}>
                <th scope="row">{classs.classId}</th>
                <td>{classs.classRoomNo}</td>
                <td>{classs.classFloor}</td>
                <td>{classs.classLimit}</td>
                <td>
                <button className="btn"  type="submit" > <i
                    class="fa fa-pencil-square-o fa-2x  text-success me-1"
                    aria-hidden="true"
                   
                  ></i></button>
                  <button className="btn" onClick={()=>deleteClassRoomRecords(classs.classId)}>
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

export default ClassRoomList;
