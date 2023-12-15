const SectionFive = () => {
  return (
    <>


      {/* ,m  */}
      <div className="bg-aliceblue box-border w-full pb-5">
        <div className="text-center">
          <p className="text-inherit font-semibold font-inherit inline-block text-[20px] text-slategray-200 font-cairo">
            المركز الاعلامي المجلس الوطني الاتحادي
          </p>
        </div>
        <div className="flex justify-center  text-inherit font-semibold font-inherit inline-block text-5xl  font-cairo">
          <div className="flex">
            <p className="text-slategray-200">معرض الصور</p>
            <img
              className="mt-4 w-6 h-6 overflow-hidden"
              alt=""
              src="/pepiconspencilphoto.svg"
            />
          </div>
          <div className="flex pl-2">
            <p className="text-[#B09357]">معرض الفيديو</p>
            <img
              className="mt-4 w-6 h-6 overflow-hidden"
              alt=""
              src="/carbonvideoadd.svg"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:px-[150px] lg:px-2 md:pl-6 lg:pl-0 pl-0">
            <img
              className="relative xl:w-[441.3px] xl:h-[293.7px] lg:w-[320px] md:w-[450px] w-[300px] lg:h-[280px] xl:ml-0 lg:ml-2 md:ml-0"
              alt=""
              src="/group-1171277523.svg"
            />
            <img
              className="relative xl:w-[441.3px] xl:h-[294.6px] hidden  md:block ml-0 lg:-ml-5 xl:ml-0 md:ml-[100px] lg:w-[380px] lg:h-[280px]"
              alt=""
              src="/group-1171277508.svg"
            />

            <img
              className="relative mt-3 lg:mt-0 xl:w-[441.5px] xl:h-[293.7px] lg:w-[320px] md:w-[450px] w-[300px] lg:h-[280px]"
              alt=""
              src="/group-1171277522.svg"
            />
          </div>
        </div>
      </div>

    </>
  );
};

export default SectionFive;
