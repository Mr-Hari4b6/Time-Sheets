import { Col, Container, Row } from 'react-bootstrap';
import TextField from '../common/TextField';
import TextInputField from '../common/TextInputField';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ForgotPassword } from '../../store/types';
import '../../appstyles/forms/ForgotPasswordForm.scss';

function ForgotPasswordForm({...otherProps}){
    const defaultFields ={
        newPassword:'',
        confirmPassword:''
     }
    const [resetPassword,setResetPassword] = useState<ForgotPassword>(defaultFields);  
    const {newPassword,confirmPassword} = resetPassword;
    const handleSubmit =() =>{
        return ;
    }
    const handleChange = (event) => {
        const {name,value} = event.target;
        setResetPassword({...resetPassword,[name]:value});
    }
    console.log(resetPassword);
    return(
    <div className='forgot-password-container'>
        <Container >
           <Row className='login_container' >
           <Col>
                <TextField 
                    title="Welcome To XRG TimeSheets" 
                    subtitle="Here comes the work known"  
                /> 
            </Col> 
            <Col xs={6}  className='fields-container'>
                <img src='https://xrg.in/images/logo.svg' width={'100%'} height={'20%'} style={{textAlign:'center',marginBottom:20}}></img>
                <TextField 
                  title="Re-set your password here"
                  subtitle={''}
                ></TextField>
                <form onSubmit={handleSubmit} className='fields-container'> 
                  <TextInputField
                      name='newPassword'
                      value={newPassword}
                      placeholder='New Password'
                      type='password'
                      onChange={handleChange}
                  ></TextInputField>
                  <TextInputField
                      name='confirmPassword'
                      value={confirmPassword}
                      placeholder='Confirm Password'
                      type='password'
                      onChange={handleChange}
                  ></TextInputField>
                  <span className='login_manipulation'>
                     <NavLink to={'/sign-up'} onClick={otherProps.handleStatus}> don't have account ?</NavLink>
                     <NavLink to={'/sign-in'}> already have an account ?</NavLink>
                  </span>
                  <button type='submit'
                    className='button-field'
                  >Update Password</button>
                </form>       
            </Col>
          </Row>
        </Container>
    </div>
    )
}

export default ForgotPasswordForm;