import { createBrowserRouter } from "react-router-dom";
import { Home, PostForm, PostDetail } from "../pages";
import { MainLayout } from "../components";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/post-form',
                element: <PostForm />
            },
            {
                path: '/post-detail',
                element: <PostDetail />
            },
        ]
    }
]);
