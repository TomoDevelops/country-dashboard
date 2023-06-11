import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const About = () => {
    return (
        <div className="h-full flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div>
                    <h1>About Page</h1>
                </div>
            </div>
        </div>
    );
};
export default About;
