import { useEffect, useState } from "react";
import { Card, CoruselNavigation, Testim, Testimonial3 } from "../../components/homecomponents";
import { AddTestimonials } from "../../components/submitcomponents";
import {paginationBasic} from "../../components/paggination"
import { touristServices } from "../../../service/tourist"

const {getAllOffers} = touristServices;


export const HomePage = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
    const dummyTestimonial = [
        { name: 'John Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Bangkog, Thailand' },
        { name: 'Michael Jordan', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Moscov, Rusia' },
        { name: 'Rihana', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Budva, Montenegro' },
        { name: 'Philip Coach', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Kairo, Egypt' },
        { name: 'Marc Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Amsterdam, Netherland' },
        { name: 'Joe Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Budapest, Hungary' },
    ];

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await getAllOffers("offers")
                // console.log(result.data[0].id)
                setData(result.data)
            }catch (error){
                setError(error);
            }
        }
        fetchAllData()
    },[])

    // PITANJE ZA{TO SE PRVO ERROR ISPISE PA ONDA OStAtaK}
    if(error) return <div>Error is: {error.message}</div>
    
    if(!data) return <div>Error is {error}</div>    

    return <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Awesome Destination</h1>
                </div>
                    {/* TODO finish filters */}
                <div className="row g-4 justify-content-center">
                    {data.map(({ id, title, description, price, duration, media }, index) => <Card key={index} id={id} title={title} description={description} price={price} duration={duration} image={media[0].path} />)}
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
                    <h1 className="mb-5">Our happy client sey</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {Testimonial3}
                    {/* {data.map(({ title, description, price, duration, image }, index) => <Card key={index} title={title} description={description} price={price} duration={duration} image={image} />)} */}
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                { <AddTestimonials /> }
            </div>
        </div>
    </>
}
