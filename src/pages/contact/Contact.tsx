import Badge from "@/components/Badge";
import CustomInput from "@/components/CustomInput";
import CustomTextArea from "@/components/CustomTextArea";
import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 border-y border-y-inputBorder container px-5 lg:px-10 py-20 md:py-0 md:h-[100vh]"
      id="contact"
    >
      <div className="flex flex-col justify-center pr-5 lg:pr-10">
        <div className="flex justify-center lg:justify-start">
          <Badge>CONTACT</Badge>
        </div>
        <p className="text-white-100 font-bold text-[24px] sm:text-[36px] md:text-[42px] mt-3 text-center lg:text-left">
          Got a problem to solve?
        </p>
        <p className="text-gray-100 mt-3 text-justify text-[12px] sm:text-[14px] md:text-[16px]">
          Get your space suit ready and tell me your ideas to develop your dream
          <span className="text-white-200 font-semibold"> Web</span> and{" "}
          <span className="text-white-200 font-semibold">
            Mobile Applications
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-center lg:pl-10 mt-10 md:mt-0">
        <div className="mb-5">
          <CustomInput label="NAME" disabled />
        </div>
        <div className="mb-5">
          <CustomInput label="EMAIL" disabled />
        </div>
        <div className="mb-5">
          <CustomTextArea label="MESSAGE" disabled />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="flex items-center justify-center lg:justify-start">
            <a href="mailto:timileyinbabalola42@gmail.com">
              <div className="flex items-center">
                <Mail className="text-gray-100" />
                <p className="text-gray-100 text-[12px] ml-2">
                  timileyinbabalola42@gmail.com
                </p>
              </div>
            </a>
          </div>

          <button
            className="bg-white-100 px-5 py-3 text-center border-white-100 text-[12px] md:text-[16px] font-medium mx-2"
            type="button"
          >
            <p className="text-background">Hit Me up</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
