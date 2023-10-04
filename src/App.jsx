import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './router/router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AppLayout } from './tourist-site/layout';
import { UserProvider } from './context/UserContext';

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </LocalizationProvider>
     
    {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
