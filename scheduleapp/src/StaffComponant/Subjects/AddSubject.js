import axios from "axios";
import subject_api from "../ScheduleAPIS/SubjectApi";
import { ToastContainer, toast } from "react-toastify";
import { Form, Input } from "reactstrap";
import { useEffect, useState } from "react";
const AddSubject = () => {
  const [subject, SetSubject] = useState([]);

    useEffect(()=>{
        document.title="Add Subject 📑🔖";
    },[]);

  const addSubjectDetails = (e) => {
    console.log(subject);
    addSubjectRecords(subject);
    e.preventDefault();
   
  };

  const subjectHandler = (e) => {
     const {name,value}=e.target;

     SetSubject((prevData)=>({
        ...prevData, 
        [name]:value
     }))
  };

  const addSubjectRecords = (data) => {
    axios.post(`${subject_api}/addsubject`, data).then(
      (response) => {
        toast.success("add the subject successfully......");
      },
      (error) => {
        toast.error("something error....");
      }
    );
  };
  return (

    <div className="container mt-5">
        <div class="card">
  <div class="card-body">
    <h3> ADD SUBJECT</h3>
  </div>
</div>
        <ToastContainer/>
      <Form onSubmit={addSubjectDetails}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <Input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={subject.subjectName}
            onChange={subjectHandler}
            name="subjectName"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default AddSubject;
