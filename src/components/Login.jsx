import { FiUser } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";

function Login() {
  return (
    <div className="w-[90%] h-[95%] bg-white flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
            <div className="w-[48px] h-[48px] ">
                <img src="https://res.cloudinary.com/dks2psaem/image/upload/v1763347986/joscm-logo_jq0zlo.png" alt="joscm logo" />
            </div>

            <h1 className="text-[30px] font-[600]">JOSCM</h1>
        </div>
        <p>Titles and Offering Repport</p>
      </div>

      <form
        action=""
        className="w-[70%] flex flex-col justify-center items-center gap-4"
      >
        <div className="w-[100%] bg-(--base-color) flex justify-start items-center gap-2 px-3 py-2">
          <FiUser />
          <input className="" type="text" placeholder="Name" autoComplete="on" />
        </div>

        <div className="w-[100%] bg-(--base-color) flex justify-start items-center gap-2 px-3 py-2">
          <TbLockPassword />
          <input type="password" placeholder="Password" autoComplete="on" />
        </div>

        <div className="w-[100%] flex flex-col justify-center items-center mt-5">
          <button className="w-[100%] bg-[#316b79] text-white px-3 py-1 rounded-[5px]" type="submit">Login</button>
          <p className="text-[12px] text-(--secondary-text-color)">
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
