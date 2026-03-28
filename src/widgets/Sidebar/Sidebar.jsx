import { NavLink } from 'react-router-dom';
import img from '../../assets/profile/Cover.png'
import SendIcon from '../../assets/SendIcon';
import UserIcon from '../../assets/UserIcon';

const navItems = [
    { name: "Profile", path: "/profile", icon: <UserIcon /> },
    { name: "Messages", path: "/direct", icon: <SendIcon /> },
]

const Sidebar = () => {
    return (
        <div>
            <aside className="flex flex-col bg-header-light mt-12 ml-23 mr-8 rounded-lg border border-element-border-light">
                <img src={img} className='rounded-t-lg' />

                <div className='flex flex-col mt-13 ml-8'>
                    <span className='text-primary-light-text text-sm font-medium'>Robert Fox</span>
                    <span className='text-secondary-light-text text-xs'>Software Enginner</span>
                </div>

                <nav className='m-8 mt-10'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="text-nav-light flex justify-items-start gap-2.5 items-center py-3 border-b border-element-border-light">
                                <span>{item.icon}</span>
                                <span className='font-medium text-sm'>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar;