import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { AppLayout } from '../../layout';
import { authService } from '../../../service/auth';

export const UserProfil  = () => {
        // const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLaststname] = useState('');
    const inputFile = useRef(null) 
    const inputFileInDb = useRef() 
  const [userdata, setUserdata] = useState([]);
  const { getUserDetail } = authService;
  const { putUserData } = authService;
  const navigate = useNavigate();

    const update = (event) => {
        console.log(event.target.files[0].name)
        // inputFileInDb.current.src = event.target.files[0].name
        inputFileInDb.current.src = URL.createObjectURL(event.target.files[0]);
    }

      const onButtonClick = (event) => {
        // `current` points to the mounted file input element
        inputFile.current.click();
        // console.log(inputFile);
        // inputFile.current.onCha = '';
        // inputFile.className = 'rounded-circle imgSize'
        // const result = changeState()
        // console.log(result);
      };
      const userDetail = async () => {
        try {
          const response = await getUserDetail(localStorage.getItem('token'));
          setUserdata(response.data)
          console.log(userdata);
        //   userdata.map((x, i) => x.firstname? setUsername(x.username): '' )
          userdata.map((x) => console.log(x) )
          userdata.map(item => (
            setEmail(item.email),
            setUsername(item.username)
          ))

          console.log(userdata)
        }
       catch (error) {
            console.log(error);
          }
      };

      useEffect(() => {
        userDetail()
    }, [])

    const updateData = async (event) => {
        event.preventDefault()
        try {
            const body = JSON.stringify({username,first_name,last_name})
            // console.log(body)
            const response = await putUserData(body, localStorage.getItem('token'))
            navigate('/')
          } catch (error) {
            setError(error.response)
            console.log(error);
          }
    }
    const handleInputChange = (event, setState) => {
        const {
          target: { value },
        } = event;
    
        setState(value);
        console.log(value)
      };
return (
<>
    <AppLayout />
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Profil edit</h6>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                </div>
                <div className="col-lg-4 col-md-12">
                    <form>
                        <div className="row g-3">
                            <div className="text-center col-md-12">
                                <div className="form-floating">
                                    <img src="img/testimonial.jpg" className="rounded-circle imgSize clicable" alt="Avatar"
                                    // onClick={chosePicture}
                                    ref={inputFileInDb}
                                    onClick={onButtonClick}
                                    />
                                    <input type='file' id='file' ref={inputFile} className="hiddenItem" onChange={update} />
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="file" className="form-control" id="picture"
                                    // onChange={update}
                                    />
                                    <label htmlFor="picture">Upload picture</label>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="email"
                                    value={email? email : userdata.email}
                                    // value={userdata.email} 
                                    onChange={event => handleInputChange(event, setEmail)}
                                    className="form-control" id="email" disabled />
                                    <label htmlFor="name">Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" 
                                    name='username'
                                    value={username? username : userdata.username}
                                    onChange={event => handleInputChange(event, setUsername)}
                                    className="form-control" id="username" placeholder="Username" />
                                    <label htmlFor="subject">Username</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="first_name" placeholder="First Name"
                                    value={first_name? first_name : userdata.first_name}
                                    onChange={event => handleInputChange(event, setFirstname)}
                                        />
                                    <label htmlFor="name">First Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" name='last_name' id="surname" placeholder="Last name"
                                    value={last_name? last_name : userdata.last_name}
                                    onChange={event => handleInputChange(event, setLaststname)}
                                    />
                                    <label htmlFor="subject">Last name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                    <label htmlFor="subject">Password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password" />
                                    <label htmlFor="subject">Confirm password</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button onClick={updateData} className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</>
);
}