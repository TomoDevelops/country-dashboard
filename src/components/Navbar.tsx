import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    return (
        <header className="w-full flex items-center h-12 fixed z-40 bg-lightest bg-opacity-30 shadow-md">
            <div className="w-full h-full mx-12 flex justify-between">
                <h1 className="flex items-center">
                    <img
                        src="https://img.logoipsum.com/297.svg"
                        className="w-28 h-12"
                    />
                </h1>
                <Link
                    to="/profile"
                    className="flex justify-center items-center gap-2"
                >
                    <VscAccount className="w-6 h-6" />
                    Profile
                </Link>
            </div>
        </header>
    );
};
export default Navbar;
