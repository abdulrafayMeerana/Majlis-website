const Footer = () => {
  return (
    <>
      <div className="bg-[#37474F] w-full h-auto p-10 font-cairo text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-5 xl:px-[328px] mr-16">
          <div className="absolute right-6 w-[303.6px] h-[233.3px] z-[2] text-right text-gray-6 md:hidden">
            <img
              className="absolute top-[63.9px] left-[66.4px] w-[250.1px] h-[58.3px]"
              alt=""
              src="/group-1171276038.svg"
            />            
            <img
              className="relative top-[0px] right-[0px] w-[73.51px] h-[48px] object-cover"
              alt=""
              src="/-1@2x.png"
            />
            <img
              className="absolute h-[6.22%] w-[23.22%] top-[78.9px] right-[45.59%] bottom-[3.34%] left-[31.19%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <img
              className="absolute h-[6.04%] w-[21.28%] top-[78.9px] right-[0.73%] left-[72.99%] max-w-full overflow-hidden max-h-full"
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
    </>
  );
};

export default Footer;