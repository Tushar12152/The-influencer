import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const Routs = createBrowserRouter([

    {
       path:'/',
       element:<Layout/>,
       children:[
        {
             
        }
       ]
    }
])

export default Routs;