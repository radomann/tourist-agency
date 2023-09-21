import { useState } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppLayout } from './layout';
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about';


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      { AppLayout }
      {/* { HomePage } */}
      {/* { AboutPage } */}
    </>
  )
}
