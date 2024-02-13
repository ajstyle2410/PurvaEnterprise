import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, Input } from "reactstrap";
import staff_api from "../ScheduleAPIS/StaffAPI";
import subject_api from "../ScheduleAPIS/SubjectApi";
import schedule_api from "../ScheduleAPIS/ScheduleApi";

const Schedule = () => {
  // ************************* useStates******************************************
  const [staff, setStaffList] = useState([]);
  const [subject, SetSubject] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    document.title = "Schedule page 📅📅📅";
    showStaffList();
    subjectList();
  }, []);

  /********************** Staff Records ***************************** */
  const showStaffList = () => {
    axios.get(`${staff_api}/staffrecords`).then(
      (response) => {
        setStaffList(response.data);
        toast.success("Staff list fetched from the server");
      },
      (error) => {
        toast.error("Failed to fetch records from the server");
      }
    );
  };
  /*************************Subject Records ***************************************/

  const subjectList = () => {
    axios.get(`${subject_api}/subjectlist`).then(
      (response) => {
        SetSubject(response.data);
        toast.success("Subject fetched....");
      },
      (error) => {
        toast.error("Subject not fetched");
      }
    );
  };
  /*************************Schedule Records *********************** */

  const scheduleHandler = (e) => {
    const { name, value } = e.target;

   
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [name]: value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(schedule);
    await axios.post(`${schedule_api}/schedulerecords`, schedule)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        clearRecords();

            })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

    const clearRecords=()=>
    {
      setSchedule([]);
      alert("data cleard");
       console.log(schedule)
    }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <Input
              type="date"
              className="my-3 me-5 "
              name="todayDate"
              value={schedule.todayDate}
              onChange={scheduleHandler}
            ></Input>
          </div>
        </div>
        <table className="table table-striped-columns table-hover borderd m-2 text-center">
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
            {
            
            Array.isArray(staff) &&
              staff.map((record) => (
                <tr key={record.staffId}>
                <th scope="col">
                      <Input
                        name="staffName"
                        value={record.staffName}
                        onClick={scheduleHandler}
                        disabled
                      />
                      <Input
                        name="staffId"
                        value={record.staffId}
                        type="text"
                        hidden
                        onClick={(e) => scheduleHandler(e, record.staffId)}
                        id="staffId"
                      />
                    </th>
                    <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="firstSchedule"
                      value={record.firstSchedule}
                    >
                      <option>Select</option>
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      name="secondSchedule"
                      onChange={(e) => scheduleHandler(e, record.staffId)}                     
                      value={record.secondSchedule}
                    >
                                            <option>Select</option>

                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="thridSchedule"
                      value={record.thridSchedule}
                    >
                                            <option>Select</option>

                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="fourthSchedule"
                      value={record.fourthSchedule}
                    >
                      <option>Select</option>

                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >

                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="fifthSchedule"
                      value={record.fifthSchedule}
                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="fifthSchedule"
                      value={record.fifthSchedule}
                    >
                                            <option>Select</option>

                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onClick={(e) => scheduleHandler(e, record.staffId)}
                      name="sixthSchedule"
                      value={record.sixthSchedule}
                    >
                                            <option>Select</option>

                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            key={data.subjectName}
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <Button type="submit" id="sub" className="btn btn-primary">
                      <span>   {record.staffId} Send </span>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="card">
          <div className="card-body text-center">
            <Button type="submit" id="sub" className="btn btn-primary">
              Go somewhere
            </Button>
          </div>
        </div>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Schedule;