import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {UserContext} from '../../../context/UserContextnew'
import jwtDecode from "jwt-decode"
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { AppLayout } from '../../layout';
import { authService } from "../../../service/auth";

export const UserPage = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const { postRegisterData } = authService;
  const { getLoggedInUser } = authService;
  // // const { handleUserLogin } = UserProvider;
  // const { handleUserLogin } = useContext(UserContext);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLaststname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const [valid, setValid] = useState([]);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem('token')
      ? jwtDecode(localStorage.getItem('token'))
      : null
  );

  const handleInputChange = (event, setState) => {
    const {
      target: { value },
    } = event;

    setState(value);
  };

const chackValidation = async (event) =>{
  setValid([]);
  const isTrue = []
  if(password === undefined || password === null || password === '') isTrue.push({'password':'Password name is required'})
  if(password !== confirmpassword) isTrue.push({'confirmpassword' : 'confirmpassword need to be equal as password'})
  if(lastname === undefined || lastname === null || lastname === '') isTrue.push({'lastname':'Last name is required'})
  if(firstname === undefined || firstname === null || firstname === '') isTrue.push({'firstname':'First name is required'})
  if(email === undefined || email === null || email === '') isTrue.push({'email':'Email name is required'})
  if(username === undefined || username === null || username === '') isTrue.push({'username':'Username name is required'})


  setValid(isTrue)
  console.log('valid je ', valid)

  if(valid.length == 0) registerSubmit(event)
};

  const registerSubmit = async event => {
    event.preventDefault();
    
    try {
      const body = JSON.stringify({firstname,lastname,email,username, password})
      console.log(body)
      const response = await postRegisterData(body)
      setData(response.data)
      logIn(event)
    } catch (error) {
      setError(error.response.data)
      console.log(error);
    }
  }
  const logIn = async event => {
    event.preventDefault();
    try {
      const body = JSON.stringify({username, password});
      const response = await getLoggedInUser(body);
      console.log(response)
      handleUserLogin(response.data.access);
      navigate('/');
    }
   catch (error) {
        console.log(error);
      }
  };

  const handleUserLogin = token => {
    const userObject = jwtDecode(token);

    setUser(userObject);
    localStorage.setItem('token', token);
  };

// /reservations/ - Samo autentifikovani korisnik moze da dodaje rezervaciju, i gleda svoje rezervacije.
// user se popunjava automatski, a offer se bira i salje id. 
// Polja za reservation su id, offer, user

// /testimonials/ - Samo autentifikovani korisnik moze da dodaje,
// Polja su id, title, description, user

// /top-offers/ - Prikazuje top 3 ponude, bazirano na rezervacijama.

// /api/token/ - Za generisanje tokena

// /register/ - Za dodavanje korisnika
// Polja za register su id, first_name, last_name, email, username, password

  return (
    <>
    {AppLayout}
    {/* {(error)? '<div>Error is: '+ {error} + '</div>': ''} */}
    {/* {(error)? console.log(error.response.data) : ''} */}

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>
          </div>

          {(valid.firstname)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.firstname}</p>: ''}
          {(error.first_name)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.first_name}</p>: ''}
          <MDBInput wrapperClass='mb-4' name="firstname" id='firstname' type='text'
            label='First name'
            value={firstname}
            onChange={event => handleInputChange(event, setFirstname)}
          />
          {(valid.lastname)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.lastname}</p>: ''}
          {(error.last_name)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.last_name}</p>: ''}
          <MDBInput wrapperClass='mb-4' name='lastname' id='lastname' type='text'
            label='Last name'
            value={lastname}
            onChange={event => handleInputChange(event, setLaststname)}
          />
          {(valid.username)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.username}</p>: ''}
          {(error.username)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.username}</p>: ''}
          <MDBInput wrapperClass='mb-4' name='username' id='username' type='text'
            label='Username'
            value={username}
            onChange={event => handleInputChange(event, setUsername)}
          />
          {(valid.email)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.email}</p>: ''}
          {(error.email)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.email}</p>: ''}
          <MDBInput wrapperClass='mb-4'name='email' id='email' type='email'
          label='Email'
          value={email}
          onChange={event => handleInputChange(event, setEmail)}
          />
          {(valid.password)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.password}</p>: ''}
          {(error.password)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.password}</p>: ''}
          <MDBInput wrapperClass='mb-4' name='password' id='password' type='password'
          label='Password'
          value={password}
          onChange={event => handleInputChange(event, setPassword)}
          />
          {(valid.confirmpassword)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {valid.confirmpassword}</p>: ''}
          {(error.confirmpassword)? <p className = "text-danger"> <i className="fas fa-exclamation-triangle"></i> {error.confirmpassword}</p>: ''}
          <MDBInput wrapperClass='mb-4' name='confirmpassword' id='confirmpassword' 
          label='Confirm password'
          type='password'
          value={confirmpassword}
            onChange={event => handleInputChange(event, setConfirmpassword)}
          />

          <MDBBtn onClick={chackValidation} className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    </>
  );
}
