import { Link, useLocation } from "react-router-dom";
import { VscHome, VscAccount, VscGear, VscQuestion } from "react-icons/vsc";

const Sidebar = () => {
    const currentPath = useLocation().pathname;

    return (
        <aside className="h-[calc(100%-96px)] bg-accent w-64 flex justify-end">
            <div className="flex flex-col h-full w-full ml-8 mr-2 gap-8 py-8 text-slate-500">
                <Link
                    to="/"
                    className={`flex gap-2 items-center py-2 px-4 rounded-full transition-all ${
                        currentPath === "/"
                            ? ""
                            : "hover:bg-lightest hover:bg-opacity-50"
                    } ${
                        currentPath === "/"
                            ? "bg-light bg-opacity-75 text-darkest"
                            : "bg-none"
                    }`}
                >
                    <VscHome /> Home
                </Link>
                <Link
                    to="/profile"
                    className={`flex gap-2 items-center py-2 px-4 rounded-full transition-all ${
                        currentPath === "/profile"
                            ? ""
                            : "hover:bg-lightest hover:bg-opacity-50"
                    }  ${
                        currentPath === "/profile"
                            ? "bg-light bg-opacity-75 text-darkest"
                            : "bg-none"
                    }`}
                >
                    <VscAccount />
                    Profile
                </Link>
                <Link
                    to="/setting"
                    className={`flex gap-2 items-center py-2 px-4 rounded-full transition-all ${
                        currentPath === "/setting"
                            ? ""
                            : "hover:bg-lightest hover:bg-opacity-50"
                    }  ${
                        currentPath === "/setting"
                            ? "bg-light bg-opacity-75 text-darkest"
                            : "bg-none"
                    }`}
                >
                    <VscGear />
                    Setting
                </Link>
                <Link
                    to="/about"
                    className={`flex gap-2 items-center py-2 px-4 rounded-full transition-all ${
                        currentPath === "/about"
                            ? ""
                            : "hover:bg-lightest hover:bg-opacity-50"
                    } ${
                        currentPath === "/about"
                            ? "bg-light bg-opacity-75 text-darkest"
                            : "bg-none"
                    }`}
                >
                    <VscQuestion />
                    About
                </Link>
            </div>
        </aside>
    );
};
export default Sidebar;
