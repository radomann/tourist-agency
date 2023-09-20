import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './router/router';

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
