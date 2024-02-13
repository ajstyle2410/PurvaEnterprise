import { Link } from "react-router-dom";
import "../CSS/AdminMenuBar.css";

import AddStaff from "../Staff/AddStaff";
import { Button, List, NavItem } from "reactstrap";
import StaffList from "../Staff/StaffList";
import ClassRoomList from "../Classroom/ClassRoomList";
import AddSubject from "../Subjects/AddSubject";
import SubjectList from "../Subjects/SubjectList";
const MenuBar = () => {
  return (
    <>
      <>
        <header>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-primary"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <Link
                   to={'/maindashboard'}
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i className="fa fa-tachometer fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </Link>
                <hr />
                <Link
                  to={"/"}
                  className="list-group-item list-group-item-action py-2  ripple"
                  aria-current="true"
                >
                  <i className="fa fa-calendar fa-fw me-3"></i>
                  <span>Schedule</span>
                </Link>

                <div class="btn-group dropend mt-3">

                  <Button
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    <i class="fa fa-user-o me-1 fa-1x" aria-hidden="true"></i>   FACULTY RECORDS

                 
                  </Button>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <Link
                        className="list-group-item list-group-action"
                        to="/stafflist"
                        element={StaffList}
                      >
                        Faculty List
                      </Link>
                    </li>
                    <li>
                      <li>
                        <Link
                          className="list-group-item list-group-action"
                          to="/addstaff"
                          element={AddStaff}
                        >
                          <i class="fa fa-user" aria-hidden="true">Add Faculty</i>

                          
                        </Link>
                      </li>
                    </li>{" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="btn-group dropend">
                  <Button
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  ><i class="fa fa-regular fa-building-columns"></i>

                    ClASSROOM
                  </Button>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <Link
                        className="list-group-item list-group-action"
                        to="classroomlist"
                        element={<ClassRoomList />}
                      >
                        classroom list
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="list-group-item list-group-action"
                        to="/addclassroom"
                        element={<AddStaff />}
                      >
                        Add Classroom{" "}
                      </Link>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />
                <div class="btn-group dropend text-center">
                  <Button
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
<i class=" fa   fa-light fa-book"></i>                    SUBJECT
                  </Button>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <Link
                        className="list-group-item list-group-action"
                        to="subjectlist"
                        element={<SubjectList />}
                      >
                        Subject list
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="list-group-item list-group-action"
                        to="/addsubject"
                        element={<AddSubject />}
                      >
                        Add Subject{" "}
                      </Link>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <hr />

                <div class="btn-group dropend">
                  <Button
                    type="button"
                    class="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Dropdown
                  </Button>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <a class="dropdown-item active" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: "58px" }}>
          <div className="container pt-4"></div>
        </main>
      </>
    </>
  );
};

export default MenuBar;
