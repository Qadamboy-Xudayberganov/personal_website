import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black m-auto h-20 flex items-center justify-between fixed w-full z-2 max-r900:h-16">
      <a
        className="mx-[100px] max-r900:mx-[40px] max-r600:mx-[20px] max-r450:mx-[15px]"
        href="#main"
      >
        <img
          className="w-20 rounded-[50%] max-r900:w-18 max-r600:w-16"
          src={logo}
          alt=""
        />
      </a>
      <div className="w-[250px] flex justify-between mx-[100px] max-r900:w-[210px] max-r900:mx-[50px] max-r600:w-[180px] max-r600:mx-[30px] max-r450:w-[170px]">
        <a
          className="text-white px-[25px] py-[8px] flex items-center justify-center border-white border rounded-[8px] hover:bg-white hover:text-black transition-all hover:scale-105 max-r900:px-[20px] max-r900:text-[15px] max-r900:py-[6px] max-r600:px-[16px] max-r600:text-[13px] max-r600:py-[4px] max-r600:rounded-[6px] max-r450:px-[10px]"
          href="#aboutMe"
        >
          About me
        </a>
        <a
          className="bg-white px-[25px] py-[8px] flex items-center justify-center rounded-[8px] border-white border hover:bg-transparent hover:text-white transition-all hover:scale-105 max-r900:px-[20px] max-r900:text-[15px] max-r900:py-[6px] max-r600:px-[16px] max-r600:text-[13px] max-r600:py-[4px] max-r600:rounded-[6px] max-r450:px-[10px]"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
