const Homepage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-end justify-start gap-[49px]">
      <section className="self-stretch overflow-hidden flex flex-col items-end justify-start pt-[26px] px-0 pb-0">
        {/* Navbar */}
        <header className="self-stretch flex flex-row items-end justify-between lg:justify-start py-0 pr-[42px] pl-0 gap-[59px] text-left text-smi text-white font-cairo">
          <div className="relative w-[1151px] h-[133px] hidden lg:block">
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
            className="relative w-[182.2px] h-[120px] object-cover hidden lg:block"
            alt=""
            src="/image-71@2x.png"
          />
          <div className="w-[68px] h-[48px]">
            <div className="relative lg:hidden pl-[42px]">
              <img className="w-[24px] h-[24px]" src="/Vector.png" />
            </div>
          </div>

          <div className="relative lg:hidden">
            <img className="w-[68px] h-[48px]" src="/logo-sm.png" />
          </div>
        </header>

        {/* Hero Section */}
        <div className="self-stretch flex flex-col items-center justify-start relative gap-[10px] text-right text-[14.44px] md:text-[18.465px] lg:text-13xl text-white font-cairo lg:w-full md:w-full">
          <div className="relative bg-darkslategray-100 w-full h-[200.09px] md:h-[242.374px] lg:h-[421px] mix-blend-multiply z-[0]">
            <img
              className="absolute top-[1px] left-[1px] w-full h-[200.09px] md:h-[242.374px]  lg:h-[420px] object-cover mix-blend-color-dodge"
              loading="lazy"
              alt=""
              src="/hero-img@2x.png"
            />
          </div>
          <div className="my-0 mx-[!important] absolute lg:top-[65px] left-[0px] w-full flex flex-col items-center justify-start py-0 box-border lg:gap-[32px] z-[1]">
            <h1 className="m-0 relative text-inherit leading-[68.61px] font-medium font-inherit">
              المجلس الوطني الاتحادي
            </h1>
            <div className="relative w-[200px] md:w-[200px] lg:w-[353px] h-[116px] text-center ">
              <h2 className="m-0 absolute top-[0px] left-[44px] text-[9.028px] md:text-[11.542] lg:text-xl leading-[40px] font-normal font-inherit">
                رئيس المجلس: معالي صقر غباش
              </h2>
              <h3 className="m-0 relative top-[48px] left-[0px] text-[8.125px] md:text-[10.387px] lg:text-lg font-bold font-inherit text-burlywood-100">
                <p className="m-0">{`الأهداف الاستراتيجية: ترسيخ الوحدة الوطنية `}</p>
                <p className="m-0">والمواطنة الصالحة</p>
              </h3>
            </div>
            <div className="relative w-[284px] h-10 hidden lg:block">
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
      </section>
      <main className="self-stretch overflow-hidden flex flex-col items-start justify-end gap-[50px]">
        {/* Services Section */}
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
        <main className="self-stretch flex flex-col items-center justify-start py-0 px-px box-border gap-[61px] min-h-[3410.159912109375px]">
          {/* Section One */}
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-right text-xs text-burlywood-200 font-cairo">
            <section className="w-[1191px] flex flex-col items-center justify-center text-center text-5xl text-burlywood-200 font-cairo">
              <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit">
                {" "}
                أخبار المجلس الوطني الاتحادي
              </h1>
            </section>
            <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center gap-[57px]">
              <div className="relative w-[255px] h-[316px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] hover:bg-oldlace overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-63346084@2x.png"
                />
                <div className="absolute top-[171px] left-[15.8px] w-[214.8px] h-[120px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.4px)] text-sm leading-[20px] font-semibold inline-block w-[214.8px]">
                    معالي صقر غباش يبحث تعزيز العلاقات الثنائية مع سفير جمهورية إيران
                    لدى الدولة
                  </div>
                  <b className="absolute top-[102px] left-[calc(50%_+_73.5px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[68px] left-[74.1px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[316px] hidden lg:block shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] hover:bg-oldlace overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <div className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px]" />
                <div className="absolute top-[171px] left-[16px] w-[214.9px] h-[119px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.45px)] text-sm tracking-[0.15px] leading-[135%] font-semibold inline-block w-[214.8px]">
                    <p className="m-0">
                      صقر غباش يترأس وفد المجلس الوطني الاتحادي في زيارة رسمية
                    </p>
                    <p className="m-0">إلى جمهورية الصين الشعبية</p>
                  </div>
                  <b className="absolute top-[101px] left-[calc(50%_+_73.55px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[68px] left-[74px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                    <img
                      className="absolute top-[-239px] left-[-90px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                      alt=""
                      src="/image-63346087@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[316px] hidden lg:block shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] hover:bg-oldlace overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-63346084@2x.png"
                />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-[8.77px] rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-83@2x.png"
                />
                <div className="absolute top-[171px] left-[14.8px] w-[214.8px] h-[119px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.4px)] text-sm tracking-[0.15px] leading-[143%] font-semibold inline-block w-[214.8px]">
                    الأمانة العامة للمجلس الوطني الاتحادي تشارك في الاجتماع السنوي
                    لجمعية الأمناء للبرلمانات
                  </div>
                  <b className="absolute top-[101px] left-[calc(50%_+_73.5px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[68px] left-[74.1px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[318px] hidden lg:block shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] hover:bg-oldlace overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_0px_0px_rgba(130,_130,_130,_0.15),_0px_5px_20px_rgba(0,_0,_0,_0.2)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-63346084@2x.png"
                />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-85@2x.png"
                />
                <div className="absolute top-[172px] left-[11px] w-[220px] h-[118px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_110px)] text-sm leading-[150%] font-semibold inline-block w-[220px]">
                    <p className="m-0">نائب رئيس الجمهورية الصيني</p>
                    <p className="m-0"> يستقبل معالي صقر غباش</p>
                  </div>
                  <b className="absolute top-[100px] left-[calc(50%_+_76px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[67px] left-[79px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Two */}
          <section className="self-stretch flex flex-col items-center justify-start min-h-[1277px] text-center text-5xl text-burlywood-200 font-cairo">
            <h1 className="m-0 relative text-inherit leading-[40px] pb-10 font-semibold font-inherit">
              استراتيجية المجلس الوطني الاتحادي
            </h1>
            <section className="self-stretch bg-aliceblue overflow-hidden flex flex-row flex-wrap items-center justify-center py-14 px-[25px] lg:px-[125px] box-border gap-[50px] min-h-[624px] text-right text-xl text-burlywood-200 font-cairo">
              <div className="relative w-[609px] h-[356px] overflow-hidden shrink-0 hidden lg:block">
                <div className="absolute top-[29px] left-[29.1px] rounded-[8.37px] bg-burlywood-200 w-[580.3px] h-[327px]" />
                <img
                  className="absolute top-[0px] left-[0px] w-[577px] h-[323.7px] object-cover "
                  alt=""
                  src="/image-74@2x.png"
                />
              </div>
              <div className="flex flex-1 flex-col items-end lg:items-end">
                <h2 className="leading-[40px] font-inherit text-inherit font-bold inline-block">
                  الرسالة
                </h2>
                <div className="leading-[155%] text-slategray-100 text-base">
                  <p className="">
                    تمثيل شعب الاتحاد من خلال أداء متميز لأدواره التشريعية والرقابية
                    والبرلمانية كسلطة داعمة ومساندة ومرشدة للسلطة التنفيذية وتعزيز
                    المشاركة السياسية للمواطنين.
                  </p>
                  <p className="text-lg font-medium">
                    القيم
                  </p>
                  <ul className="">
                    <span>الوحدة الوطنية</span><br />
                    <span>المشاركة</span><br />
                    <span>الشفافية</span><br />
                    <span>الاستقلالية</span><br />
                    <span>المصداقية</span><br />
                  </ul>
                  <p className="text-lg font-medium">
                    الأهداف الاستراتيجية
                  </p>
                  <ul className="">
                    <span>ترسيخ الوحدة الوطنية والمواطنة الصالحة</span>
                    <span>
                      تعزيز المنظومة التشريعية بما يتوافق مع أفضل المعايير العالمية
                    </span>
                    <span>
                      الارتقاء بالدور الرقابي للمجلس بما يساهم في تحقيق رؤية
                      الإمارات
                    </span>
                    <span>
                      دعم السياسية الخارجية للدولة من خلال دور ريادي متميز
                      للدبلوماسية البرلمانية
                    </span>
                    <span>تعزيز التواصل والمشاركة المجتمعية الفاعلة</span>
                    <span>
                      تطوير القدرات الداخلية لأجهزة المجلس لتحقيق أداء برلماني
                      متميز
                    </span>
                  </ul>
                  <div />
                </div>
              </div>
            </section>
            <section className="self-stretch bg-burlywood-300 overflow-hidden flex flex-row flex-wrap items-center justify-center py-14 px-[25px] lg:px-[125px] gap-[50px] box-border min-h-[624px] text-right text-base text-burlywood-200 font-cairo">
              <div className="flex flex-1 flex-col items-end lg:items-end">
                <h2 className="leading-[40px] text-xl font-bold inline-block">
                  <b>الرؤية</b>
                </h2>

                <div className="leading-[155%] text-slategray-100 text-base">
                  <p className="text-slategray-100">
                    <span>مجلس وطني فاعل يشارك في تحقيق تطلعات شعب الاتحاد</span>
                  </p>
                  <p className="text-lg">
                    <span className="font-medium text-burlywood-200">الرسالة</span>
                  </p>
                  <p className="">
                    تمثيل شعب الاتحاد من خلال أداء متميز لأدواره التشريعية والرقابية
                    والبرلمانية كسلطة داعمة ومساندة ومرشدة للسلطة التنفيذية وتعزيز
                    المشاركة السياسية للمواطنين.
                  </p>
                  <p className=" text-xl text-burlywood-200">
                    <b>القيم</b>
                  </p>
                  <ul className="text-slategray-100">
                    <span>الوحدة الوطنية</span><br></br>
                    <span>المشاركة</span><br></br>
                    <span>الشفافية</span><br></br>
                    <span>الاستقلالية</span><br></br>
                    <span>المصداقية</span><br></br>
                  </ul>
                  <div />
                </div>
              </div>
              <div className="relative w-[609px] h-[416px] overflow-hidden shrink-0 hidden lg:block">
                <div className="absolute top-[38.3px] left-[29.1px] rounded-[8.37px] bg-burlywood-200 w-[580.3px] h-[377.7px]" />
                <img
                  className="absolute top-[0px] left-[0px] rounded-lg w-[577px] h-[384.3px] object-cover"
                  alt=""
                  src="/image-73@2x.png"
                />
              </div>
            </section>
          </section>

          {/* Section Three */}
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px] text-end text-5xl text-burlywood-200 font-cairo">
            <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit inline-block w-[317px]">
              {" "}
              أجندة المجلس الوطني الاتحادي
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[40px]">
              <div className="relative  w-[255px] h-[314px] hover:bg-oldlace">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-633460841@2x.png"
                />
                <div className="absolute top-[180px] left-[14.8px] w-[214.8px] h-[110px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.4px)] text-sm tracking-[0.15px] leading-[150%] font-semibold inline-block w-[214.8px]">
                    <p className="m-0">{`الجلسة الرابعة عشرة (الختامية) : `}</p>
                    <p className="m-0">مناقشة مشروعات قوانين</p>
                  </div>
                  <b className="absolute text-[14px] top-[92px] left-[calc(50%_+_73.5px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[58px] left-[74.1px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute text-[12px] top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[314px] hover:bg-oldlace">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-633460841@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[157px] object-cover"
                  alt=""
                  src="/image-63346085@2x.png"
                />
                <div className="absolute top-[180px] left-[14.8px] w-[214.8px] h-[110px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.4px)] text-sm tracking-[0.15px] leading-[150%] font-semibold inline-block w-[214.8px]">
                    اجتماع: لجنة الشئون المالية والاقتصادية والصناعية
                  </div>
                  <b className="absolute text-[14px] top-[92px] left-[calc(50%_+_73.5px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[58px] left-[74.1px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute text-[12px] top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[314px] hover:bg-oldlace">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-633460841@2x.png"
                />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-[8.77px] rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-831@2x.png"
                />
                <div className="absolute top-[180px] left-[14.8px] w-[214.8px] h-[110px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_107.4px)] text-sm tracking-[0.15px] leading-[150%] font-semibold inline-block w-[214.8px]">
                    اجتماع: لجنة الشئون المالية والاقتصادية والصناعية
                  </div>
                  <b className="absolute text-[14px] top-[92px] left-[calc(50%_+_73.5px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[58px] left-[74.1px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute text-[12px] top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[255px] h-[314px] hover:bg-oldlace">
                <div className="absolute top-[0px] left-[calc(50%_-_127.5px)] rounded-[5.97px] shadow-[0px_0px_0px_rgba(130,_130,_130,_0.15),_0px_5px_20px_rgba(0,_0,_0,_0.2)] w-[255px] h-[314px]" />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-633460841@2x.png"
                />
                <img
                  className="absolute top-[1px] left-[0px] rounded-t-lg rounded-b-none w-[255px] h-[155px] object-cover"
                  alt=""
                  src="/image-851@2x.png"
                />
                <div className="absolute top-[180px] left-[11px] w-[220px] h-[110px]">
                  <div className="absolute top-[0px] left-[calc(50%_-_110px)] text-sm leading-[150%] font-semibold inline-block w-[220px]">
                    الجلسة الثالثة عشرة : مناقشة مشروع تعديل اللائحة الداخلية للمجلس
                  </div>
                  <b className="absolute text-[14px] top-[92px] left-[calc(50%_+_76px)] leading-[146.84%] inline-block text-left w-[33.9px]">
                    المزيد
                  </b>
                  <div className="absolute top-[58px] left-[79px] w-[140.7px] h-[18px] text-slategray-200">
                    <div className="absolute text-[12px] top-[0px] left-[calc(50%_-_70.35px)] tracking-[0.15px] leading-[150%] font-semibold inline-block w-[119.6px]">
                      الاربعاء 05 يوليو 2023
                    </div>
                    <img
                      className="absolute top-[3px] left-[128px] w-[12.7px] h-3 overflow-hidden"
                      alt=""
                      src="/formkitdate.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Four */}
          <div>
            <section className="self-stretch bg-blak flex flex-col items-center justify-center text-center text-5xl text-burlywood-200 font-cairo">
              <h1 className="m-0  relative text-inherit leading-[40px] font-semibold font-inherit inline-block w-64 h-10 shrink-0">
                الدستور واللوائح والانظمة
              </h1>
            </section>

            <div className="font-cairo bg-red00 text-white grid xl:grid-cols-6 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 ">
              {/* 1 */}
              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    <p className="m-0">نظام لجان</p>
                    <p className="m-0"> المجلس الوطني</p>
                  </div>
                </div>
              </div>
              {/* 2  */}

              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    <p className="m-0">نظام عمل</p>
                    <p className="m-0">رؤساء اللجان</p>
                  </div>
                </div>
              </div>
              {/* 3 */}

              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    <p className="m-0">نظام عمل</p>
                    <p className="m-0"> هيئة المكتب</p>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    <p className="m-0">النظام الداخلي</p>
                    <p className="m-0">للشعبة البرلمانية</p>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    <p className="m-0">اللائحة الداخلية</p>
                  </div>
                </div>
              </div>
              {/* 6 */}

              <div className="relative">
                <img
                  className="relative rounded-lg border-2 md:w-[250px] md:h-[250px] h-[160px] w-[160px] opacity-100"
                  alt=""
                  src="/image-92@2x.png"
                />
                <div className="absolute md:top-20 md:left-[52px] top-[50px] left-[25px] grid md:h-[80px] md:w-[140px] h-[60px] w-[110px] rounded-[8px] bg-burlywood-200 leading-[28px] font-semibold ">
                  <div className="justify-self-center  place-self-center text-center">
                    الدستور
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section Five */}
          <div className="bg-aliceblue box-border w-full pb-5">
            <div className="text-center">
              <p className="text-inherit font-semibold font-inherit inline-block text-[20px] text-slategray-200 font-cairo">
                المركز الاعلامي المجلس الوطني الاتحادي
              </p>
            </div>
            <div className="flex justify-center  text-inherit font-semibold font-inherit text-5xl  font-cairo">
              <div className="flex">
                <p className="text-slategray-200">معرض الصور</p>
                <img
                  className="mt-5 pl-1 w-6 h-6 overflow-hidden"
                  alt=""
                  src="/pepiconspencilphoto.svg"
                />
              </div>
              <div className="flex pl-8">
                <p className="text-[#B09357]">معرض الفيديو</p>
                <img
                  className="mt-5 pl-1 w-6 h-6 overflow-hidden"
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

          {/* Section Six */}
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-8 box-border gap-[40px] min-h-[169.58999633789062px] text-center text-5xl text-burlywood-200 font-cairo">
            <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit">
              روابط مفيدة
            </h1>
            <section className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[36px] min-h-[89.58999633789062px]">
              <img
                className="relative rounded-[4.07px] w-[159.2px] h-[89.6px] object-cover"
                alt=""
                src="/image-63346080@2x.png"
              />
              <div className="relative box-border w-px h-[90.6px] border-r-[1px] border-solid border-silver" />
              <img
                className="relative w-[110.1px] h-[89.6px] object-cover"
                alt=""
                src="/image-63346077@2x.png"
              />
              <div className="relative box-border w-px h-[90.6px] border-r-[1px]  hidden md:block border-solid border-silver" />
              <img
                className="relative w-[194.7px] h-[89.6px] object-cover"
                alt=""
                src="/image-63346081@2x.png"
              />
              <div className="relative box-border w-px h-[90.6px] border-r-[1px] hidden md:block border-solid border-silver" />
              <img
                className="relative w-[305.4px] h-[31.1px] object-cover"
                alt=""
                src="/image-63346078@2x.png"
              />
              <div className="relative box-border w-px h-[90.6px] border-r-[1px] hidden md:block border-solid border-silver" />
              <img
                className="relative w-[305.4px] h-[71.3px] object-cover"
                alt=""
                src="/image-63346079@2x.png"
              />
            </section>
          </div>
        </main>

        {/* Footer */}
        <div>
          <div className="bg-[#37474F] w-full h-auto p-10 font-cairo text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-5 xl:px-[328px] mr-16">
              <div className="absolute right-6 w-[303.6px] h-[233.3px] z-[2] text-right text-gray-6 md:hidden">
                <img
                  className="absolute top-[78.9px] left-[66.4px] w-[250.1px] h-[58.3px]"
                  alt=""
                  src="/group-1171276038.svg"
                />
                <img
                  className="relative top-[0px] right-[0px] w-[110px] h-[72px] object-cover"
                  alt=""
                  src="/-1@2x.png"
                />
                <img
                  className="absolute h-[6.22%] w-[23.22%] top-[93.9px] right-[45.59%] bottom-[3.34%] left-[31.19%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group.svg"
                />
                <img
                  className="absolute h-[6.04%] w-[21.28%] top-[93.9px] right-[0.73%] left-[72.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group1.svg"
                />
              </div>

              <div className="block text-right pt-[120px] md:pt-0">
                <ul className="list-none justify-between space-y-2 cursor-pointer">
                  <li className="font-semibold text-[#C1AA7B]">
                    للاستعلام
                  </li>
                  <li className="text-[#A1AAB4]">
                    الاسئلة الشائعة
                  </li>
                  <li className="text-[#A1AAB4]">
                    الشروط والاحكام
                  </li>
                  <li className="text-[#A1AAB4]">
                    سياسة الخصوصيةميثاق خدمة المتعاملين
                  </li>
                  <li className="text-[#A1AAB4]">
                    الوظائف
                  </li>
                </ul>
              </div>

              <div className="block text-right md:pr-24 lg:pr-32">
                <ul className="list-none justify-between space-y-2 cursor-pointer">
                  <li className="font-semibold text-[#C1AA7B]">
                    خريطة المجلس
                  </li>
                  <li className="text-[#A1AAB4]">
                    أعضاء المجلس
                  </li>
                  <li className="text-[#A1AAB4]">
                    أجندة المجلس
                  </li>
                  <li className="text-[#A1AAB4]">
                    لجان المجلس
                  </li>
                  <li className="text-[#A1AAB4]">
                    رئيس المجلس
                  </li>
                  <li className="text-[#A1AAB4]">
                    استراتيجية المجلس
                  </li>
                  <li className="text-[#A1AAB4]"
                  >عن المجلس
                  </li>
                </ul>
              </div>

              <div className="relative right-6 min-[375px]:!right-[-10px] min-[425px]:!right-[-60px] md:!right-16 lg:!right-0 w-[303.6px] h-[233.3px] z-[2] text-right text-gray-6 hidden md:block">
                <img
                  className="absolute top-[193.9px] left-[66.4px] w-[250.1px] h-[58.3px]"
                  alt=""
                  src="/group-1171276038.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[303.6px] h-[162px]">
                  <div className="absolute top-[128px] left-[0px] leading-[12px] font-medium">
                    <p className="[margin-block-start:0] [margin-block-end:10px]">
                      جميع الحقوق محفوظة للمجلس الوطني الاتحادي ©2023
                    </p>
                    <p className="m-0">
                      Federal National Council - المجلس الوطني الاتحادي
                    </p>
                  </div>
                  <img
                    className="absolute top-[0px] left-[123px] w-[159.3px] h-[104px] object-cover"
                    alt=""
                    src="/-1@2x.png"
                  />
                </div>
                <img
                  className="absolute h-[6.22%] w-[23.22%] top-[90.44%] right-[45.59%] bottom-[3.34%] left-[31.19%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group.svg"
                />
                <img
                  className="absolute h-[6.04%] w-[21.28%] top-[90.87%] right-[5.73%] left-[72.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group1.svg"
                />
              </div>
            </div>
          </div>
          <footer className=" bg-[#152731] flex flex-row items-start justify-center -mt-16 py-[15px] px-10 md:px-auto w-full box-border h-auto text-center text-2xs text-gray-51 font-cairo">
            <div className=" leading-[160%] inline-block w-full">
              لأفضل تصفح للموقع يتوجب أن تكون دقة الشاشة 1366x768 يدعم مايكروسوفت
              انترنت اكسبلورر 10.0+، فاير فوكس 10.0+، سفاري 3+، جوجل كروم 12.0+ ©
              2023 المجلس الوطني الاتحادي. جميع الحقوق محفوظة.
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
