import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Dinosaurs } from "./Dinosaurs/Dinosaurs";
import { Dinosaur } from "./Dinosaur/Dinosaur";
  

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dinosaurs />,
    },
    {
        path: "/dinosaurs/:id",
        element: <Dinosaur />,
    },
])

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}