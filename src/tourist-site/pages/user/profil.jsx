import React, { useState, useRef, useContext, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { AppLayout } from '../../layout';
import { touristServices } from '../../../service/tourist';
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

    useEffect(() => {
        setUsername(userdetail.username)
        setEmail(userdetail.email)
        setFirstname(userdetail.first_name)
        setLaststname(userdetail.last_name)
    },[userdetail])

    const { putUserData } = touristServices;
    const navigate = useNavigate();

    const update = (event) => {
        // console.log(event.target.files[0].name)
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
            const response = await putUserData(body)
            console.log(response);
            // navigate('/')
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
                                                name='email'
                                                value={email}
                                                onChange={event => handleInputChange(event, setEmail)}
                                                className="form-control" id="email" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text"
                                                name='username'
                                                value={username}
                                                onChange={event => handleInputChange(event, setUsername)}
                                                className="form-control" id="username" placeholder="Username" />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="first_name" placeholder="First Name"
                                                value={first_name}
                                                onChange={event => handleInputChange(event, setFirstname)}
                                            />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Last name"
                                                value={last_name}
                                                onChange={event => handleInputChange(event, setLaststname)}
                                            />
                                            <label htmlFor="last_name">Last name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" name="password" placeholder="Password" />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" name="confirmpassword" placeholder="Confirm password" />
                                            <label htmlFor="confirmpassword">Confirm password</label>
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