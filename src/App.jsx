import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './router/router';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
    </>
  )
}

export default App
