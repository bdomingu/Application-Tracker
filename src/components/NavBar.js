import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';

function AlignmentExample() {
  return (
    
      <Nav className="nav" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">My Job List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Account</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default AlignmentExample;
