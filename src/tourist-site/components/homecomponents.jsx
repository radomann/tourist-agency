import { NavLink } from 'react-router-dom';
import {
  MDBCarousel,
  // MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export const Card = ({ id, title, description, price, duration, number_of_people, image }) => (

  <div className="col-lg-4 col-md-6">
    <div className="package-item">
      <div className="overflow-hidden">
        <img className="img-fluid img-card" src={image} alt="" />
      </div>
      <div className="d-flex border-bottom">
        <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>{title}</small>
        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>{duration} days</small>
        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{number_of_people} Person</small>
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
        <p>{description.substring(0, 60)}...</p>
        <div className="d-flex justify-content-center mb-2">
          <NavLink to={'/single/' + id} className="btn btn-sm btn-primary px-3 border-end buttonRadiusLeft">Read More</NavLink>
          <a href="#bookingform" className="btn btn-sm btn-primary px-3 buttonRadiusRight">Book Now</a>
        </div>
      </div>
    </div>
  </div>

);


export const Testimonial3 = ({ description, first_name, last_name, image }) => (
  <>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="card testimonial-card">
        <div className="card-up"></div>
        <div className="avatar mx-auto bg-white">
          <img src={image}
            className="rounded-circle img-fluid" style={{ maxWidth: "50%" }} />
        </div>
        <div className="card-body">
          <h4 className="mb-4">{first_name} {last_name}</h4>
          <hr />
          <p className="dark-grey-text mt-4">
            <i className="fas fa-quote-left pe-2"></i>{description}
          </p>
        </div>
      </div>
    </div>
  </>
);

export const CoruselNavigation = 
  <>
    <div className="d-flex justify-content-center mb-4">
      <button className="carousel-control-prev position-relative" type="button"
        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next position-relative" type="button"
        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>


export const Booking =
  <>
    <div className="container-xxl py-5" id="booking">
      <div className="container">
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Booking</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <a className="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Book A Tour</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select bg-transparent" id="select1">
                        <option value="1">Destination 1</option>
                        <option value="2">Destination 2</option>
                        <option value="3">Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{height: "100px"}}></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

// export const Testim = () => (
//     <MDBContainer className="py-5">
//     <MDBCarousel showControls dark>
//       {/* <MDBCarouselInner> */}
//       <div className="multi-carousel-inner">
//         <MDBCarouselItem className="active">
//           <MDBContainer>
//             <MDBRow className="text-center">
//               <MDBCol lg="4" className="mb-5 mb-md-0">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Anna Deynah</h5>
//                 <h6 className="text-primary mb-3">UX Designer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Quod eos id officiis hic tenetur quae quaerat ad velit ab
//                   hic tenetur.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">John Doe</h5>
//                 <h6 className="text-primary mb-3">Web Developer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Ut enim ad minima veniam, quis nostrum exercitationem ullam
//                   corporis suscipit laboriosam, nisi ut aliquid commodi.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star-half-alt"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Maria Kate</h5>
//                 <h6 className="text-primary mb-3">Photographer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   At vero eos et accusamus et iusto odio dignissimos ducimus
//                   qui blanditiis praesentium voluptatum deleniti atque
//                   corrupti.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       far
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </MDBCarouselItem>
//         <MDBCarouselItem>
//           <MDBContainer>
//             <MDBRow className="text-center">
//               <MDBCol lg="4" className="mb-5 mb-md-0">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">John Doe</h5>
//                 <h6 className="text-primary mb-3">UX Designer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Quod eos id officiis hic tenetur quae quaerat ad velit ab
//                   hic tenetur.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Alex Rey</h5>
//                 <h6 className="text-primary mb-3">Web Developer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Ut enim ad minima veniam, quis nostrum exercitationem ullam
//                   corporis suscipit laboriosam, nisi ut aliquid commodi.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star-half-alt"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Maria Kate</h5>
//                 <h6 className="text-primary mb-3">Photographer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   At vero eos et accusamus et iusto odio dignissimos ducimus
//                   qui blanditiis praesentium voluptatum deleniti atque
//                   corrupti.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       far
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </MDBCarouselItem>
//         <MDBCarouselItem>
//           <MDBContainer>
//             <MDBRow className="text-center">
//               <MDBCol lg="4" className="mb-5 mb-md-0">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Anna Deynah</h5>
//                 <h6 className="text-primary mb-3">UX Designer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Quod eos id officiis hic tenetur quae quaerat ad velit ab
//                   hic tenetur.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">John Doe</h5>
//                 <h6 className="text-primary mb-3">Web Developer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   Ut enim ad minima veniam, quis nostrum exercitationem ullam
//                   corporis suscipit laboriosam, nisi ut aliquid commodi.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star-half-alt"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//               <MDBCol lg="4" className="d-none d-lg-block">
//                 <div className="d-flex justify-content-center mb-4">
//                   <img
//                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
//                     className="rounded-circle shadow-1-strong"
//                     width="150"
//                     height="150"
//                   />
//                 </div>
//                 <h5 className="mb-3">Maria Kate</h5>
//                 <h6 className="text-primary mb-3">Photographer</h6>
//                 <p className="px-xl-3">
//                   <MDBIcon fas icon="quote-left" className="pe-2" />
//                   At vero eos et accusamus et iusto odio dignissimos ducimus
//                   qui blanditiis praesentium voluptatum deleniti atque
//                   corrupti.
//                 </p>
//                 <MDBTypography
//                   listUnStyled
//                   className="d-flex justify-content-center mb-0"
//                 >
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       fas
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                   <li>
//                     <MDBIcon
//                       far
//                       icon="star"
//                       size="sm"
//                       className="text-warning"
//                     />
//                   </li>
//                 </MDBTypography>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </MDBCarouselItem>
//       {/* </MDBCarouselInner> */}
//       </div>
//     </MDBCarousel>
//   </MDBContainer>
// );
