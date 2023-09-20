import { useState } from 'react';
import '../App.css'
import { AppLayout } from './layout';
import { HomePage } from './pages/home'


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      { AppLayout }
      { HomePage }
    </>
  )
}
