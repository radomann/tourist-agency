import { App } from "../tourist-site/index"
import { AdminPanel } from "../admin-panel"

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
                element: <AdminPanel />
            }
        ]
    }
]