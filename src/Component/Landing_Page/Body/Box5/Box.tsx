import { FC } from "react";
import "../../../../App.css";
import img from "../../../Asset/Circle BG.png";
import img1 from "../../../Asset/Frame 25.png";

export const Box5: FC = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={img1} alt="frame" />
        <img src={img} alt="circle" />
      </div>
      <div className="px-[50px]">
        <div className="flex justify-around items-center px-[50px] relative bottom-[300px] pb-[100px] -mb-[300px]">
          <div className="w-[620px] flex flex-col gap-[10px]">
            <h1
              style={{ fontFamily: "MADE Mellow PERSONAL USE" }}
              className="text-[#11453B] font-[500] w-[435px] leading-[72px] text-[62px]"
            >
              Get an Exclusive Demo of Eazipay
            </h1>
            <p
              style={{ fontFamily: "Aeonik" }}
              className="w-[435px] text-[24px] leading-[32px] font-[400] text-[#515251]"
            >
              Our greatest priority is to put you and your business first. Let’s
              show you how we can help.
            </p>
          </div>
          <div>
            <form
              style={{ fontFamily: "Aeonik" }}
              action=""
              className="box flex w-[552px] rounded-[32px] border-[1px] border-[#E7E8E7] bg-[#fff] flex-col p-[32px] gap-[30px]"
            >
              <div className="flex flex-col gap-[10px] items-center text-center">
                <h1 className="text-[28px] font-[700] leading-[48px]">
                  First things first
                </h1>
                <p className="w-[342px] text-[18px] leading-[24px] font-[400]">
                  We want to serve you better. Tell us a bit about yourself or
                  company
                </p>
              </div>
              <div className="flex justify-center gap-[30px]">
                <button className="hipo text-[#FFFFFF] text-[16px] font-[500] leading-[24px] tracking-[0.1px] py-[8px] px-[80px] rounded-[12px] bg-[#11453B]">
                  Individual
                </button>
                <button className="text-[##F2F1F1] text-[16px] font-[500] leading-[24px] tracking-[0.1px] py-[8px] px-[80px] rounded-[12px] bg-[#F2F1F1]">
                  Company
                </button>
              </div>
              <div className="flex flex-col gap-[20px]">
                <input
                  className="h-[48px] p-[16px] rounded-[16px] border-[1px] border-[#B5B6B5]"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="h-[48px] p-[16px] rounded-[16px] border-[1px] border-[#B5B6B5]"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="h-[48px] p-[16px] rounded-[16px] border-[1px] border-[#B5B6B5]"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="h-[48px] p-[16px] rounded-[16px] border-[1px] border-[#B5B6B5]"
                  type="text"
                  placeholder="Job Tittle"
                />
                <input
                  className="h-[48px] p-[16px] rounded-[16px] border-[1px] border-[#B5B6B5]"
                  type="text"
                  placeholder="Company Size "
                />
                <button className="text-[#fff] text-[16px] font-[500] leading-[24px] bg-[#11453B] py-[12px] px-[28px] rounded-[24px]">
                  Request Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
