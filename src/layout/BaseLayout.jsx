import Login from "../components/Login";

function BaseLayout() {
    return ( 
        <div className="w-full h-screen bg-(--base-color) flex justify-center items-center">
            <Login />
        </div>
     );
}

export default BaseLayout;