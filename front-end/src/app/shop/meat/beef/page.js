import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import ProductCard from "@/components/ProductCard";
import {
  ground,
  burgers,
  precut,
  ribs,
  steak,
} from "../../../../../public/data/beef";

export default async function Page() {
  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Ground</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {ground.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              index={index}
              columns={columns}
            />
          ))}
        </div>
      </section>
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Burger</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {burgers
            .filter((item) => item.Image) // Filters out items without an Image
            .map((item, index) => (
              <ProductCard
                key={index}
                item={item}
                index={index}
                columns={columns}
              />
            ))}
        </div>
      </section>
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Ribs</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {ribs.map((item, index) => (
              <ProductCard
                key={index}
                item={item}
                index={index}
                className="w-[90%]"
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Steak</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[87%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {steak.map((item, index) => (
              <ProductCard
                key={index}
                item={item}
                index={index}
                className="w-[90%]"
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Precut</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {precut.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
              index={index}
              columns={columns}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
