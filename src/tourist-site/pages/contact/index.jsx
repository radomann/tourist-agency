import { AppLayout } from "../../layout"
import { FooterPage } from "../../layout/footer"

export const ContactPage = () => {
    return (
        <>
            <AppLayout />
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            
            <div className="row g-4">
            <div className="col-lg-2"></div>
                <div className="col-lg-4 col-md-6">
                    <h5>Get In Touch</h5>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos</p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary customsize" >
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Office</h5>
                            <p className="mb-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary customsize" >
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Mobile</h5>
                            <p className="mb-0">+012 345 67890</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary customsize">
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Email</h5>
                            <p className="mb-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder="0" style={{minHeight: "300px border:0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    <FooterPage />
            </>
    )
}
