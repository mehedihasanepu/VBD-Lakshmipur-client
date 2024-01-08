import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Team from "../pages/Team/Team";
import Contract from "../pages/Contract/Contract";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'team',
                element: <Team></Team>
            },
            {
                path: 'contract',
                element: <Contract></Contract>
            },
        ]
    },
]);