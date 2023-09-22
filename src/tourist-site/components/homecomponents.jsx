import { NavLink } from 'react-router-dom';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBTypography,
    MDBContainer,
    MDBRow,
  } from "mdb-react-ui-kit";

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


export const Testimonial3 = 
<>
<div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
            <h5 className="mb-3">Anna Deynah</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
            <h5 className="mb-3">John Doe</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>  

    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar" />
            <h5 className="mb-3">John Doe</h5>
            <p>UX Designer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
              officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" />
            <h5 className="mb-3">Alex Rey</h5>
            <p>Web Developer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li>
                <i className="fas fa-star-half-alt fa-sm"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <img className="rounded-circle shadow-1-strong mb-4 imgSize"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar" />
            <h5 className="mb-3">Maria Kate</h5>
            <p>Photographer</p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2"></i>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="fas fa-star fa-sm"></i></li>
              <li><i className="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</>

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


export default function Testim() {
    return (
      <MDBContainer className="py-5">
        <MDBCarousel showControls dark>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBContainer>
                <MDBRow className="text-center">
                  <MDBCol lg="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Anna Deynah</h5>
                    <h6 className="text-primary mb-3">UX Designer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">John Doe</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star-half-alt"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Maria Kate</h5>
                    <h6 className="text-primary mb-3">Photographer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          far
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBContainer>
                <MDBRow className="text-center">
                  <MDBCol lg="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">John Doe</h5>
                    <h6 className="text-primary mb-3">UX Designer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Alex Rey</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star-half-alt"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Maria Kate</h5>
                    <h6 className="text-primary mb-3">Photographer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          far
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBContainer>
                <MDBRow className="text-center">
                  <MDBCol lg="4" className="mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Anna Deynah</h5>
                    <h6 className="text-primary mb-3">UX Designer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">John Doe</h5>
                    <h6 className="text-primary mb-3">Web Developer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star-half-alt"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol lg="4" className="d-none d-lg-block">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                        className="rounded-circle shadow-1-strong"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="mb-3">Maria Kate</h5>
                    <h6 className="text-primary mb-3">Photographer</h6>
                    <p className="px-xl-3">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center mb-0"
                    >
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                      <li>
                        <MDBIcon
                          far
                          icon="star"
                          size="sm"
                          className="text-warning"
                        />
                      </li>
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }