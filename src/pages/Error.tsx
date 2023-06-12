import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="w-full h-full grid place-items-center">
            <h1 className="font-bold text-darkest text-8xl">Page Not Found!</h1>
            <Link to="/">Back To Home</Link>
        </div>
    );
};
export default Error;
