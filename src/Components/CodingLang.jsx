const CodingLanguage = ({ title }) => {
  return (
    <div className="p-[1px] bg-gradient-to-r from-[#9C83FF] to-[#FF9051] rounded-[22px]">
      <button className="px-[25px] py-[5px] bg-black rounded-[20px] text-[14px] max-r450:text-[13px] max-r450:px-[20px]">{title}</button>
    </div>
  );
};

export default CodingLanguage;
