import { Outlet } from "react-router";
import Login from "../components/Login";

function BaseLayout() {
    return ( 
        <div className="w-full h-auto bg-(--base-color) flex justify-center items-center">
            <Outlet />
        </div>
     );
}

export default BaseLayout;