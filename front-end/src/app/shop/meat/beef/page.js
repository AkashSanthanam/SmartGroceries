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
  const ground = await fetch(
    "http://localhost:3000/data/meat/beef/ground.json"
  );
  const groundData = await ground.json();

  const burgers = await fetch(
    "http://localhost:3000/data/meat/beef/burgers.json"
  );
  const burgerData = await burgers.json();

  const precut = await fetch(
    "http://localhost:3000/data/meat/beef/precut.json"
  );
  const precutData = await precut.json();
  const limitedPrecutData = precutData.slice(0, 6);

  const ribs = await fetch(`${baseUrl}/data/meat/beef/ribs.json`);
  const ribsData = await ribs.json();
  const limitedRibsData = ribsData.slice(0, 12);

  const steak = await fetch(`${baseUrl}/data/meat/beef/steak.json`);
  const steakData = await steak.json();
  const limitedSteakData = steakData.slice(0, 8);

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8">
        <h1 className="font-medium text-2xl px-16">Ground</h1>
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {groundData.map((item, index) => (
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
          {burgerData
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
            {limitedRibsData.map((item, index) => (
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
            {limitedSteakData.map((item, index) => (
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
          {limitedPrecutData.map((item, index) => (
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
