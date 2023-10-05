import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel/layout"
import { Dashboard } from "../admin-panel/pages/Dashboard"
import { Posts as AdminPanelPosts } from "../admin-panel/pages/Posts"
import { AboutPage } from "../tourist-site/pages/about"
import { HomePage } from "../tourist-site/pages/home"
import { SinglePage } from "../tourist-site/pages/singlepage"
import { UserPage } from "../tourist-site/pages/user"
import { ContactPage } from "../tourist-site/pages/contact"
import { UserProfil } from "../tourist-site/pages/user/profil"
import { ProtectedRoute, PublicRoute } from './Routes';

export const appRoutes = [
    {
        path: '',
        children: [
            {
                index: true,
                element: <PublicRoute element={<App />} />,
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
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'single/:id',
                element: <SinglePage />
            },
            {
                path: 'login',
                element: <PublicRoute element={<UserPage />} />
            },
            {
                path: 'profil',
                element: <ProtectedRoute element={<UserProfil />} />
            }
        ]
    }
]