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
            <div className="w-full h-full flex justify-stretch">
                <Sidebar />
                <div className="h-[calc(100%-80px)] w-full">{children}</div>
            </div>
        </div>
    );
};
export default Layout;
