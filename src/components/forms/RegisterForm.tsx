import TextInputField from '../common/TextInputField';
import TextField from '../common/TextField';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RegisteredUser} from '../../store/types';
import '../../appstyles/forms/RegisterForm.scss';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebaseutils';
import { NavLink } from 'react-router-dom';

const RegisterForm = ({...otherProps}) =>{
    const defaultFields = {
        displayName:'',
        email:'',
        password:'',
        confirmpassword:''
    }
    const [formFields,setFormFields] = useState<RegisteredUser>(defaultFields);
    const {displayName,email,password,confirmpassword} = formFields;
    const handleRegisteredUser = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
   }

   const handleSubmit = async (event) =>{
       event.preventDefault();
       if(password !== confirmpassword) {
         alert("Password & Confirm Password Doesn't Match");
         return;
       }
       try {
        const {user} = await createAuthUserWithEmailAndPassword(email,password);
        await createUserDocumentFromAuth(user,displayName);
        console.log("*******",user,displayName);
        setFormFields(defaultFields);
       } catch(error) {
         console.log('User creation encountered an error',error);
       }
   }
    return(
        <Container className='register_container'>
           <Row>
            <Col className='fields-container'xs={6}>
                  <img src='https://xrg.in/images/logo.svg' 
                  width={'100%'} 
                  height={'20%'}
                  style={{textAlign:'center'}}
                  />
                  <TextField 
                     title="don't have an account sign up here "
                     subtitle="enter you details here"
                  ></TextField>
                  <form onSubmit={handleSubmit} className='fields-container'>
                    <TextInputField
                        name='displayName'
                        value={displayName}
                        type='text'
                        placeholder='Full Name'
                        required={true}
                        onChange={handleRegisteredUser}
                    ></TextInputField>
                    <TextInputField
                        name='email'
                        type='email'
                        value={email}
                        placeholder='Email Address'
                        required={true}
                        onChange={handleRegisteredUser}
                    ></TextInputField>
                    <TextInputField
                        name='password'
                        type='password'
                        value={password}
                        required={true}
                        placeholder='Pass Word'
                        onChange={handleRegisteredUser}
                    ></TextInputField>
                    <TextInputField
                        name='confirmpassword'
                        type='password'
                        value={confirmpassword}
                        required={true}
                        placeholder='Confirm Password'
                        onChange={handleRegisteredUser}
                    ></TextInputField>
                    <span className='register_manipulation'>
                        <NavLink to='/sign-in' onClick={otherProps.handleStatus}>already have an account ?</NavLink>
                    </span>
                    <button 
                        type='submit'
                        className='button-field '
                    >
                    Sign Up</button> 
                </form>      
            </Col>
          </Row>
        </Container>
    )
}

export default RegisterForm;