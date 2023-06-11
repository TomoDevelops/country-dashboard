import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
    return (
        <div className="h-full flex">
            <Sidebar />
            <div className="w-full">
                <Navbar />
                <div>
                    <h1>Profile Page</h1>
                </div>
            </div>
        </div>
    );
};
export default Profile;
