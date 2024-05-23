import { NavLink, Outlet } from "react-router-dom"
import { IconHome } from "../components/icons/IconHome";
import { IconMap } from "../components/icons/IconMap";
import { IconUser } from "../components/icons/IconUser";


const user = "user";
const navLinks = [
    {
        to: '/',
        label: 'Inicio',
        icon: IconHome
    },
    {
        to: '/cerca',
        label: 'Cerca',
        icon: IconMap
    },
    {
        to: `/${user}`,
        label: 'Perfil',
        icon: IconUser
    }

]
const Root = () => {
    return (
        <div className="flex">

            <div className="flex flex-col gap-3  top-16 px-2 pt-5 w-64 h-[calc(100vh)] border-r-2 border-neutral-200">
                <NavLink
                    to={'/'}
                    className="                                `bg-white  hover:bg-neutral-100 py-2 w-auto rounded 
                             text-neutral-700 justify-start  flex  items-center gap-3"
                >

                    <span className="text-neutral-900 flex items-center px-4 py-2 font-semibold text-lg ">Adventure Panamá</span>
                </NavLink>
                {
                    navLinks.map(({ to, label, icon }) => (

                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `bg-white  hover:bg-neutral-100 pl-2 py-2 w-auto rounded 
                             text-neutral-700 justify-start  flex  items-center gap-3
                         ${isActive ? 'font-bold bg-neutral-100' : ''}`}
                        >
                            {icon()}
                            {label}
                        </NavLink>

                    )
                    )
                }


            </div>
            <Outlet />
        </div>
    )
}

export default Root