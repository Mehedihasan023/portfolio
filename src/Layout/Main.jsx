import { Outlet } from "react-router-dom";

import NavBar from "../pages/NavBar/NavBar";

const Main = () => {
    return (
        <div className="scroll-smooth">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;