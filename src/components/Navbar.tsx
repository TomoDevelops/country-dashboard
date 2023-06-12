import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    return (
        <header className="w-full flex items-center h-24 fixed z-40 bg-white">
            <div className="w-full mx-12 flex justify-between">
                <h1>
                    <img src="https://img.logoipsum.com/297.svg" />
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
