import { useEffect, useState } from "react";
import { Booking, Card, CoruselNavigation, Testimonial3 } from "../../components/homecomponents";
import { AddTestimonials } from "../../components/submitcomponents";
import { touristServices } from "../../../service/tourist"

const { getAllDestinations } = touristServices;
const { getAllTestimonials } = touristServices;
const { getAllCategories } = touristServices;


export const HomePage = () => {

    const [disabled, setDisabled] = useState({
        next: true,
        prev: true
    })
    const [page, setPage] = useState(1)
    const [url, setUrl] = useState()
    const [categories, setCategories] = useState([])
    const [destinaions, setDestinaions] = useState([])
    const [testimonial, setTestimonial] = useState([])
    const [error, setError] = useState(null)
    const [title, setTitle] = useState('')
    const [categoryid, setCategoryid] = useState('')

    const fetchAllData = async () => {
        try {
            let newurl = ''
            if (page) newurl += 'page=' + page + '&'
            if (title !== '') newurl += 'title=' + title + '&'
            if (categoryid !== '') newurl +=  'category=' + categoryid

            const result = await getAllDestinations("destinations/" + '?' + newurl)

            const resulttestimonial = await getAllTestimonials()
            const t = resulttestimonial.data.results.slice(0, 3)

            setDestinaions(result.data.results);
            if (result.data.previous === null) setDisabled({ prev: true })
            if (result.data.next === null) setDisabled({ next: true })

            // PITANJE Kako da odradim da na poziv HOME obrise vrijednosti input polja i select elementa
        } catch (error) {
            setError(error);
        }
    }
    
    const fetchAllCategories = async () => {
        try {
            const result = await getAllCategories()
            setCategories(result.data.results);
        } catch (error) {
            setError(error);
        }
    }

    const fetchAllTestimonials = async () => {
        try {
            const result = await getAllTestimonials()
            const t = result.data.results.slice(0, 3)
            setTestimonial(t);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchAllData()
        fetchAllCategories()
        fetchAllTestimonials()
    }, [])


    useEffect(() => {
        fetchAllData()
    }, [page,categoryid])

    const handlePageChange = (currPage) => {
        if (currPage > 0) setPage(currPage)
    }

    const handleInputChange = (event, setState) => {
        const {
          target: { value },
        } = event;
    
        setState(value);
      };

      const handleSelectChange = (event) => {

        const {
            target: { value },
          } = event;
        setCategoryid(value)
      };

    if (error) return <div>Error is: {error.message}</div>

    if (!destinaions) return <div>Error is {error}</div>
    if (!testimonial) return <div>Error is {error}</div>
    return <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 ">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 ">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        <div className="position-relative w-75 mx-auto ">
                            <input className="border-0 rounded-pill w-50 py-3 ps-4 pe-5" type="text" name="title" placeholder="Eg: Thailand" 
                            value={title}
                            onChange={event => handleInputChange(event, setTitle)}
                            />
                            <button onClick={fetchAllData} type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0" style={{ marginTop: "10px", marginRight: "25.5rem" }}>Search</button>
                            <select name="categoryid" className="border-0 rounded-pill w-50 py-3 ps-4 pe-5"
                                value={categoryid}
                                onChange={event => handleSelectChange(event, setCategoryid)}
                            >
                                <option value={''}>or choose destination by category...</option>
                                {categories.map(({id, name}, index) => <option key={index} value={id}>{name}</option> )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Awesome Destination</h1>
                </div>
                <div className="row g-4 justify-content-center">
                {destinaions.map(({ id, title, description, price, duration, number_of_people, media }, index) => <Card key={index} id={id} title={title} description={description} price={price} duration={duration} number_of_people={number_of_people} image={media[0].path} />)}
                </div>
                    <div className='text-center'>
                    <button className="btn btn-primary" disabled={disabled.prev} onClick={() => { handlePageChange(page - 1) }}>&lt; PREV</button>
                    <button className="btn btn-primary" disabled={disabled.next} onClick={() => { handlePageChange(page + 1) }}>NEXT &gt;</button>
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
                            {testimonial.map(({ description, first_name, last_name }, index) => <Testimonial3 key={index} description={description} first_name={first_name} last_name={last_name} image={'img/testimonial.jpg'} />)}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div id="bookingform" className="container-xxl py-5">
            <div className="container">
                {Booking }
            </div>
        </div>
    </>
}
