import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'skills',
                element:<Skills></Skills>
            },
            {
                path:'education',
                element:<Education></Education>
            },
            {
                path:'experience',
                element:<Experience></Experience>
            },
           
        ]
    },
]);

export default router;