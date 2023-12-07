const SectionFive = () => {
  return (
    <section className="self-stretch bg-aliceblue flex flex-col items-center justify-start py-14 px-[124px] box-border gap-[40px] min-h-[558.5599975585938px] text-center text-5xl text-slategray-200 font-cairo">
      <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit inline-block w-[413px]">
        المركز الاعلامي المجلس الوطني الاتحادي
      </h1>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[32px] min-h-[366.55999755859375px] text-base text-darkgray">
        <div className="w-[308px] flex flex-row items-end justify-start gap-[48px]">
          <div className="relative w-[340px] h-10">
            <div className="absolute top-[0px] left-[0px] leading-[40px]">
              معرض الصور
            </div>
            <img
              className="absolute top-[8px] left-[90px] w-6 h-6 overflow-hidden"
              alt=""
              src="/pepiconspencilphoto.svg"
            />
          </div>
          <div className="relative w-36 h-10 text-burlywood-200">
            <div className="absolute top-[39px] left-[-1px] box-border w-[146px] h-0.5 border-t-[2px] border-solid border-burlywood-200" />
            <div className="absolute top-[0px] left-[8px] w-32 h-10">
              <div className="absolute top-[0px] left-[0px] leading-[40px] font-semibold">
                معرض الفيديو
              </div>
              <img
                className="absolute top-[8px] left-[104px] w-6 h-6 overflow-hidden"
                alt=""
                src="/carbonvideoadd.svg"
              />
            </div>
          </div>
          <div className="relative box-border w-[301px] h-px border-t-[1px] border-solid border-gainsboro"/>
        </div>
        <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] min-h-[294.55999755859375px]">
          <img
            className="relative w-[441.3px] h-[293.7px]"
            alt=""
            src="/group-1171277523.svg"
          />
          <img
            className="relative w-[247px] h-[294.6px]"
            alt=""
            src="/group-1171277508.svg"
          />
          <img
            className="relative w-[441.5px] h-[293.7px]"
            alt=""
            src="/group-1171277522.svg"
          />
        </section>
      </div>
    </section>
  );
};

export default SectionFive;
