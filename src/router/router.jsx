import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel/layout"
import { Dashboard } from "../admin-panel/pages/Dashboard"
import { Posts } from "../admin-panel/pages/posts/Posts"
import { NewPost } from "../admin-panel/pages/posts/NewPost"
import { Tours } from "../admin-panel/pages/tours/Tours"
import { NewTour } from "../admin-panel/pages/tours/NewTour"
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
                        path: 'tours',
                        element: <Tours />,
                    },
                    {
                        path: 'new-tour',
                        element: <NewTour />
                    },
                    {
                        path: 'tours/:slug',
                        element: <NewTour />
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