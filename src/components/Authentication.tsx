import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import { useState } from "react";
import '../appstyles/components/Authentication.scss';
import TextField from "./common/TextField";

export default function Authentication () {
    const [status,setStatus] = useState(true);
    const handleStatus = () =>{
        setStatus(!status);
    }
    return(
        <div className="auth_container">
            <Container>
                <Row>
                   <Col>
                     <TextField 
                       title="Welcome To XRG TimeSheets" 
                       subtitle="Here comes the work known"  
                     /> 
                  </Col>
                  <Col>
                      { status ? <LoginForm handleStatus={handleStatus}></LoginForm> : <RegisterForm handleStatus={handleStatus}></RegisterForm> }
                   </Col>     
                </Row>
            </Container>
        </div>
    )
}