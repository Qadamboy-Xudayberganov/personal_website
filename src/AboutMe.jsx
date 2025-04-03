const AboutMe = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] py-[100px] flex flex-col items-center gap-[50px] max-r600:mx-[20px] max-r600:gap-[40px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        ABOUT ME
      </h1>
      <div className="text-[18px] flex flex-col gap-[30px] text-[E1E1E1] max-r600:text-[15px]">
        <p>
          As a passionate software engineer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the dynamic world
          of WebHR, my expertise centers around React Native, where I seamlessly
          blend technology with innovation.
        </p>
        <p>
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
