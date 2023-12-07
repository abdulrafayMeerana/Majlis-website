const HeroSection = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start relative gap-[10px] text-right text-13xl text-white font-cairo lg:w-full md:w-full">
      <div className="relative bg-darkslategray-100 w-full h-[421px] mix-blend-multiply z-[0]">
        <img
          className="absolute top-[1px] left-[1px] w-full h-[420px] object-cover mix-blend-color-dodge"
          loading="lazy"
          alt=""
          src="/hero-img@2x.png"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[65px] left-[0px] w-full flex flex-col items-center justify-start py-0 px-[543px] box-border gap-[32px] z-[1]">
        <h1 className="m-0 relative text-inherit leading-[68.61px] font-medium font-inherit">
          المجلس الوطني الاتحادي
        </h1>
        <div className="relative w-[353px] h-[116px] text-center text-xl">
          <h2 className="m-0 absolute top-[0px] left-[44px] text-inherit leading-[40px] font-normal font-inherit">
            رئيس المجلس: معالي صقر غباش
          </h2>
          <h3 className="m-0 absolute top-[48px] left-[0px] text-lg font-bold font-inherit text-burlywood-100">
            <p className="m-0">{`الأهداف الاستراتيجية: ترسيخ الوحدة الوطنية `}</p>
            <p className="m-0">والمواطنة الصالحة</p>
          </h3>
        </div>
        <div className="relative w-[284px] h-10">
          <button className="cursor-pointer [border:none] p-0 bg-white absolute top-[0px] left-[154px] rounded-[4.95px] w-[130px] h-10">
            <b className="absolute top-[4px] left-[22.6px] text-[13.87px] leading-[54.48px] flex font-cairo text-burlywood-200 text-right items-center w-[84.9px] h-[31px]">
              كلمة الرئيس
            </b>
          </button>
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[0px] left-[0px] rounded-[4.95px] box-border w-[130px] h-10 border-[1px] border-solid border-white">
            <b className="absolute top-[4px] left-[13.5px] text-[13.87px] leading-[54.48px] flex font-cairo text-white text-center items-center justify-center w-[104px] h-[31px]">
              اعضاء المجلس
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
