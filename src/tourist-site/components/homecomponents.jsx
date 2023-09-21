import { NavLink } from 'react-router-dom';

export const Card = ({ name, description, price, image }) => (


<div className="col-lg-4 col-md-6">
                    <div className="package-item">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src={image} alt="" />
                        </div>
                        <div className="d-flex border-bottom">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{name}</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mb-0">€ {price}</h3>
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                            </div>
                            <p>{description}</p>
                            <div className="d-flex justify-content-center mb-2">
                                <NavLink to="" className="btn btn-sm btn-primary px-3 border-end buttonRadiusLeft">Read More</NavLink>
                                <NavLink to="" className="btn btn-sm btn-primary px-3 buttonRadiusRight">Book Now</NavLink>
                            </div>
                        </div>
                    </div>
                    </div>

);

export const Testimonial = ({ name, description, location, image }) => (
            <div className="testimonial-item bg-white text-center border p-4">
                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3 imgSize" src={image} />
                <h5 className="mb-0">{name}</h5>
                <p>{location}</p>
                <p className="mb-0">{description}</p>
            </div>
);

export const Testimonial2 = ({name, description, location, image }) => (
    // console.log('key je ', key);
    // console.log('key je ', name);
    // console.log('key je ', description);
    // console.log('key je ', location);
    // console.log('key je ', image);
    <div className="carousel-item">
    <img className="rounded-circle shadow-1-strong mb-4 imgSize"
      src={image} alt="avatar" />
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8">
        <h5 className="mb-3">{name}</h5>
        <p>{location}</p>
        <p className="text-muted">
          <i className="fas fa-quote-left pe-2"></i>
         {description}
        </p>
      </div>
    </div>
    </div>
);