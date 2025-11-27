import { Link } from "react-router";

function HomeCards({color, link, title, description,icon:Icon}) {
  return (
    <Link to={link} style={{}} className="cursor-pointer w-full h-auto border border-[rgba(0,0,0,0.2)] flex flex-col justify-between items-start p-2 rounded-[10px] hover:shadow-sm">
      <div className="bg-[#e6f6fd] rounded-[50%] w-[35px] h-[35px] flex justify-center items-center">
        <Icon color={color} size={18} />
      </div>
      <div>
        <p style={{color: `${color}`}} className="font-[500]">{title}</p>
        <p className="text-[12px] text-[#646464]">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default HomeCards;
