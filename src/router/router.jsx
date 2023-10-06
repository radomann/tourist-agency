import { App } from "../tourist-site/index";
import { AdminPanel } from "../admin-panel/layout";
import { Dashboard } from "../admin-panel/pages/Dashboard";
import { Posts } from "../admin-panel/pages/posts/Posts";
import { NewPost } from "../admin-panel/pages/posts/NewPost";
import { Destinations } from "../admin-panel/pages/destinations/Destinations";
import { NewOrEditDestination } from "../admin-panel/pages/destinations/NewOrEditDestination";
import { Categories } from "../admin-panel/pages/categories/Categories";
import { AboutPage } from "../tourist-site/pages/about";
import { HomePage } from "../tourist-site/pages/home";
import { SinglePage } from "../tourist-site/pages/singlepage";
import { UserPage } from "../tourist-site/pages/user";
import { UserProfil } from "../tourist-site/pages/user/profil";
import { ProtectedRoute, PublicRoute } from "./Routes";
import { NewOrEditCategory } from "../admin-panel/pages/categories/NewOrEditCategory";
import { Testimonials } from "../admin-panel/pages/testimonials/Testimonials";
import { NewOrEditTestimonial } from "../admin-panel/pages/testimonials/NewOrEditTestimonial";

export const appRoutes = [
  {
    path: "",
    children: [
      {
        index: true,
        element: <PublicRoute element={<App />} />,
      },
      {
        path: "admin",
        element: <AdminPanel />,
        children: [
          {
            path: "",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "posts",
            element: <Posts />,
          },
          {
            path: "new-post",
            element: <NewPost />,
          },
          {
            path: "destinations",
            element: <Destinations />,
          },
          {
            path: "new-destination",
            element: <NewOrEditDestination />,
          },
          {
            path: "destination/:id",
            element: <NewOrEditDestination />,
          },
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "new-category",
            element: <NewOrEditCategory />,
          },
          {
            path: "categories/:id",
            element: <NewOrEditCategory />,
          },
          {
            path: "testimonials",
            element: <Testimonials />,
          },
          {
            path: "new-testimonial",
            element: <NewOrEditTestimonial />,
          },
          {
            path: "testimonial/:id",
            element: <NewOrEditTestimonial />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "single/:id",
        element: <SinglePage />,
      },
      {
        path: "login",
        element: <PublicRoute element={<UserPage />} />,
      },
      {
        path: "profil",
        element: <ProtectedRoute element={<UserProfil />} />,
      },
    ],
  },
];
