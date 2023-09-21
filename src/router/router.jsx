import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel/layout"
import { Dashboard } from "../admin-panel/pages/Dashboard"
import { AdminPanelPosts } from "../admin-panel/pages/Posts"
import { AboutPage } from "../tourist-site/pages/about"

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
                        element: <AdminPanelPosts />
                    }
                ]
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