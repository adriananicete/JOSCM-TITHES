import { useContext, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const users = [
    { username: "roselyn", password: "roselyn171014" },
    { username: "jaymar", password: "123456789" },
    { username: "user3", password: "789" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Save username in localStorage
      localStorage.setItem("loggedUser", foundUser.username);

      setUser(foundUser.username);
      navigate("/home");
    } else {
      setMessage("Invalid username or password");
    }
  };

 useEffect(() => {
  const savedUser = localStorage.getItem("loggedUser");
  if (savedUser) setUser(savedUser);
}, []);

  return (
    <div className="w-[90%]  h-[95%] py-[40px] bg-white flex flex-col justify-center items-center gap-8 lg:w-[25%]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <div className="w-[48px] h-[48px] ">
            <img
              src="https://res.cloudinary.com/dks2psaem/image/upload/v1763347986/joscm-logo_jq0zlo.png"
              alt="joscm logo"
            />
          </div>

          <h1 className="text-[30px] font-[600]">JOSCM</h1>
        </div>
        <p>Titles and Offering Report</p>
      </div>

      <form
        action=""
        className="w-[80%] flex flex-col justify-center items-center gap-3"
        onSubmit={handleLogin}
      >
        <div className="w-[100%] bg-(--base-color) flex justify-start items-center gap-2 px-3 py-2">
          <FiUser />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Name"
            autoComplete="on"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-[100%] bg-(--base-color) flex justify-start items-center gap-2 px-3 py-2">
          <TbLockPassword />
          <input
            className="bg-transparent outline-none"
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {message && <p className="text-[red] text-[12px]">{message}</p>}

        <div className="w-[100%] flex flex-col justify-center items-center mt-5 gap-2">
          <button
            className="w-[100%] bg-[#316b79] text-white px-3 py-2 rounded-[5px]"
            type="submit"
          >
            Login
          </button>
          <p className="text-[12px] text-(--secondary-text-color)">
            Forgot Password?
          </p>
        </div>
      </form>

      <div className="w-[80%] h-[300px] grid grid-cols-3 grid-row-3 gap-2">
        <div className="w-full h-[100%] col-span-2">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1764066059/481446328_951382760519562_3962080003825009298_n_jxwu4d.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1764066059/482021280_951381720519666_8277347871723655797_n_g271r9.jpg"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1764066059/503105633_1016291047362066_8986736371845259397_n_yxz98i.jpg"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1764066059/482069629_951382420519596_3289683888348870425_n_mhcztj.jpg"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1764066255/482069667_951381737186331_2862616417781471445_n_vpbtos.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
