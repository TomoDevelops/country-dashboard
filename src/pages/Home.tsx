import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="h-full flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div>
                    <h1>Home Page</h1>
                </div>
            </div>
        </div>
    );
};
export default Home;
