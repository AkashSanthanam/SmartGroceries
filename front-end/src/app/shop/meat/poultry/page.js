import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const whiteChicken = await fetch(
    "http://localhost:3000/data/meat/poultry/chicken/dark.json"
  );
  const whiteData = await whiteChicken.json();
  const limitedWhiteData = whiteData.slice(0, 8);

  const darkChicken = await fetch(
    "http://localhost:3000/data/meat/poultry/chicken/white.json"
  );
  const darkData = await darkChicken.json();
  const limitedDarkData = darkData.slice(0, 8);

  const duck = await fetch(`${baseUrl}/data/meat/poultry/duck.json`);
  const duckData = await duck.json();

  const turkey = await fetch(
    "http://localhost:3000/data/meat/poultry/turkey.json"
  );
  const turkeyData = await turkey.json();
  const limitedTurkeyData = turkeyData.slice(0, 8);

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Chops & Tenderloins</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedWhiteData
              .filter((item) => item.Image) // Filters out items without an Image
              .map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  index={index}
                  columns={columns}
                />
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="w-full pt-8 pl-16">
        <div className="flex flex-row items-center w-full">
          <h1 className="font-medium text-2xl pl-4">Ground & Sausage</h1>
          <Button
            variant="link"
            className=" text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[100px] h-[15px]"
          >
            View more
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="max-w-[89%] w-full pt-2">
          <CarouselContent className="gap-x-8 mx-2">
            {limitedDarkData.map((item, index) => (
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
        <h1 className="font-medium text-2xl px-16">Turkey</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {turkeyData
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
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Duck</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {duckData
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
    </div>
  );
}
