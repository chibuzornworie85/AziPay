import { FC } from "react";
import img from "../../../Asset/phone.png";
import img1 from "../../../Asset/one.png";

export const Box3: FC = () => {
  return (
    <>
      <div className="px-[50px] flex flex-col text-center items-center pb-[50px]">
        <div className="pb-[50px] flex flex-col gap-[10px]">
          <h1
            style={{ fontFamily: "MADE Mellow PERSONAL USE" }}
            className="text-[52px] font-[500] leading-[64px] text-[#11453B]"
          >
            How Eazipay Works
          </h1>
          <p
            style={{ fontFamily: "Aeonik" }}
            className="text-[#515251] text-[28px] font-[400] leading-[36px]"
          >
            Get started in 3 simple steps.
          </p>
        </div>

        <div className="flex px-[50px] gap-[200px]">
          <div className="flex flex-col items-center">
            <svg
              className="absolute -z-10"
              width="578"
              height="578"
              viewBox="0 0 578 578"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="288.807"
                cy="289"
                r="288.481"
                fill="#F0F7EB"
                stroke="#11453B"
                strokeWidth="0.186592"
              />
              <circle cx="288.807" cy="289" r="259.079" fill="#D9EBCD" />
              <circle cx="288.807" cy="289" r="225.449" fill="#11453B" />
            </svg>
            <img src={img} alt="phone" />
          </div>
          <div>
            <img src={img1} alt="one" />
          </div>
        </div>
      </div>
    </>
  );
};
