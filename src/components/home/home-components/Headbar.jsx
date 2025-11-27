function Headbar({title, text}) {
    return ( 
        <div className="w-full h-auto flex justify-between items-start">
        <div className="w-auto">
          <h1 className="text-[20px] font-[500]">
            {title}
          </h1>
          <p className="text-[#656565] text-[14px]">
            {text}
          </p>
        </div>

        <div className="w-[52px] h-[52px] rounded-[50%] bg-[#fff]">
          <img
            className="w-[100%] h-[100%] object-cover "
            src="https://res.cloudinary.com/dks2psaem/image/upload/v1763347986/joscm-logo_jq0zlo.png"
            alt=""
          />
        </div>
      </div>
     );
}

export default Headbar;