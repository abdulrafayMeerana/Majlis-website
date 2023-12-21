const ServicesSection = () => {
  return (
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[0px] box-border gap-[113px] min-h-[265.3299865722656px] text-left text-5xl text-burlywood-200 font-cairo">
      <div className="flex-1 flex flex-col items-center justify-start gap-[32px] min-h-[235px]">
        <h1 className="m-0 relative text-inherit leading-[58.85px] font-semibold font-inherit">
          الخدمات الالكترونية
        </h1>


        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] md:gap-[70px] text-center text-lg">
            <div className="relative rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <h3 className="m-0 absolute top-[96px] left-[29px] text-inherit leading-[24px] font-semibold font-inherit">
                طلب شراكة
              </h3>
              <img
                className="absolute top-[28px] left-[45px] w-12 h-[42px] overflow-hidden"
                alt=""
                src="/print.svg"
              />
            </div>
            <div className="relative rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <h3 className="m-0 absolute top-[84px] left-[35px] text-inherit leading-[24px] font-semibold font-inherit">
                <p className="m-0">{`طلب زيارة `}</p>
                <p className="m-0">المجلس</p>
              </h3>
              <img
                className="absolute top-[24px] left-[48px] w-12 h-12 object-cover"
                alt=""
                src="/meeting@2x.png"
              />
            </div>
            <div className="relative  rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <h3 className="m-0 absolute top-[96px] left-[19px] text-inherit leading-[24px] font-semibold font-inherit">
                بواية الموردين
              </h3>
              <img
                className="absolute top-[24px] left-[48px] w-12 h-12 object-cover"
                alt=""
                src="/import-2-1@2x.png"
              />
            </div>
            <div className="relative rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <h3 className="m-0 absolute top-[96px] left-[32px] text-inherit leading-[24px] font-semibold font-inherit">
                المناقصات
              </h3>
              <img
                className="absolute h-[29.86%] w-[31.18%] top-[18.06%] right-[34.1%] bottom-[52.08%] left-[34.72%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-1755.svg"
              />
            </div>
            <div className="relative rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <img
                className="absolute top-[24px] left-[48px] w-12 h-12 object-cover"
                alt=""
                src="/complaint@2x.png"
              />
              <h3 className="m-0 absolute top-[96px] left-[37px] text-inherit leading-[24px] font-semibold font-inherit">
                الشكاوى
              </h3>
            </div>
            <div className="relative  rounded bg-white shadow-[0px_5px_25px_rgba(0,_0,_0,_0.1)] w-36 h-36">
              <h3 className="m-0 absolute top-[84px] left-[34px] text-inherit leading-[24px] font-semibold font-inherit">
                <p className="m-0">تواصل مع</p>
                <p className="m-0"> الاعضاء</p>
              </h3>
              <img
                className="absolute top-[24px] left-[48px] w-12 h-12 object-cover"
                alt=""
                src="/membercard@2x.png"
              />
            </div>
        </div>
      </div>

      <img
        className="relative w-4 right-10 h-[265.3px] hidden lg:block"
        alt=""
        src="/group-1171277507.svg"
      />
    </div>
  );
};

export default ServicesSection;
