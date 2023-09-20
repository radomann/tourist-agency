import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel/layout"
import { Dashboard } from "../admin-panel/pages/Dashboard"
import { Posts } from "../admin-panel/pages/Posts"

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
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'posts',
                        element: <Posts />
                    }
                ]
            }
        ]
    }
]