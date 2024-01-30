import React from 'react';
import { Col, Row } from 'reactstrap';
import AddStaff from '../Staff/AddStaff';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './ManuBar';
import StaffList from '../Staff/StaffList';

const AdminPanel = () => {
  return (
    <Row>
      <Col md={2}>
        <MenuBar />
      </Col>
      <Col md={10}>
        <Routes>
          <Route path="/addstaff" element={<AddStaff />} />
          <Route path='/stafflist' element={<StaffList/>}/>
        </Routes>
      </Col>
    </Row>
  );
};

export default AdminPanel;
