import React, { useState, useEffect,useCallback } from 'react'
import { Row, Col, Image, Card, Button, Modal, Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { BlobServiceClient } from '@azure/storage-blob';

const blobSasUrl = "https://testingblobstep.blob.core.windows.net/?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2026-05-20T16:57:25Z&st=2021-05-20T08:57:25Z&spr=https&sig=cAGIfQ5LfOCP1WlUKTbxDK50yutmKJnilPgmo9BgBfA%3D";
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = "test";
const containerClient = blobServiceClient.getContainerClient(containerName);

const Profile = () => {
    const { user } = useAuth0();
    const { sub } = user;
    const userId = sub.substr(6);

    const [shopName, setShopName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [shopDescription, setShopDescription] = useState("");
    const [picture, setPicture] = useState();
    const [blobList, setBlobList] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editProfileHandler = async (e) => {
        e.preventDefault();

        try {
            const promises = [];
            for(const file of picture) {
                const blobName = new Date().getTime() + file.name;
                const blockBlobClient = containerClient.getBlockBlobClient(blobName);
                promises.push(blockBlobClient.uploadData(file));
                const blobUrl = "https://testingblobstep.blob.core.windows.net/"+containerName+"/"+blobName;
                setBlobList( arr => [...arr,blobUrl]);
            }
            await Promise.all(promises).then((values) => {
                alert("done.")
                // console.log(values)
                // sendData();
              });
        }
        catch (error) {
            alert(error.message);
        }

        // const data = new FormData();
        // data.append("file", picture);
        
        // const profile = {
        //     userId: userId,
        //     shopName: shopName,
        //     phoneNumber: phoneNumber,
        //     address: address,
        //     shopDescription: shopDescription,
        //     picture: blobList
        // }
        // console.log(profile)
        // await axios
        //     .post(`http://localhost:3002/ShopSettings/shopprofile`, profile)
        //     .then(response => {
        //         console.log(response);
        //         window.alert("done");
        //     }).catch((err) => {
        //         console.log(err);
        //     });
    };

    const sendData = useCallback(() => {
        const profile = {
            userId: userId,
            shopName: shopName,
            phoneNumber: phoneNumber,
            address: address,
            shopDescription: shopDescription,
            picture: blobList
        }
        console.log(profile)
        axios
            .post(`http://localhost:3002/ShopSettings/shopprofile`, profile)
            .then(response => {
                console.log(response);
                alert("done1");
            }).catch((err) => {
                console.log(err);
            });
    },[address,userId,shopDescription,shopName,phoneNumber,blobList]);


    useEffect(() => {
        // action on update of movies
        if(blobList.length>0) {
            sendData();
            setBlobList([]);
        }
    }, [blobList,sendData]);

    return (
        <div className="main">
            <Row className="mx-3">
                <Col xs={6} md={4} xl={2} className="pb-3">
                    <Image src={blobList[0]} width="110" height="110" rounded />
                </Col>
                <Col xs={8} md={8} xl={5}>
                    <h3>Shop Profile</h3>
                    <p>View your shop status and update your profile</p>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col md={6} className="pb-3">
                    <Card>
                        <Card.Body>Shop Name</Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>Phone Number</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={8} className="pb-3">
                    <Card>
                        <Card.Body>Address</Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="pb-3">
                    <Card>
                        <Card.Body>Date</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card>
                <Card.Body>Shop Description</Card.Body>
            </Card>
            <div>
                <Button variant="primary" onClick={handleShow} size="sm" className="mt-3 float-right">
                    Edit
                    </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={editProfileHandler}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.File id="exampleFormControlFile1" onChange={e => setPicture(e.target.files)} multiple />
                                <Form.Text className="text-muted">
                                    File must be less than 4 MB.
                                    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicShopName" className="mb-3">
                                <Form.Label>Shop Name</Form.Label>
                                <Form.Control type="text" value={shopName} onChange={e => setShopName(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhoneNumber" className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicAddress" className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={e => setAddress(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlShopDescription">
                                <Form.Label>Shop Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={shopDescription} onChange={e => setShopDescription(e.target.value)} />
                            </Form.Group>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </div>
    )
}

export default Profile
