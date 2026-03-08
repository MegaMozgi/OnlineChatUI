import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen bg-main-page-light">
            <Header />
            <div className="flex grow">
                <Sidebar />
            </div>
        </div>
    )

}

export default MainLayout;