import { useState } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { UserProvider } from '../context/UserContextnew'
import { AppLayout } from './layout';
import { HomePage } from './pages/home'
// import { AboutPage } from './pages/about';


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <UserProvider> */}
      { AppLayout }
      <HomePage />
      {/* { AboutPage } */}
    {/* </UserProvider> */}
    </>
  )
}

// /offers/ - Admin ima pravo za sve CRUD operacije, a obican korisnik ili neulogovani korisnik samo da vidi ponude. 
// Polja za offer su id, title, description, price, duration, start_date, end_date, category, media.

// /categories/ - Samo admin moze da pristupi i radi CRUD operacije
// Polja za category su id, name

// /reservations/ - Samo autentifikovani korisnik moze da dodaje rezervaciju, i gleda svoje rezervacije.
// user se popunjava automatski, a offer se bira i salje id. 
// Polja za reservation su id, offer, user

// /testimonials/ - Samo autentifikovani korisnik moze da dodaje,
// Polja su id, title, description, user

// /top-offers/ - Prikazuje top 3 ponude, bazirano na rezervacijama.

// /api/token/ - Za generisanje tokena

// /register/ - Za dodavanje korisnika
// Polja za register su id, first_name, last_name, email, username, password