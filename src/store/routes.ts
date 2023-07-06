import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";

export const authRoutes = [
    {
       id:1,
       path:'/sign-in',
       component:LoginForm
    },
    {
        id:2,
        path:'/sign-up',
        component:RegisterForm
    },
    {
        id:3,
        path:'/admin',
        component:LoginForm
    }
];