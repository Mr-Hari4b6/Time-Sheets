
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../appstyles/forms/LoginForm.scss';
import TextInputField from '../common/TextInputField';
import TextField from '../common/TextField';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoggedInUser} from '../../store/types';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInUserWithEmailAndPassword } from '../../utils/firebase/firebaseutils';


function LoginForm({...otherProps}) {

   const defaultFields ={
      username:'',
      password:''
   }
 
   const [loggedUser,setLoggedUser] = useState<LoggedInUser>(defaultFields);
   const {username,password} = loggedUser;
   const handleChange=(event)=>{
         const {name,value} = event.target;
         setLoggedUser({...loggedUser,[name]:value});
   }
   const navigation = useNavigate();
   const handleSubmit = async (event) =>{
      event.preventDefault();
      if(!username || !password) return;
      try{
       const response= await signInUserWithEmailAndPassword(username,password);
       console.log(response);
       setLoggedUser(defaultFields);
       navigation('/timesheets');
      } catch(error){
        console.log('encountered error while loging in',error);
      }
   }
  
  return (
        <Container className='login_container'>
          <Row> 
            <Col xs={6} className='fields-container'>
                <img src='https://xrg.in/images/logo.svg' width={'100%'} height={'20%'} style={{textAlign:'center',marginBottom:20}}></img>
                <TextField 
                  title="sign in with email and password"
                  subtitle={''}
                ></TextField>
                <form onSubmit={handleSubmit} className='fields-container'> 
                  <TextInputField
                      name='username'
                      type='text'
                      value={username}
                      placeholder='Email Address'
                      onChange={handleChange}
                  ></TextInputField>
                  <TextInputField
                      name='password'
                      value={password}
                      placeholder='Pass Word'
                      type='password'
                      onChange={handleChange}
                  ></TextInputField>
                  <span className='login_manipulation'>
                     <NavLink to={'/sign-up'} onClick={otherProps.handleStatus}>don't have account ?</NavLink>
                     <NavLink to={'/forgotPassword'}>forgot password ?</NavLink>
                  </span>
                  <button type='submit'
                    className='button-field'
                  >Sign In</button>
                </form>  
                  
            </Col>
          </Row>
        </Container>
  );
}

export default LoginForm;