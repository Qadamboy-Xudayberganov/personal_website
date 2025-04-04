const AboutMe = () => {
  return (
    <div className="text-white max-w-[700px] mx-[30px] py-[100px] flex flex-col items-center gap-[50px] max-r600:mx-[20px] max-r600:gap-[40px]">
      <h1 className="font-bold text-[48px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] bg-clip-text text-transparent max-r600:text-[40px]">
        ABOUT ME
      </h1>
      <div className="text-[18px] flex flex-col gap-[30px] text-[E1E1E1] max-r600:text-[15px]">
        <p>
          As a passionate web developer, I specialize in building clean,
          responsive, and user-friendly websites using modern technologies like
          HTML, CSS, JavaScript, React, and Tailwind CSS. With a strong focus on
          performance and design, I turn ideas into interactive digital
          experiences that work flawlessly on all devices.
        </p>
        <p>
          I’m committed to delivering results that not only meet your needs but
          also exceed your expectations. Whether you're a startup, small
          business, or entrepreneur, I can help bring your online vision to life
          — quickly, efficiently, and with a personal touch.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
