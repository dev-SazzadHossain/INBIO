import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
        </Route>
    </Route>
))