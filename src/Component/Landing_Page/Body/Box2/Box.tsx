import { FC } from "react";
import img from "../../../Asset/bg1.png";

export const Box2: FC = () => {
  return (
    <>
      <div className="bg-[url('/src/Component/Asset/Eazi.png')] bg-no-repeat h-[950px] relative bottom-[70px] -mb-[70px] flex flex-col text-center">
        <img src={img} alt="" />
        <div className="absolute top-0 right-0 left-0 pt-[140px] flex flex-col gap-[60px] px-[50px]">
          <div className="flex flex-col gap-[10px]">
            <h1
              style={{ fontFamily: "MADE Mellow PERSONAL USE" }}
              className="font-[500] leading-[64px] text-[#11453B] text-[60px]"
            >
              For Individuals and Businesses
            </h1>
            <p
              style={{ fontFamily: "Aeonik" }}
              className="text-[#292A29] text-[20px] leading-[24px] tracking-[0.2px] font-[400]"
            >
              Join 200+ businesses using Eazipay's easy solution.
            </p>
          </div>

          <div className="flex text-left">
            <div className="box1 w-[552px] hover:left-0 cursor-pointer p-[64px] flex flex-col gap-[8px] rounded-[16px] bg-[#11453B] relative left-[100px]">
              <h1
                style={{ fontFamily: "Aeonik" }}
                className="font-[700] text-[20px] leading-[36px] text-[#fff]"
              >
                Tamper-proof Payroll for LIfe
              </h1>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Your staff payroll history is kept in one place forever.
              </p>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                No more excel sheet or manual records.
              </p>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Download your payroll history anytime you need it.
              </p>
            </div>
            <div className="box1 w-[552px] p-[64px] flex flex-col gap-[8px] rounded-[16px] bg-[#11453B] relative hover:right-[100px] cursor-pointer">
              <h1
                style={{ fontFamily: "Aeonik" }}
                className="font-[700] text-[20px] leading-[36px] text-[#fff]"
              >
                All Payroll, Anytime Anywhere
              </h1>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Wherever you are Eazipay has got you covered on ALL your Payroll
                tasks.
              </p>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Whether it is Taxes, Pension insurances HMOs, trustfunds,
                Eazipay handle all your compliamces in one place and easily, in
                seconds!
              </p>
            </div>
            <div className="box1 w-[552px] p-[64px] flex flex-col gap-[8px] rounded-[16px] bg-[#11453B] cursor-pointer relative right-[100px]">
              <h1
                style={{ fontFamily: "Aeonik" }}
                className="font-[700] text-[20px] leading-[36px] text-[#fff]"
              >
                Payroll in Seconds
              </h1>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Never again wil you spend more than 2 minutes on payroll.
              </p>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Just click on your staff annd bulk-pay them at once.
              </p>
              <p
                style={{ fontFamily: "Aeonik" }}
                className="text-[18px] font-[400] leading-[24px] text-[#fff]"
              >
                Payment is done permanently.
              </p>
            </div>
          </div>

          <div>
            <p
              style={{ fontFamily: "Aeonik" }}
              className="text-[#515251] text-[20px] font-[400] leading-[24px] tracking-[0.2px]"
            >
              We are happy to answer your queries. Please, reach us at <br />{" "}
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and
              expect our response shortly after.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
