import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appRoutes } from './router/router';
import { AppLayout } from './tourist-site/layout';
import { UserProvider } from './context/UserContext';

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
     <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
