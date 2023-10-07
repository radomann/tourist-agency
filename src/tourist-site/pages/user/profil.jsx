import React, { useState, useRef, useContext } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { AppLayout } from '../../layout';
import { authService } from '../../../service/auth';
import { UserContext } from '../../../context/UserContext';

export const UserProfil = () => {
    const {userdetail} = useContext(UserContext)
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLaststname] = useState('');
    const inputFile = useRef(null)
    const inputFileInDb = useRef()
    // const [userdata, setUserdata] = useState([]);
    // const { getUserDetail } = authService;
    const { putUserData } = authService;
    const navigate = useNavigate();

    const update = (event) => {
        console.log(event.target.files[0].name)
        inputFileInDb.current.src = URL.createObjectURL(event.target.files[0]);
    }

    const onButtonClick = (event) => {
        inputFile.current.click();
    };

    const updateData = async (event) => {
        event.preventDefault()
        try {
            const body = JSON.stringify({ email, username, first_name, last_name })
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
    };

    if (error) return <div>Error is: {error.message}</div>
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
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email"
                                                value={userdetail.email ? userdetail.email : email}
                                                onChange={event => handleInputChange(event, setEmail)}
                                                className="form-control" id="email" />
                                            <label htmlFor="name">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text"
                                                name='username'
                                                value={userdetail.username ? userdetail.username : username}
                                                onChange={event => handleInputChange(event, setUsername)}
                                                className="form-control" id="username" placeholder="Username" />
                                            <label htmlFor="subject">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="first_name" placeholder="First Name"
                                                value={userdetail.first_name ? userdetail.first_name : first_name}
                                                onChange={event => handleInputChange(event, setFirstname)}
                                            />
                                            <label htmlFor="name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='last_name' id="surname" placeholder="Last name"
                                                value={userdetail.last_name ? userdetail.last_name : last_name}
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