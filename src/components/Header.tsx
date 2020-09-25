import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header() {
	return (
			<Navbar expand="lg">
				<Navbar.Brand href="#home">TEMPO</Navbar.Brand>
				<Nav variant="tabs" defaultActiveKey="/classroom">
					<Nav.Item>
						<Nav.Link href="/browse">Browse Courses</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/current">Current Courses</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/classroom">Classroom</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
	)
}

export default Header;
