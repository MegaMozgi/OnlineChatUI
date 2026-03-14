import Header from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/Sidebar";

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col h-screen bg-main-page-light">
            <Header />
            <div className="flex grow items-start">
                <Sidebar />
                <div className="grow">
                    {children}
                </div>
            </div>
        </div>
    )

}

export default MainLayout;