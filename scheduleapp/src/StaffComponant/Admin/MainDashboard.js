import "../Admin/MainDashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import staff_api from "../ScheduleAPIS/StaffAPI";
import subject_api from "../ScheduleAPIS/SubjectApi";
import classroom_api from '../ScheduleAPIS/ClassRoom_api';

const MainDashboard = () => {
  const [staff, setStaffList] = useState([]);
  const [subject, SetSubject] = useState([]);
  const [classroom, setClassRoom] = useState([]);

  useEffect(() => {
    document.title = "Schedule page 📅📅📅";
    showStaffList();
    subjectList();
    classRoomList();
  }, []);

  const showStaffList = () => {
    axios.get(`${staff_api}/staffrecords`).then(
      (response) => {
        setStaffList(response.data); // Assuming response.data is the array
        toast.success("Staff List feched....");
      },
      (error) => {
        toast.error("Failed to fetch records from the server");
      }
    );
  };

  const subjectList = () => {
    axios.get(`${subject_api}/subjectlist`).then(
      (response) => {
        console.log(response.data);
        SetSubject(response.data);
        toast.success("subject fechted....");
      },
      (error) => {
        toast.error("subject not feached");
      }
    );
  };

  //********************ClassRoom List***********************/
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
  return (
    <div className="container">
        <ToastContainer/>
      <div className="StaffRecords">
        <div class="card mt-3">
          <div class="card-header text-center "><h5>Staff Records</h5></div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
          {Array.isArray(staff) &&
            staff.map((course) => (
              <div class="col-3">
                <div className="card">
                  <h6 className="card-header text-center">
                    {course.staffName}
                  </h6>
                  <div className="card-body">
                    <p className="card-text">
                      <span>Id :</span> :{course.staffId}
                    </p>
                    <p className="card-text">
                      <span>Contact :</span>
                      {course.staffContact}
                    </p>
                    <p className="card-text">
                      <span>Email :</span>
                      {course.staffEmail}
                    </p>
                    <p className="card-text">
                      <span>Role :</span>
                      {course.staffRole}
                    </p>
                    <p className="card-text">
                      <span>Password :</span>
                      {course.staffPassword}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="Subject">
      <div class="card mt-3">
          <div class="card-header text-center "><h5>Subject Records</h5></div>
        </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">

      {Array.isArray(subject) &&
            subject.map((data) => (
                <div class="col">

                <div class="card">
                <div class="card-body d-grid gap-3">

                  <span class="card-title"><span>Subject Id :</span>{data.subjectId}</span> 
                  <span class="card-title"><span>Subject Name :</span>{data.subjectName}</span>
              </div>

                </div>
              </div>
                ))}
                </div>
   
      </div>
      <div className="ClassRooms">
      <div class="card mt-3">
          <div class="card-header text-center "><h5>ClassRoom Records</h5></div>
        </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-1">
      {Array.isArray(classroom) &&
            classroom.map((classs) => (
                <div class="col">

                <div class="card">
                <div class="card-body d-grid gap-3">
                <span class="card-title"><span> ClassRoom Id :</span>{classs.classId}</span>
                <span class="card-title"><span>ClassRoom Number :</span>{classs.classRoomNo}</span>
                <span class="card-title"><span>ClassRoom Floor :</span>{classs.classFloor}</span>
                <span class="card-title"><span>ClassRoom Limit :</span>{classs.classLimit}</span>
                </div>
                </div>
                </div>
                ))}
</div>

      </div>
    </div>
  );
};

export default MainDashboard;
