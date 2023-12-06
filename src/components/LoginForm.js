const LoginForm = () => {
  return (
    <header className="self-stretch flex flex-row items-end justify-start py-0 pr-[42px] pl-0 gap-[59px] text-left text-smi text-white font-cairo">
      <div className="relative w-[1151px] h-[133px]">
        <div className="absolute top-[53px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
          <img
            className="relative w-[1151px] h-20 z-[0]"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute my-0 mx-[!important] top-[28px] left-[131px] w-[893.7px] h-[23.1px] z-[1]">
            <div className="absolute top-[0px] left-[0px] w-[561px] h-[20.7px]">
              <div className="absolute h-full w-[14.97%] top-[0%] left-[85.03%] font-medium inline-block">
                العمل البرلماني
              </div>
              <div className="absolute h-full w-[16.76%] top-[0%] left-[32.09%] font-medium inline-block">
                المعرفه البرلمانيه
              </div>
              <img
                className="absolute top-[8.1px] left-[162px] w-3 h-3 overflow-hidden"
                alt=""
                src="/chevrondown.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-[123px] h-[20.7px]">
                <div className="absolute h-full w-[86.99%] top-[0%] left-[13.01%] font-medium inline-block">
                  الخدمات الاليكترونية
                </div>
                <img
                  className="absolute top-[8.1px] left-[0px] w-3 h-3 overflow-hidden"
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[749px] w-[83px] h-[22.1px]">
              <div className="absolute h-[93.67%] w-[78.31%] top-[0%] left-[21.69%] font-medium inline-block">
                عن المجلس
              </div>
              <img
                className="absolute top-[10.1px] left-[0px] w-3 h-3 overflow-hidden"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="absolute h-[89.61%] w-[10.82%] top-[0%] left-[74.4%] font-medium inline-block">
              الجلسات و اللجان
            </div>
            <img
              className="absolute top-[9.1px] left-[601px] w-3 h-3 overflow-hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <img
              className="absolute top-[10.1px] left-[459px] w-3 h-3 overflow-hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="absolute top-[1px] left-[314px] w-[105px] h-[22.1px]">
              <div className="absolute h-[93.67%] w-[82.86%] top-[0%] left-[17.14%] font-medium inline-block">
                الاعلام البرلماني
              </div>
              <img
                className="absolute top-[10.1px] left-[0px] w-3 h-3 overflow-hidden"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[140.7px] flex flex-row items-center justify-start gap-[29px] text-xs text-darkslategray-200">
          <button className="cursor-pointer [border:none] p-0 bg-darkslategray-100 relative rounded-8xs w-[116px] h-10">
            <b className="absolute top-[4px] left-[16px] text-sm leading-[55px] flex font-cairo text-white text-right items-center w-[84.9px] h-[31px]">
              تسجيل دخول
            </b>
          </button>
          <div className="relative inline-block w-[45.1px] h-[23.1px] shrink-0">
            اتصل بنا
          </div>
          <div className="relative inline-block w-[45.1px] shrink-0">
            الوظائف
          </div>
          <div className="relative inline-block w-[74.1px] shrink-0">
            بوابة الموردين
          </div>
          <div className="relative inline-block w-[108.5px] shrink-0">
            المشاركة المجتمعية
          </div>
        </div>
      </div>
      <img
        className="relative w-[182.2px] h-[120px] object-cover"
        alt=""
        src="/image-71@2x.png"
      />
    </header>
  );
};

export default LoginForm;
