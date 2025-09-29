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
import { meatalt } from "../../../../../public/data/alternatives";


const columns = 6;
export default async function Page() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8">
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {meatalt.map((item, index) => (
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
