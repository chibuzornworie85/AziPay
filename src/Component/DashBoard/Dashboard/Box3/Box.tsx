import { FC } from "react";
import "../../../../App.css";

export const Box3: FC = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-[20px] sticky top-[80px] bg-[#fff] py-[30px]">
          <h1
            style={{ fontFamily: "Aeonik" }}
            className="font-[600] leading-[40px] text-[32px] text-[#292A29]"
          >
            Recent Activities
          </h1>
          <div
            style={{ fontFamily: "Aeonik" }}
            className="flex justify-between items-center"
          >
            <div className="flex items-center rounded-[16px] bg-[#fff] border-[1px] border-[#B5B6B5] w-[90%]">
              <input
                type="text"
                placeholder="Search employee"
                className="text-[14px] font-[400] w-[95%] leading-[16px] pl-[10px] h-[40px] tracking-[0.25px] text-[#B9BBC0]"
              />
              <div className="bg-[#D9EBCD] py-[12px] px-[30px] rounded-r-[16px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98756 4.61514 4.61514C2.98756 6.24272 2.04543 8.43203 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63436C4.4046 8.2765 5.07128 7.02922 6.05025 6.05025C7.02922 5.07128 8.2765 4.4046 9.63436 4.1345C10.9922 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9497C14.637 17.2625 12.8565 18 11 18Z"
                    fill="#11453B"
                  />
                </svg>
              </div>
            </div>
            <button className="flex items-center text-[14px] font-[500] leading-[14px] tracking-[-0.266px] gap-[5px] h-[40px] rounded-[16px] bg-[#fff] border-[1px] border-[#B5B6B5] py-[23px] px-[16px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 5.45333V1.99999C13.3333 1.82318 13.2631 1.65361 13.1381 1.52859C13.013 1.40357 12.8435 1.33333 12.6667 1.33333C12.4898 1.33333 12.3203 1.40357 12.1952 1.52859C12.0702 1.65361 12 1.82318 12 1.99999V5.45333C11.6139 5.59346 11.2803 5.84908 11.0445 6.18544C10.8088 6.5218 10.6823 6.92258 10.6823 7.33333C10.6823 7.74407 10.8088 8.14486 11.0445 8.48122C11.2803 8.81758 11.6139 9.07319 12 9.21333V14C12 14.1768 12.0702 14.3464 12.1952 14.4714C12.3203 14.5964 12.4898 14.6667 12.6667 14.6667C12.8435 14.6667 13.013 14.5964 13.1381 14.4714C13.2631 14.3464 13.3333 14.1768 13.3333 14V9.21333C13.7194 9.07319 14.053 8.81758 14.2888 8.48122C14.5245 8.14486 14.651 7.74407 14.651 7.33333C14.651 6.92258 14.5245 6.5218 14.2888 6.18544C14.053 5.84908 13.7194 5.59346 13.3333 5.45333ZM12.6667 8C12.5348 8 12.4059 7.9609 12.2963 7.88764C12.1866 7.81439 12.1012 7.71027 12.0507 7.58845C12.0003 7.46663 11.9871 7.33259 12.0128 7.20327C12.0385 7.07395 12.102 6.95516 12.1952 6.86192C12.2885 6.76869 12.4073 6.70519 12.5366 6.67947C12.6659 6.65375 12.8 6.66695 12.9218 6.71741C13.0436 6.76787 13.1477 6.85332 13.221 6.96295C13.2942 7.07258 13.3333 7.20147 13.3333 7.33333C13.3333 7.51014 13.2631 7.67971 13.1381 7.80473C13.013 7.92976 12.8435 8 12.6667 8ZM8.66665 9.45333V1.99999C8.66665 1.82318 8.59641 1.65361 8.47139 1.52859C8.34636 1.40357 8.17679 1.33333 7.99998 1.33333C7.82317 1.33333 7.6536 1.40357 7.52858 1.52859C7.40355 1.65361 7.33332 1.82318 7.33332 1.99999V9.45333C6.94722 9.59346 6.61362 9.84908 6.37788 10.1854C6.14213 10.5218 6.01567 10.9226 6.01567 11.3333C6.01567 11.7441 6.14213 12.1449 6.37788 12.4812C6.61362 12.8176 6.94722 13.0732 7.33332 13.2133V14C7.33332 14.1768 7.40355 14.3464 7.52858 14.4714C7.6536 14.5964 7.82317 14.6667 7.99998 14.6667C8.17679 14.6667 8.34636 14.5964 8.47139 14.4714C8.59641 14.3464 8.66665 14.1768 8.66665 14V13.2133C9.05275 13.0732 9.38634 12.8176 9.62209 12.4812C9.85783 12.1449 9.9843 11.7441 9.9843 11.3333C9.9843 10.9226 9.85783 10.5218 9.62209 10.1854C9.38634 9.84908 9.05275 9.59346 8.66665 9.45333ZM7.99998 12C7.86813 12 7.73924 11.9609 7.6296 11.8876C7.51997 11.8144 7.43452 11.7103 7.38406 11.5885C7.33361 11.4666 7.3204 11.3326 7.34613 11.2033C7.37185 11.0739 7.43534 10.9552 7.52858 10.8619C7.62181 10.7687 7.7406 10.7052 7.86992 10.6795C7.99924 10.6537 8.13329 10.667 8.25511 10.7174C8.37692 10.7679 8.48104 10.8533 8.5543 10.9629C8.62755 11.0726 8.66665 11.2015 8.66665 11.3333C8.66665 11.5101 8.59641 11.6797 8.47139 11.8047C8.34636 11.9298 8.17679 12 7.99998 12ZM3.99998 4.11999V1.99999C3.99998 1.82318 3.92975 1.65361 3.80472 1.52859C3.6797 1.40357 3.51013 1.33333 3.33332 1.33333C3.15651 1.33333 2.98694 1.40357 2.86191 1.52859C2.73689 1.65361 2.66665 1.82318 2.66665 1.99999V4.11999C2.28055 4.26013 1.94696 4.51575 1.71121 4.85211C1.47547 5.18846 1.349 5.58925 1.349 6C1.349 6.41074 1.47547 6.81153 1.71121 7.14789C1.94696 7.48424 2.28055 7.73986 2.66665 7.87999V14C2.66665 14.1768 2.73689 14.3464 2.86191 14.4714C2.98694 14.5964 3.15651 14.6667 3.33332 14.6667C3.51013 14.6667 3.6797 14.5964 3.80472 14.4714C3.92975 14.3464 3.99998 14.1768 3.99998 14V7.87999C4.38609 7.73986 4.71968 7.48424 4.95542 7.14789C5.19117 6.81153 5.31763 6.41074 5.31763 6C5.31763 5.58925 5.19117 5.18846 4.95542 4.85211C4.71968 4.51575 4.38609 4.26013 3.99998 4.11999ZM3.33332 6.66666C3.20146 6.66666 3.07257 6.62756 2.96294 6.55431C2.8533 6.48105 2.76786 6.37694 2.7174 6.25512C2.66694 6.1333 2.65374 5.99926 2.67946 5.86994C2.70518 5.74061 2.76868 5.62183 2.86191 5.52859C2.95515 5.43536 3.07394 5.37186 3.20326 5.34614C3.33258 5.32041 3.46662 5.33362 3.58844 5.38408C3.71026 5.43453 3.81438 5.51998 3.88763 5.62961C3.96088 5.73925 3.99998 5.86814 3.99998 6C3.99998 6.17681 3.92975 6.34637 3.80472 6.4714C3.6797 6.59642 3.51013 6.66666 3.33332 6.66666Z"
                  fill="#8D8E8D"
                />
              </svg>
              Filter
            </button>
          </div>
        </div>
        <div
          style={{ fontFamily: "Aeonik" }}
          className="last flex flex-col gap-[60px] pb-0 p-[30px] bg-[#fff] rounded-[16px] overflow-auto"
        >
          <div className="flex flex-col gap-[20px]">
            <p className="text-[18px] font-[600] leading-[24px]">
              Wednesday, November 09, 2022
            </p>
            <div className="sha w-[100%] bg-[#FFF] rounded-[16px] border-[1px] border-[#E7E8E7] py-[8px] px-[48px] flex flex-col gap-[8px]">
              <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                PAYROLL
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-[4px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#01AA8C" />
                    <path
                      d="M13.136 15.3C14.352 15.3 15.312 15.556 15.984 16.068C16.656 16.58 17.008 17.3 17.008 18.212C17.008 18.884 16.816 19.444 16.464 19.876C16.112 20.308 15.6 20.596 14.928 20.74C16.592 21.028 17.44 21.908 17.44 23.38C17.44 24.356 17.072 25.124 16.352 25.668C15.632 26.228 14.608 26.5 13.28 26.5H9.024V15.3H13.136ZM10.864 20.052H13.184C13.808 20.052 14.288 19.908 14.64 19.62C14.992 19.332 15.168 18.948 15.168 18.436C15.168 17.94 14.992 17.556 14.64 17.268C14.288 16.98 13.808 16.836 13.184 16.836H10.864V20.052ZM10.864 24.948H13.296C14.016 24.948 14.576 24.804 14.96 24.516C15.344 24.228 15.552 23.812 15.552 23.284C15.552 22.74 15.344 22.324 14.96 22.02C14.56 21.732 14 21.572 13.296 21.572H10.864V24.948ZM19.149 15.3H21.533L25.117 24.116L28.637 15.3H30.973V26.5H29.197V18.26L25.837 26.5H24.285L20.925 18.26V26.5H19.149V15.3Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Badmus Kemis
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    ACTIVITY
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Paid November 2022 salary
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    EMPLOYEE
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    52
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    TIME
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    16:15
                  </p>
                </div>
              </div>
            </div>
            <div className="sha w-[100%] bg-[#FFF] rounded-[16px] border-[1px] border-[#E7E8E7] py-[8px] px-[48px] flex flex-col gap-[8px]">
              <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                EMPLOYEE MANAGEMENT
              </p>
              <div className="flex gap-[130px]">
                <div className="flex items-center gap-[4px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#01AA8C" />
                    <path
                      d="M13.136 15.3C14.352 15.3 15.312 15.556 15.984 16.068C16.656 16.58 17.008 17.3 17.008 18.212C17.008 18.884 16.816 19.444 16.464 19.876C16.112 20.308 15.6 20.596 14.928 20.74C16.592 21.028 17.44 21.908 17.44 23.38C17.44 24.356 17.072 25.124 16.352 25.668C15.632 26.228 14.608 26.5 13.28 26.5H9.024V15.3H13.136ZM10.864 20.052H13.184C13.808 20.052 14.288 19.908 14.64 19.62C14.992 19.332 15.168 18.948 15.168 18.436C15.168 17.94 14.992 17.556 14.64 17.268C14.288 16.98 13.808 16.836 13.184 16.836H10.864V20.052ZM10.864 24.948H13.296C14.016 24.948 14.576 24.804 14.96 24.516C15.344 24.228 15.552 23.812 15.552 23.284C15.552 22.74 15.344 22.324 14.96 22.02C14.56 21.732 14 21.572 13.296 21.572H10.864V24.948ZM19.149 15.3H21.533L25.117 24.116L28.637 15.3H30.973V26.5H29.197V18.26L25.837 26.5H24.285L20.925 18.26V26.5H19.149V15.3Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Kalu Abasiama
                  </p>
                </div>
                <div className="flex gap-[150px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                      ACTIVITY
                    </p>
                    <p>Added new employee</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                      EMPLOYEE
                    </p>
                    <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                      04
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[18px] font-[600] leading-[24px]">
              Friday, November 04, 2022
            </p>
            <div className="sha w-[100%] bg-[#FFF] rounded-[16px] border-[1px] border-[#E7E8E7] py-[8px] px-[48px] flex flex-col gap-[8px]">
              <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                EMPLOYEE MANAGEMENT
              </p>
              <div className="flex gap-[130px]">
                <div className="flex items-center gap-[4px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#01AA8C" />
                    <path
                      d="M13.136 15.3C14.352 15.3 15.312 15.556 15.984 16.068C16.656 16.58 17.008 17.3 17.008 18.212C17.008 18.884 16.816 19.444 16.464 19.876C16.112 20.308 15.6 20.596 14.928 20.74C16.592 21.028 17.44 21.908 17.44 23.38C17.44 24.356 17.072 25.124 16.352 25.668C15.632 26.228 14.608 26.5 13.28 26.5H9.024V15.3H13.136ZM10.864 20.052H13.184C13.808 20.052 14.288 19.908 14.64 19.62C14.992 19.332 15.168 18.948 15.168 18.436C15.168 17.94 14.992 17.556 14.64 17.268C14.288 16.98 13.808 16.836 13.184 16.836H10.864V20.052ZM10.864 24.948H13.296C14.016 24.948 14.576 24.804 14.96 24.516C15.344 24.228 15.552 23.812 15.552 23.284C15.552 22.74 15.344 22.324 14.96 22.02C14.56 21.732 14 21.572 13.296 21.572H10.864V24.948ZM19.149 15.3H21.533L25.117 24.116L28.637 15.3H30.973V26.5H29.197V18.26L25.837 26.5H24.285L20.925 18.26V26.5H19.149V15.3Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Kalu Abasiama
                  </p>
                </div>
                <div className="flex gap-[150px]">
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                      ACTIVITY
                    </p>
                    <p>Added new employee</p>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                      EMPLOYEE
                    </p>
                    <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                      04
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sha w-[100%] bg-[#FFF] rounded-[16px] border-[1px] border-[#E7E8E7] py-[8px] px-[48px] flex flex-col gap-[8px]">
              <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                PAYROLL
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-[4px]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="20" fill="#01AA8C" />
                    <path
                      d="M13.136 15.3C14.352 15.3 15.312 15.556 15.984 16.068C16.656 16.58 17.008 17.3 17.008 18.212C17.008 18.884 16.816 19.444 16.464 19.876C16.112 20.308 15.6 20.596 14.928 20.74C16.592 21.028 17.44 21.908 17.44 23.38C17.44 24.356 17.072 25.124 16.352 25.668C15.632 26.228 14.608 26.5 13.28 26.5H9.024V15.3H13.136ZM10.864 20.052H13.184C13.808 20.052 14.288 19.908 14.64 19.62C14.992 19.332 15.168 18.948 15.168 18.436C15.168 17.94 14.992 17.556 14.64 17.268C14.288 16.98 13.808 16.836 13.184 16.836H10.864V20.052ZM10.864 24.948H13.296C14.016 24.948 14.576 24.804 14.96 24.516C15.344 24.228 15.552 23.812 15.552 23.284C15.552 22.74 15.344 22.324 14.96 22.02C14.56 21.732 14 21.572 13.296 21.572H10.864V24.948ZM19.149 15.3H21.533L25.117 24.116L28.637 15.3H30.973V26.5H29.197V18.26L25.837 26.5H24.285L20.925 18.26V26.5H19.149V15.3Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Badmus Kemis
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    ACTIVITY
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    Paid November 2022 salary
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    EMPLOYEE
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    52
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    TIME
                  </p>
                  <p className="text-[#515251] text-[16px] font-[600] leading-[24px]">
                    16:15
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[18px] font-[600] leading-[24px]">
              Monday, October 30, 2022
            </p>
            <div className="sha w-[100%] bg-[#FFF] rounded-[16px] border-[1px] border-[#E7E8E7] py-[8px] px-[48px] flex flex-col gap-[8px]">
              <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                PAYROLL
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-[4px]">
    
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    ACTIVITY
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    EMPLOYEE
                  </p>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[12px] font-[400] leading-[16px] text-[#8D8E8D]">
                    TIME
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
