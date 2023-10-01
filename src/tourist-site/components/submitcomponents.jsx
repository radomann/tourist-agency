import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddTestimonials = () => {
// const { handleUserLogin } = useContext(UserContext);
const [message, setMessage] = useState('');
const [destionation, setDestionation] = useState('');
const navigate = useNavigate();

const handleInputChange = (event, setState) => {
  const {
    target: { value },
  } = event;

  setState(value);
};

// const handleSubmit = async event => {
//   event.preventDefault();

//   try {
//     const body = JSON.stringify({ username, password });

//     const response = await getLoggedInUser(body);
//     handleUserLogin(response.data.token);
//     navigate('/');
//   } catch (error) {
//     console.log(error);
//   }
// };
return (
<>
    <div className="container-xl py-1 bg-primary">
        <div className="container">
            <div className="p-2">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 text-white">
                        <h6 className="text-white text-uppercase">Testimonial</h6>
                        <h1 className="text-white mb-4">Write your testimonial</h1>
                        <p className="mb-4">If you were satisfied with one of our destinations, your experience would mean a lot to us.</p>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-white mb-4">Write testimonials</h1>
                        <form method="post"> 
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="form-floating">
                                    <input
                                        className="form-control bg-transparent w-100 py-3"
                                        type="text"
                                        name="destination"
                                        id="destination"
                                        placeholder="Enter destination"
                                        value={destionation}
                                        onChange={event => handleInputChange(event, setDestionation)}
                                    />
                                    <label htmlFor="destination">Destination</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea 
                                        className="form-control bg-transparent" 
                                        placeholder="Enter your testimonials" 
                                        name="message" id="message" style={{height: "100px"}}
                                        value={message}
                                        onChange={event => handleInputChange(event, setMessage)}
                                        ></textarea>
                                        <label htmlFor="message">Yuor testimonial</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-light w-100 py-3" type="submit">Add Testimonial</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}