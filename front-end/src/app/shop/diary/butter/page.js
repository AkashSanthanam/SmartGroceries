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
import { block, margarine, spread } from "../../../../../public/data/butter";

const columns = 6;
export default async function Page() {
  const limitedBlockData = block.slice(0, 8);

  const limitedCreamData = margarine.slice(0, 8);

  const limitedSpreadData = spread.slice(0, 8);

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Block</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedBlockData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Margarine</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedCreamData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Spread</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedSpreadData.map((item, index) => (
              <ProductCard key={index} item={item} index={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
