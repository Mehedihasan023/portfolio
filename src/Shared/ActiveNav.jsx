
import { NavLink } from "react-router-dom";
const ActiveNav = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "border-b-4 border-orange-500 px-3 text-white mr-3 ml-3 mt-2 ease-in duration-300" :
                    "border-b-4 border-slate-600 px-3 text-white mr-3 ml-3 mt-2 ease-in duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveNav;