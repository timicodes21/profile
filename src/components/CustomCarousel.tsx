"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import projects from "@/data/projects.json";

export const CustomCarousel = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [id, setId] = React.useState(100);

  return (
    <div className="mt-10 px-10 container">
      <Carousel
        opts={{
          align: "center",
        }}
        className=""
      >
        <CarouselContent>
          {projects.projects.map((item, index) => (
            <CarouselItem key={item.link} className="basis xl:basis-1/2 p-1">
              <a href={item.link} target="_blank">
                <Card>
                  <CardContent
                    className="flex flex-column bg-muted-foreground shadow-lg rounded p-0 relative"
                    onMouseEnter={() => {
                      setId(index);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setId(100);
                      setIsHovered(false);
                    }}
                  >
                    <Image
                      src={item.src}
                      width="1"
                      height="1"
                      layout="responsive"
                      objectFit="cover"
                      alt="image"
                      className="transition duration-1000 ease-in-out transform hover:blur-md rounded"
                      style={{ transitionProperty: "filter" }}
                    />
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${isHovered && id === index ? "opacity-100" : "opacity-0"} transition-transform ${isHovered ? "translate-y-0" : "translate-y-20"}`}
                      style={{ transitionProperty: "all" }}
                    >
                      <p
                        className={`text-white-100 text-center font-bold text-[24px] md:text-[36px]`}
                      >
                        {item.name}
                      </p>
                      <p className={`text-white-100 text-center text-[10px]`}>
                        {item.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-border text-purple-100 border-border" />
        <CarouselNext className="bg-border text-purple-100 border-border" />
      </Carousel>
    </div>
  );
};
