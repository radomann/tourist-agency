// import { useEffect, useState } from "react";
import { Card, CoruselNavigation, Testimonial2, Testimonial3 } from "../../components/homecomponents";

import { AppLayout } from "../../layout";

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
        {AppLayout}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Awesome Destination</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {/* {Card} */}
                    {dummy.map(({ name, description, price, image }, index) => <Card key={index} name={name} description={description} price={price} image={image} />)}
                </div>
            </div>
        </div>

        {/* Testimonials */}
        {/* <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
            {CoruselNavigation}
            <div className="carousel-inner py-4">
                {Testimonial3}
            </div>
        </div> */}
        Testim();
        {/* {<Testimonial3 />} */}
        
    {/* {dummyTestimonial.map(({ name, description, location, image}, index) => <Testimonial2 key={index} name={name} description={description} location={location} image={image} />)} */}


{/* <!-- Carousel wrapper -->
<div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
    <!-- Controls -->
    <div class="d-flex justify-content-center mb-4">
      <button class="carousel-control-prev position-relative" type="button"
        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next position-relative" type="button"
        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Inner -->
    <div class="carousel-inner py-4">
      <!-- Single item -->
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li>
                  <i class="fas fa-star-half-alt fa-sm"></i>
                </li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="far fa-star fa-sm"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Single item -->
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">John Doe</h5>
              <p>UX Designer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Alex Rey</h5>
              <p>Web Developer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li>
                  <i class="fas fa-star-half-alt fa-sm"></i>
                </li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="far fa-star fa-sm"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Single item -->
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Anna Deynah</h5>
              <p>UX Designer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li>
                  <i class="fas fa-star-half-alt fa-sm"></i>
                </li>
              </ul>
            </div>
  
            <div class="col-lg-4 d-none d-lg-block">
              <img class="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar"
                style="width: 150px;" />
              <h5 class="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="fas fa-star fa-sm"></i></li>
                <li><i class="far fa-star fa-sm"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Inner -->
  </div>
  <!-- Carousel wrapper --> */}
    </>


}
