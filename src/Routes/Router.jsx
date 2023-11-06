
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import LogIn from '../Pages/Login';
import Register from '../Pages/Register';
import AddProducts from '../Pages/AddProducts';
import JobDetails from '../Pages/JobDetails';
import Bids from '../Pages/Bids';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/log-in',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add-products',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/job-details/:id',
                element:<JobDetails></JobDetails>,

            },
            {
                path:'/my-bids',
                element:<PrivateRoute><Bids></Bids></PrivateRoute>
            }
        ]
    }
])
export default Router;