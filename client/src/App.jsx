import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components";
import { CreatePost, Home } from "./pages";

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Outlet />
            </main>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "create-post/",
                element: <CreatePost />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
