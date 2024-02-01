import axios from "axios";
import { useEffect, useState } from "react";
import subject_api from "../ScheduleAPIS/SubjectApi";
import { ToastContainer, toast } from "react-toastify";
const SubjectList = () => {
  useEffect(() => {
    document.title = " subject list 📑📑";
    subjectList();
  },[]);

  const [subject, SetSubject] = useState([]);

//  ***************** Subject List ********************
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

  // ***************** Delete Subject *****************

  const deleteSubjectfRecords = (subjectId) => {
    axios.delete(`${subject_api}/deletesubject/${subjectId}`).then(
      (response) => {
        toast.success("subject are deleted.....");
        subjectList();
      },
      (error) => {
        toast.error("something wrong...");
      }
    );
  };



  return (
    <div className="container mt-4 ms-3">
        <div class="card">
  <div class="card-body text-center">
     <h3>SUBJECT LIST </h3>
  </div>
</div>
        <ToastContainer/>
      <table class="table table-striped-columns">
        <thead>
          <th>Subject Id</th>
          <th>Subect Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {Array.isArray(subject) &&
            subject.map((data) => (
              <tr>
                <td scope="col">{data.subjectId}</td>
                <td scope="col">{data.subjectName}</td>
                
                <td scope="col">
                  <button className="btn" type="submit">
                    {" "}
                    <i
                      class="fa fa-pencil-square-o fa-2x  text-success me-1"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteSubjectfRecords(data.subjectId)}
                  >
                    <i
                      class="fa fa-trash fa-2x text-danger"
                      aria-hidden="true"
                    ></i>
                  </button>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default SubjectList;
