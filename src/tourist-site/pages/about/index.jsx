import { AppLayout } from "../../layout"
import { FooterPage } from "../../layout/footer"

export const AboutPage = () => {
    return (
        <>
            <AppLayout />
            <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum libero ipsum non omnis voluptate voluptatum iusto saepe cupiditate! Corrupti rem expedita impedit iusto minima itaque, quisquam accusantium labore voluptatibus veniam!</p>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque placeat pariatur, cumque cupiditate nobis. Consequatur molestiae asperiores consequuntur commodi perspiciatis fuga sit, sequi officiis ratione deleniti molestias expedita ex.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    <FooterPage />
            </>
    )
}
