const Footer = () => {
  return (
    <div className="self-stretch bg-gray flex flex-col items-center justify-start w-full relative min-h-[357px] text-left text-xs text-tan font-cairo">
      <div className="my-0 mx-[!important] absolute top-[42px] left-[1px] w-full flex flex-row flex-wrap items-center justify-start py-0 px-[328px] box-border gap-[135px] z-[0]">
        <footer className="my-0 mx-[!important] absolute top-[267px] left-[0px] bg-darkslategray-300 flex flex-row items-start justify-center py-[15px] px-auto w-full box-border min-h-[48px] z-[0] text-center text-2xs text-gray-51 font-cairo">
          <div className="relative leading-[160%] inline-block w-full shrink-0">
            لأفضل تصفح للموقع يتوجب أن تكون دقة الشاشة 1366x768 يدعم مايكروسوفت
            انترنت اكسبلورر 10.0+، فاير فوكس 10.0+، سفاري 3+، جوجل كروم 12.0+ ©
            2023 المجلس الوطني الاتحادي. جميع الحقوق محفوظة.
          </div>
        </footer>
        <div className="relative w-[339px] h-[219px] z-[1]">
          <div className="absolute top-[34px] left-[0px] w-[325px] h-[185px] text-right text-gray-5">
            <div className="absolute top-[0px] left-[211px] inline-block w-[114px] h-[185px] opacity-[0.8]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                أعضاء المجلس
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                أجندة المجلس
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                لجان المجلس
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                رئيس المجلس
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                استراتيجية المجلس
              </p>
              <p className="m-0">عن المجلس</p>
            </div>
            <div className="absolute top-[0px] left-[0px] opacity-[0.8]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                الاسئلة الشائعة
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                الشروط والاحكام
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                سياسة الخصوصية ميثاق خدمة المتعاملين
              </p>
              <p className="m-0">الوظائف</p>
            </div>
          </div>
          <div className="absolute top-[0px] left-[65px] font-semibold">
            للاستعلام
          </div>
          <div className="absolute top-[0px] left-[250px] font-semibold">
            خريطة المجلس
          </div>
        </div>
        <div className="relative w-[303.6px] h-[233.3px] z-[2] text-right text-gray-6">
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
            className="absolute h-[6.04%] w-[21.28%] top-[90.87%] right-[5.73%] bottom-[3.09%] left-[72.99%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;