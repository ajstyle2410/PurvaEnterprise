import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, Input } from "reactstrap";
import staff_api from "../ScheduleAPIS/StaffAPI";
import subject_api from "../ScheduleAPIS/SubjectApi";
import schedule_api from "../ScheduleAPIS/ScheduleApi";

const Schedule = () => {
  const [staff, setStaffList] = useState([]);
  const [subject, SetSubject] = useState([]);
  const [schedule, SetSchedule] = useState([]);

  useEffect(() => {
    document.title = "Schedule page 📅📅📅";
    showStaffList();
    subjectList();
  }, []);

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

  const scheduleRecords = async (e) => {
    e.preventDefault();
    console.warn(schedule);
 schedularDetails(schedule);
  };

  const schedularDetails = (data) => {
    axios.post(`${schedule_api}/schedulerecords`, data).then(
      (response) => {
        toast.success("Added Schedule Records");
      },
      (error) => {
        toast.error("Something went wrong...");
      }
    );
  };

  const scheduleHandler = (e, staffId) => {
    const { name, value } = e.target;
    SetSchedule((prevData) => ({
      ...prevData,
      [staffId]: {
        ...prevData[staffId],
        [name]: value,
      },
    }));
  };
  

  return (
    <div className="container">
      <ToastContainer />
      <Form onSubmit={scheduleRecords}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <Input
              type="date"
              id="todayDate"
              className="my-3 me-5 "
              name="TodayDate"
              value={schedule.todayDate}
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
            {Array.isArray(staff) &&
              staff.map((course) => (
                <tr key={course.staffId}>
                  <th scope="col">
                    <Input
                      name="staffName"
                      value={course.staffName}
                      onLoad={scheduleHandler}
                      disabled
                      id="staffName"
                    />
                    <Input
                      name="staffId"
                      value={course.staffId}
                      onLoad={scheduleHandler}
                      type="hidden"
                      id="staffId"
                    />
                  </th>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onLoad={scheduleHandler}
                      name="subjectName"
                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
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
                      onLoad={scheduleHandler}
                      id="subjectName"
                      name="subjectName"
                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            value={data.subjectName}
                           
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>{" "}
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onLoad={scheduleHandler}
                      name="subjectName"

                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            value={data.subjectName}
                          
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>{" "}
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      name="subjectName"
                      onLoad={scheduleHandler}
                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            value={data.subjectName}
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>{" "}
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onLoad={scheduleHandler}
                      name="subjectName"

                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                            value={data.subjectName}
                         
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>{" "}
                  <td>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={scheduleHandler}
                      name="subjectName"
                    >
                      {Array.isArray(subject) &&
                        subject.map((data) => (
                          <option
                          >
                            {data.subjectName}
                          </option>
                        ))}
                    </select>
                  </td>
                  <td>
                    <Button type="submit" id="sub" className="btn btn-primary">
                      Go somewhere
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
      </Form>
    </div>
  );
};

export default Schedule;
