import UserIcon from "../../assets/UserIcon";

const Header = () => {
    return (
        <div className="flex items-center bg-header-light justify-between py-4 px-24 w-screen border border-[#ECF0F5]">
            <h4 className="text-xl text-primary-light-text font-extrabold">Social</h4>
            <div className="flex flex-row gap-4">
                <span className="text-secondary-light-text font-medium text-sm cursor-pointer">Logout</span>
                <UserIcon className={"text-secondary-light-text"}/>
            </div>
        </div>
    );
}

export default Header;