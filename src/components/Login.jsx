import { useContext, useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)

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
        setUser(foundUser.username)
      navigate("/home"); // pass username
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="w-[90%] h-[95%] bg-white flex flex-col justify-center items-center gap-8">
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
        className="w-[70%] flex flex-col justify-center items-center gap-4"
        onSubmit={handleLogin}
      >
        <div className="w-[100%] bg-(--base-color) flex justify-start items-center gap-2 px-3 py-2">
          <FiUser />
          <input
            className=""
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
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {message && <p className="text-[red] text-[12px]">{message}</p>}

        <div className="w-[100%] flex flex-col justify-center items-center mt-5">
          <button
            className="w-[100%] bg-[#316b79] text-white px-3 py-1 rounded-[5px]"
            type="submit"
          >
            Login
          </button>
          <p className="text-[12px] text-(--secondary-text-color)">
            Forgot Password?
          </p>
        </div>
      </form>

      <div className="w-[80%] h-[auto] grid grid-cols-3 grid-row-3 gap-2">
        <div className="h-[100px] col-span-2">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/481446328_951382760519562_3962080003825009298_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGIpBD_iRZfjgg3zRUGibIvMQeQ01Mb9zsxB5DTUxv3Ozk5rNWeF4gE_8O2yqiUBAghUOFWu7CvrRFobqpu1iBl&_nc_ohc=-YeOORENMkEQ7kNvwHHiUgP&_nc_oc=AdkJjGn9vrivax8S-nokzrsTTCjjsoMvIgc6k76liZh1lLGJG_QbSHj5PH6dGvRWLRQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=AnYLBO9qGNdW91yIQdKIuA&oh=00_AfjNDESrc_zqm_2M1_v00l8CI_lYkKsM5xEqwNm9ZbCf3Q&oe=69207617"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/481988027_951381547186350_4974365140442232495_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHdSEP-n6Pi7TMVJa3Sz5gMFfWQh3yz2_QV9ZCHfLPb9NQcTQkBGsCSCeE5HV5D2hsw4jV3_BgY8_s6coPRAldG&_nc_ohc=pdMHPx48Aj0Q7kNvwHM9y58&_nc_oc=AdlDhqP8SFY3xTdAwFulmdhJEG0sBJdI_v5svn58cKRQla-nlfqnPjIIbv24QBBZ6xg&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=BB044gkoLxYtrv5c3hQiiQ&oh=00_AfjVQ50EW8gBGIAXEk3oUfCtXuT88Qpi844kKA6903ibQQ&oe=69208E61"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/481111348_948848030773035_4625263371043179602_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGCAlbIxJZECxTUrqf7FnlMCtUSQGCNUBsK1RJAYI1QG-2FwFAczmOmBUK_5Bgx_noJLO5as0Rdz0LT1bTos_Mg&_nc_ohc=T-CK_2h7CQQQ7kNvwHCixMw&_nc_oc=Adlf4PaOYU1ObMsxFgrAWstvHGyXKHobveB9D1OaVsDyURT9K99Pqnti7nA6sHwrhhA&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=cTOX3MGGoPaZggCsWZaUow&oh=00_AfjLAqVATg4khRi81dy83_LFeVuh5fwfqjhe5jY0YH1NrQ&oe=69207C22"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/482218123_951381677186337_7326057902349160620_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEgAPdo8YI6JCMXcc3K5TCWf5AULNaf5eF_kBQs1p_l4WfYNcjmFG5R0yGFrTEFf-tP4ERS16x_VlJ_yvXGd8WR&_nc_ohc=jCkks9sqztsQ7kNvwGTASHK&_nc_oc=AdkHlZBmkXBQqEe66NOZhGMSs1axNp9kCL2JvQCfSiY0tM8EI4W9jAP_I1WLsReHIrI&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=jvN4EfzhA9m8MTFN2G-B3w&oh=00_AfiSU0WA7vxrsj2N7V-idkx5N18nFvKDDkxcGvZA8R5MJQ&oe=69209A29"
            alt=""
          />
        </div>
        <div className="h-[100px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/481467265_951382633852908_5288436725989847091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGXReld3P0dmBNO_3VADTqOSqPJIirCPE5Ko8kiKsI8ToFxPOlTwEZhMPMZL4-Tpi_EYpl3XyLryS_MP22DbQVW&_nc_ohc=ggciens86wEQ7kNvwFcpb8z&_nc_oc=AdnoPXx_EAhdebTf-JfzhKH-Aw4251qja4Yb6J6EZXRxGXVDDo7zUpqXP6G_yVTSfBk&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=N303WXxAuTWfa9O9wDiQhQ&oh=00_AfhdEHK-WI0vZ_yfjANAuotBxTX9_JCgW0q0W7XH8bknuQ&oe=69207361"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
