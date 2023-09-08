import ActiveNav from "../../Shared/ActiveNav";

const NavBar = () => {
    const navItems = <>
    <ActiveNav to='/'>Home</ActiveNav>
    <ActiveNav to='/about'>About</ActiveNav>
    <ActiveNav to='/skills'>Skills</ActiveNav>
    </>
    return (
        <div>
            <div className="navbar bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline border-orange-500 hover:bg-orange-500 text-uppercase  text-white ">
                        <a href="https://drive.google.com/uc?export=download&id=1_pW5UmI4itjKKIjGLP6pKiWavUF2XLaC"> Download cv</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;