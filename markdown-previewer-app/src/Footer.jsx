import React from "react"
import { Button, Container, Form, Col, Row} from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = ({credits}) =>{
    return(
        <>
            <footer className=" text-light mt-auto p-5 vw-100" style={{backgroundColor:"var(--black)"}}>
                <div className="me-3">
                    <Container data-bs-theme="dark">
                        <Row className="justify-content-center">
                            <Col xs={6} className=" w-auto">
                            <p className=" fw-light"><span className="fw-bold">Stay informed, subscribe</span><br/>Receive updates, news, and exclusive offers</p>
                            </Col>
                            <Col xs={6} className=" w-auto mb-md-0 mb-5">
                                <Form className="d-flex flex-row justify-content-end">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label hidden>Email address</Form.Label>
                                        <Form.Control className="input-control rounded-0 bg-transparent" style={{border:"solid 2px var(--folly)"}} type="emial" name="email" placeholder="Enter email adress" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Provide correct Email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button type="button" className="button-one rounded-0 fw-bold ms-3 input-focus">
                                        Join
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row className=" border-top">
                            <Col className="text-center pt-3">
                                {credits.link && credits.company?(
                                    <Link to={credits.link} target="_blank" rel="noopener noreferrer" className="link-underline-opacity-0 link-light link-opacity-50">{credits.company}</Link>
                                ):(
                                    <p className=" opacity-50 mb-0">® Company, Markdown Previewer 2030.</p>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer