import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-[100vh] w-[100vw] pt-[100vh] border-b-gray-200">
      <div className="grid grid-cols-2">
        <div className="h-[100vh] w-[100vw] md:w-[50vw] z-10">
          <Image
            src="/images/image.jpg"
            width="1"
            height="1"
            layout="responsive"
            // objectFit="cover"
            alt="image"
          />
        </div>
        <div className="h-[115vh] w-[100vw] md:w-[50vw] z-10 bg-background flex flex-col justify-center px-10">
          <div className="bg-border font-bold px-3 py-1 w-[100px] text-center rounded-[99px]">
            <p className="text-purple-100">ABOUT</p>
          </div>
          <p className="text-white-100 font-semibold text-[32px] mt-3">
            Web And Mobile Developer
          </p>
          <p className="text-gray-100 mt-3 text-justify pr-8">
            <span className="text-white-200 font-semibold"> Frontend</span> and
            <span className="text-white-200 font-semibold"> Mobile</span>{" "}
            Developer with a{" "}
            <span className="text-white-200 font-semibold">
              {" "}
              3-year track record
            </span>
            , crafting visually enchanting and flawlessly functional mobile and
            web apps. My knack for creating{" "}
            <span className="text-white-200 font-semibold">
              {" "}
              captivating user experiences
            </span>{" "}
            is matched only by my dedication to staying ahead of industry
            trends.What makes me stand out is my talent for working well with
            diverse teams, bringing innovative techniques to every project.{" "}
            <br /> <br /> I&apos;m not just about code; my soft skills shine
            too. With strong communication, time management, and problem-solving
            abilities, I lead teams effectively and pay meticulous attention to
            detail. My curiosity fuels innovation, keeping projects fresh and
            exciting. In essence, I&apos;m your software engineer who blends
            technical excellence with creative flair. I bring both the skills
            and the teamwork necessary to create outstanding applications. Ready
            to make your projects not just functional but truly extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
