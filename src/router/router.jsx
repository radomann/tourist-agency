import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel/layout"
import { Dashboard } from "../admin-panel/pages/Dashboard"
import { Posts } from "../admin-panel/pages/posts/Posts"
import { NewPost } from "../admin-panel/pages/posts/NewPost"
import { Destinations } from "../admin-panel/pages/destinations/Destinations"
import { NewDestination } from "../admin-panel/pages/destinations/NewDestination"
import { AboutPage } from "../tourist-site/pages/about"
import { SignIn } from "../admin-panel/pages/Login"

export const appRoutes = [
    {
        path: '',
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: 'admin',
                element: <AdminPanel />,
                children: [
                    {   
                        path: '',
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'posts',
                        element: <Posts />
                    },
                    {
                        path: 'new-post',
                        element: <NewPost />
                    },
                    {
                        path: 'destinations',
                        element: <Destinations />,
                    },
                    {
                        path: 'new-destination',
                        element: <NewDestination />
                    },
                    {
                        path: 'destination/:id',
                        element: <NewDestination />
                    }
                ]
            },
            {
                path: 'login',
                element: <SignIn />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            // {
            //     path: 'destiantions',
            //     element: <Destinations />
            // },
            // {
            //     path: 'contact',
            //     element: <Contact />
            // }
        ]
    }
]