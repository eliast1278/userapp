import EditPost from "../../pages/users/EditPost";
import UserPosts from "../../pages/users/UserPosts";

export const PublicRoutes = [
    {
        path: "/posts",
        component: UserPosts
    }, {
        path: "/posts/:postId",
        component: EditPost
    }
]