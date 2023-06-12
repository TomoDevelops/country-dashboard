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
            <div className="w-full h-[calc(100%-96px)] ">
                <Sidebar />
                <div className="h-full w-[calc(100%-256px)] ml-64 fixed top-24 overflow-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Layout;
