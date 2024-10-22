import Badge from "@/components/Badge";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-[100vw] lg:w-[50vw]">
        <Image
          src="/images/image.png"
          width="1"
          height="1"
          layout="responsive"
          objectFit="cover"
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-center px-5 md:px-10 py-20 lg:py-5">
        <Badge width={100}>ABOUT</Badge>
        <p className="text-white-100 font-bold text-[24px] sm:text-[36px] md:text-[42px] mt-3">
          Web and Mobile Developer
        </p>
        <p className="text-gray-100 mt-3 text-justify text-[12px] sm:text-[14px] md:text-[16px]">
          <span className="text-white-200 font-semibold"> Frontend</span> and
          <span className="text-white-200 font-semibold"> Mobile</span>{" "}
          Developer with a{" "}
          <span className="text-white-200 font-semibold">
            {" "}
            4-year track record
          </span>
          , crafting visually enchanting and flawlessly functional mobile and
          web apps. My knack for creating{" "}
          <span className="text-white-200 font-semibold">
            {" "}
            captivating user experiences
          </span>{" "}
          is matched only by my dedication to staying ahead of industry
          trends.What makes me stand out is my talent for working well with
          diverse teams, bringing innovative techniques to every project. <br />{" "}
          <br /> I&apos;m not just about code; my soft skills shine too. With
          strong communication, time management, and problem-solving abilities,
          I lead teams effectively and pay meticulous attention to detail. My
          curiosity fuels innovation, keeping projects fresh and exciting. In
          essence, I&apos;m your software engineer who blends technical
          excellence with creative flair. I bring both the skills and the
          teamwork necessary to create outstanding applications. Ready to make
          your projects not just functional but truly extraordinary.
        </p>
        <div className="mt-3">
          <a
            href="https://docs.google.com/document/d/14O84V4bbat1MrgZLijaWLIzyDEdFvc8u6PplyrAcZWw/edit?usp=sharing"
            download="Resume"
          >
            <p className="text-white-100 mt-3 text-justify text-[12px] sm:text-[14px] md:text-[16px] underline cursor-pointer">
              View Resume
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
