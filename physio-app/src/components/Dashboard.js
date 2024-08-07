import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Applications from './Applications'
import IotEditor from './IotEditor'
import Devices from './Devices'
import Team from './Team'
import Activity from './Activity'
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    <Topbar />
      <Row>
        <Col md={2}>
          <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
        </Col>
        <Col md={10} className="p-4 flex-grow-1">
          <Routes>
        <Route path="/" element={<Applications />} />
        <Route path="/iot_instances" element={<IotEditor />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/team" element={<Team />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
