import React, { useState, useRef } from 'react';
import { AppLayout } from '../../layout';

export const UserProfil  = () => {
        // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    // const [error, setError] = useState(null);
    const inputFile = useRef(null) 
    const inputFileInDb = useRef() 
    const [show, setShow] = useState('none');
    const [show1, set1Show] = useState();

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

    const dummy = [
        { name: 'Thailand', image: 'img/package-1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '130' },
        { name: 'Indonesia', image: 'img/package-2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '430' },
        { name: 'Malesia', image: 'img/package-3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '670' },
        { name: 'Thailand', image: 'img/package-1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '130' },
        { name: 'Indonesia', image: 'img/package-2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '430' },
        { name: 'Malesia', image: 'img/package-3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '670' },
    ];
return (
<>
    {AppLayout}
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
                                    <img src="img/team-4.jpg" className="rounded-circle imgSize clicable" alt="Avatar"
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
                                    <input type="email" className="form-control" id="email" disabled />
                                    <label htmlFor="name">Email</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Given Name" />
                                    <label htmlFor="name">Given Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="surname" placeholder="Surname" />
                                    <label htmlFor="subject">Surname</label>
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
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
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