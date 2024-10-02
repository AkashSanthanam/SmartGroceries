import Mainnavbar from "@/components/Mainnavbar";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
import React from "react";
import CategoriesBar from "@/components/CategoriesBar";
import { Separator } from "@radix-ui/react-separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

// Seeded random function
function seededRandom(seed) {
  let value = seed % 2147483647;
  return function () {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

// Shuffle array with seeded random
function shuffleArray(array, seed) {
  const random = seededRandom(seed);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export default async function Page() {
  // Fetch all the data
  const apples = await fetch(`${baseUrl}/data/fruits/apples.json`);
  const appleData = await apples.json();

  const eggs = await fetch(`${baseUrl}/data/diary/eggs.json`);
  const eggData = await eggs.json();

  const buns = await fetch(`${baseUrl}/data/bakery/buns.json`);
  const bunData = await buns.json();

  const chicken = await fetch(
    "http://localhost:3000/data/meat/poultry/chicken/dark.json"
  );
  const chickenData = await chicken.json();

  const milk = await fetch(`${baseUrl}/data/diary/milk.json`);
  const milkData = await milk.json();

  const pasta = await fetch(`${baseUrl}/data/diary/pasta.json`);
  const pastaData = await pasta.json();

  const salmon = await fetch(`${baseUrl}/data/seafood/salmon.json`);
  const salmonData = await salmon.json();

  const celery = await fetch(`${baseUrl}/data/veggies/celery.json`);
  const celeryData = await celery.json();

  const lettuce = await fetch(
    "http://localhost:3000/data/veggies/lettuce.json"
  );
  const lettuceData = await lettuce.json();

  const mushrooms = await fetch(
    "http://localhost:3000/data/veggies/mushrooms.json"
  );
  const mushroomsData = await mushrooms.json();

  const herbs = await fetch(`${baseUrl}/data/veggies/herbs.json`);
  const herbData = await herbs.json();

  const milkSubset = milkData.slice(0, 3); // First 3 elements from apples
  const eggSubset = eggData.slice(0, 3); // First 2 elements from eggs
  const bunSubset = bunData.slice(0, 1);

  const seed = 12345; // Fixed seed value ensures same randomization each time
  const array1 = [...milkSubset, ...eggSubset, ...bunSubset];
  const shuffledArray1 = shuffleArray(array1, seed);

  const chickenSubset = chickenData.slice(1, 3);
  const appleSubset = appleData.slice(1, 3);
  const pastaSubset = pastaData.slice(0, 3);
  const salmonSubset = salmonData.slice(0, 3);

  const array2 = [
    ...chickenSubset,
    ...appleSubset,
    ...pastaSubset,
    ...salmonSubset,
  ];

  const shuffledArray2 = shuffleArray(array2, seed);

  const celerySubset = celeryData.slice(0, 3);
  const mushroomsSubset = mushroomsData.slice(0, 3);
  const lettuceSubset = lettuceData.slice(0, 3);

  const array3 = [...celerySubset, ...mushroomsSubset, ...lettuceSubset];

  const columns = 6;
  return (
    <div className="flex flex-col pt-8 bg-background-100 gap-4 w-full">
      <div className="ml-16">
        <section>
          <h1 className="font-semibold text-2xl">Everyday needs</h1>
          <Carousel opts={{ align: "start" }} className="max-w-[88%] ml-6">
            <CarouselContent className="ml-2 gap-x-7">
              {shuffledArray1.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  index={index}
                  className=""
                />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="grid grid-cols-[auto_600px] w-full pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">Popular right now</h1>
            <p className="text-sm text-slate-500">
              Check out these hot items that everyone is raving about, from
              everyday customer favorites to unique items you won't find
              anywhere else!
            </p>
            <Carousel
              opts={{ align: "start" }}
              className="max-w-[800px] w-full"
            >
              <CarouselContent className="gap-x-4 mx-1">
                {shuffledArray2.map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    index={index}
                    className=""
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage1.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>

        <section className="grid grid-cols-[auto_600px] w-full pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">The best local eats</h1>
            <p className="text-sm text-slate-500">
              We're proud to partner with tons of local farms and artisans who
              bring us an array of incredible food all year round!
            </p>
            <Carousel
              opts={{ align: "start" }}
              className="max-w-[800px] w-full "
            >
              <CarouselContent className="gap-x-4 mx-1">
                {array3.map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    index={index}
                    className=""
                  />
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage2.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>

        <section className="grid grid-cols-[auto_900px] w-full pt-14 items-center pb-20">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-4xl underline underline-offset-8 decoration-primary">
              Skip the delivery fees
            </h1>
            <p className="text-sm text-slate-500">
              New customers get DeliveryPass perks on us for 60 days, including
              unlimited free delivery, timeslot reservations, and exclusive
              savings. Sign up now!
            </p>
            <Button
              variant="link"
              className="text-sm text-black hover:text-third transition-colors ease-in duration-100 w-[50px] h-[15px]"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/shopimage3.jpg" className="h-[400px] pr-6"></img>
          </div>
        </section>
      </div>
    </div>
  );
}
