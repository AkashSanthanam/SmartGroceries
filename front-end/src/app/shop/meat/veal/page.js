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
  const lamb = await fetch(`${baseUrl}/data/meat/veal/veal.json`);
  const lambData = await lamb.json();

  const columns = 6;
  return (
    <div className="flex flex-col w-full">
      <section className="w-full pt-8">
        <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
          {lambData.map((item, index) => (
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
