// import { useEffect, useState } from "react";
import { Card, CoruselNavigation, Testim, Testimonial3 } from "../../components/homecomponents";
import { AddTestimonials } from "../../components/submitcomponents";
import {paginationBasic} from "../../components/paggination"

export const HomePage = () => {

    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    // const [error, setError] = useState(null);

    const dummy = [
        { name: 'Thailand', image: 'img/package-1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '130' },
        { name: 'Indonesia', image: 'img/package-2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '430' },
        { name: 'Malesia', image: 'img/package-3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '670' },
        { name: 'Thailand', image: 'img/package-1.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '130' },
        { name: 'Indonesia', image: 'img/package-2.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '430' },
        { name: 'Malesia', image: 'img/package-3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', price: '670' },
    ];
    
    const dummyTestimonial = [
        { name: 'John Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Bangkog, Thailand' },
        { name: 'Michael Jordan', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Moscov, Rusia' },
        { name: 'Rihana', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Budva, Montenegro' },
        { name: 'Philip Coach', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Kairo, Egypt' },
        { name: 'Marc Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Amsterdam, Netherland' },
        { name: 'Joe Doe', image: 'img/testimonial.jpg', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed maxime laborum molestias mollitia quam, sapiente ea! Ad, nisi hic.', location: 'Budapest, Hungary' },
    ];

    // useEffect(() => {
    //     const fetchAllData = async () => {
    //         try {
    //             const result = await ads.get()
    //             console.log(result.data);
    //             setData(result.data)
    //         }catch (err){
    //             setError(err);
    //         }
    //     }
    //     fetchAllData()
    // },[])

    // if(error)
    //     return <div>Error is: {error.message}</div>

    // if(!data)
    //     return <div>Error is {error}</div>

    return <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Awesome Destination</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {dummy.map(({ name, description, price, image }, index) => <Card key={index} name={name} description={description} price={price} image={image} />)}
                    {paginationBasic}
                </div>
                <div className='text-center'>
                
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                {/* <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonials</h6>
                    <h1 className="mb-5">Our happy client sey</h1>
                </div> */}
                {/* <div className="row g-4 justify-content-center"> */}
                    {<Testim />}
                     {/* {dummyTestimonial.map(({ name, description, location, image}, index) => <Testimonial2 key={index} name={name} description={description} location={location} image={image} />)} */} 
                {/* </div> */}
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                { <AddTestimonials /> }
            </div>
        </div>
    </>
}
