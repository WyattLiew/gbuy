import React from 'react'
import { NavLink } from "react-router-dom";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const SellerCentreBody = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center p-3 m-3">
                    <Col md="auto" className="mb-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="m-auto p-4" style={{ width: '10rem'  }} src="shopsettings.png" />
                            <Card.Body>
                                <Card.Title>Shop Settings</Card.Title>
                                <Card.Text>
                                   View your shop status and update your profile.
                            </Card.Text>
                                <NavLink
                                    to="/ShopProfile"
                                >
                                   <Button variant="primary">Access</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto" className="mb-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="m-auto p-4" style={{ width: '10rem'  }} src="shopsettings.png" />
                            <Card.Body>
                                <Card.Title>Shop Settings</Card.Title>
                                <Card.Text>
                                   View your shop status and update your profile.
                            </Card.Text>
                                <Button variant="primary">Access now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto" className="mb-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" className="m-auto p-4" style={{ width: '10rem'  }} src="shopsettings.png" />
                            <Card.Body>
                                <Card.Title>Shop Settings</Card.Title>
                                <Card.Text>
                                   View your shop status and update your profile.
                            </Card.Text>
                                <Button variant="primary">Access</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default SellerCentreBody
