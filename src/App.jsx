import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './router/router';
import { AppLayout } from './tourist-site/layout';

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
