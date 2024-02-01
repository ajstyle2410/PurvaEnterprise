import React from 'react';
import { Col, Row } from 'reactstrap';
import AddStaff from '../Staff/AddStaff';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './ManuBar';
import StaffList from '../Staff/StaffList';
import AddClassRoom from '../Classroom/AddClassRoom';
import ClassRoomList from '../Classroom/ClassRoomList';
import Schedule from '../ScheduleController/Schedule';
import AddSubject from '../Subjects/AddSubject';
import SubjectList from '../Subjects/SubjectList';

const AdminPanel = () => {
  return (
    <Row>
      <Col md={2}>
        <MenuBar />
      </Col>
      <Col md={10}>
        <Routes>
        <Route path='/' element={<Schedule/>}/>
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path='/stafflist' element={<StaffList/>}/>
          <Route path='/addclassroom' element={<AddClassRoom/>}/>
          <Route path='/classroomlist' element={<ClassRoomList/>}/>
          <Route path='/addsubject' element={<AddSubject/>}/>
          <Route path='/subjectlist' element={<SubjectList/>}/>
      
        </Routes>
      </Col>
    </Row>
  );
};

export default AdminPanel;
