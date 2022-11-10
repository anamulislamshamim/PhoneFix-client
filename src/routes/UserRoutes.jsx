import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddReview from "../pages/AddReview/AddReview";
import AddServices from "../pages/AddServices/AddServices";
import Blog from "../pages/Blog/Blog";
import CardDetails from "../pages/CardDetails/CardDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import ServiceUpdate from "../pages/ServiceUpdate/ServiceUpdate";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage />,
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"/services/:id",
                loader:({params}) => fetch(`http://localhost:4000/services/${ params.id }`),
                element:<CardDetails />
            },
            {
                path:"/services",
                element:<Services />
            },
            {
                path:"/add-review/:id",
                loader: ({ params }) => fetch(`http://localhost:4000/services/${ params.id }`),
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/blog",
                element:<Blog />
            },
            {
                path:"/my-reviews",
                element:<PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path:"/review/update/:id",
                loader:({params}) => fetch(`http://localhost:4000/reviews/${ params.id }`),
                element:<PrivateRoute><UpdateReview /></PrivateRoute>
            },
            {
                path:"/add-service",
                element:<PrivateRoute><AddServices /></PrivateRoute>
            },
            {
                path:"/service/update/:id",
                loader: ({ params }) => fetch(`http://localhost:4000/services/${ params.id }`),
                element:<PrivateRoute><ServiceUpdate /></PrivateRoute>
            }
        ]
    }
]);

export default router;