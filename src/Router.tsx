import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./app/layout/UserLayout";
import { HomePage } from "./app/home/HomePage";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<UserLayout/>,
        errorElement: <h1>Error</h1>,
        children:[
            {
                path:"",
                element: <HomePage/>
            }
        ]
    }
])