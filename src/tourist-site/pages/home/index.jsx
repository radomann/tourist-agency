import { useEffect, useState } from "react";
import { Card, CoruselNavigation, Testim, Testimonial3 } from "../../components/homecomponents";
import { AddTestimonials } from "../../components/submitcomponents";
import { paginationBasic } from "../../components/paggination"
import { touristServices } from "../../../service/tourist"

const { getAllOffers } = touristServices;
const { getAllTestimonials } = touristServices;
const { getAllCategories } = touristServices;


export const HomePage = () => {

    const [error, setError] = useState()
    const [values, setValues] = useState({
        offers: [],
        testimonial: []
    });
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await getAllOffers("offers")

                const resulttestimonial = await getAllTestimonials()
                const t = resulttestimonial.data.slice(0, 3)

                setValues({ offers: result.data, testimonial: t });

                // PITANJE DA LI SE NPR MOZE I ERROR RAZDVOJITI DA IMAM ERORO ZA OFFERS I TESTIMONIJALS
            } catch (error) {
                setError(error);
            }
        }
        fetchAllData()
    }, [])

    // PITANJE ZA{TO SE PRVO ERROR ISPISE PA ONDA OStAtaK}
    if (error) return <div>Error is: {error.message}</div>

    if (!values) return <div>Error is {error}</div>

    return <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Awesome Destination</h1>
                </div>
                {/* TODO finish filters */}
                <div className="container py-2">
                    <div className="row">
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Search destination" />
                        </div>
                        <div className="form-group col-md-4">
                            <select id="inputState" className="form-control">
                                <option>Choose destination category...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    {values.offers.map(({ id, title, description, price, duration, media }, index) => <Card key={index} id={id} title={title} description={description} price={price} duration={duration} image={media[0].path} />)}
                </div>
                <div className='text-center'>
                    {/* TODO finish pagination */}
                    {paginationBasic}
                </div>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonials</h6>
                    <h1 className="mb-5">Our happy clients say</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <section>
                        <div className="row text-center">
                            {values.testimonial.map(({ description, user }, index) => <Testimonial3 key={index} description={description} user={user} image={'img/testimonial.jpg'} />)}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                {<AddTestimonials />}
            </div>
        </div>
    </>
}
