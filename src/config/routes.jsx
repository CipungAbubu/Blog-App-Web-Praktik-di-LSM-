import { createBrowserRouter } from "react-router-dom";
import { Home, PostForm, PostDetail } from "../pages";
import { PostItem } from "../components";

export const routes = createBrowserRouter([
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
    {
        path: '/post-item',
        element: <PostItem
            image="/images/photo1.jpg"
            title="My Favorite K-pop Group"
            name="NCT DREAM"
            date="17 Aug 2016"  // Tanggal debut
            body="NCT DREAM debuted on August 17, 2016, 
                  and has since captivated fans with 
                  their energetic performances and music!"
        />
    }    

])