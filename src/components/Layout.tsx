import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-full">
            <Navbar />
            <div className="w-full h-[calc(100%-48px)] ">
                <Sidebar />
                <div className="h-full w-[calc(100%-208px)] ml-52 fixed top-14 overflow-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Layout;
