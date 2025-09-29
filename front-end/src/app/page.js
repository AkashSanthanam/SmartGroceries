import Image from "next/image";
import Mainnavbar from "@/components/Mainnavbar";

// UI
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";

// Native UI
import StarCard from "@/components/StarCard";
import Footer from "@/components/Footer";

export default async function Home() {
  // Fetch the data
  const apples = await fetch("http://localhost:3000/data/fruits/apples.json");
  const appleData = await apples.json();

  const eggs = await fetch("http://localhost:3000/data/diary/eggs.json");
  const eggData = await eggs.json();

  const buns = await fetch("http://localhost:3000/data/bakery/buns.json");
  const bunData = await buns.json();

  const chicken = await fetch(
    "http://localhost:3000/data/meat/poultry/chicken/dark.json"
  );
  const chickenData = await chicken.json();

  const milk = await fetch("http://localhost:3000/data/diary/milk.json");
  const milkData = await milk.json();

  const pasta = await fetch("http://localhost:3000/data/diary/pasta.json");
  const pastaData = await pasta.json();

  const salmon = await fetch("http://localhost:3000/data/seafood/salmon.json");
  const salmonData = await salmon.json();

  const celery = await fetch("http://localhost:3000/data/veggies/celery.json");
  const celeryData = await celery.json();

  const lettuce = await fetch(
    "http://localhost:3000/data/veggies/lettuce.json"
  );
  const lettuceData = await lettuce.json();

  const mushrooms = await fetch(
    "http://localhost:3000/data/veggies/mushrooms.json"
  );
  const mushroomsData = await mushrooms.json();

  const randomArray1 = [appleData[0], eggData[0], bunData[0]];
  const randomArray2 = [chickenData[0], milkData[0], salmonData[0]];
  const randomArray3 = [celeryData[0], lettuceData[0], mushroomsData[0]];

  return (
    <main className="flex min-h-screen bg-background-500 flex-col">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-start pt-10 w-full md:w-[50%] pl-0 md:pl-20">
          <Badge className="bg-red-100 opacity-90 w-[220px]">
            <img src="/assets/groceryiconforbadge.png" className="w-8"></img>
            <span className="text-primary text-xs">
              Grocery Delivery Service
            </span>
          </Badge>
          <p className="text-3xl md:text-6xl font-semibold">
            Make healthy life with <span className="text-third">fresh</span>{" "}
            grocery
          </p>
          <p className="text-md font-semibold pt-2 w-[90%] ">
            Get the best quality and most delicious grocery food in the world,
            you can get them all use our website
          </p>
          <Button className="bg-primary shadow-custom-medium-red w-32">
            <Link href="/shop">Shop Now</Link>
            <FaArrowRightLong size={20} className="pl-2"></FaArrowRightLong>
          </Button>
          <p className="font-bold pt-10">You can also download now on</p>
          <div className="flex flex-row gap-4">
            <img
              src="/assets/playestore.png"
              className="w-32 md:w-52 cursor-pointer"
            ></img>
            <img
              src="/assets/appstore.png"
              className="w-32 md:w-52 cursor-pointer"
            ></img>
          </div>
        </div>
        <div className="flex flex-col bg-landing-photo bg-cover bg-bottom  w-full md:w-[50%] h-[870px] scale-90 ">
          <div className="bg-white/60 flex flex-col justify-center items-center w-[110px] rounded-xl text-xs relative top-[10%] left-[10%] md:left-[0%] md:top-[50%] shadow-lg border border-gray-200 pb-2">
            <img src="/assets/fresh.png" className="w-12"></img>
            <p className="font-bold">100% Fresh</p>
            <p className="text-slate-500">Quality maintain</p>
          </div>
          <div className="bg-white/60 flex flex-row items-center w-[210px] rounded-xl text-xs relative top-[60%] left-[5%] md:right-[10%] md:left-[0%] shadow-lg border border-gray-200 p-2">
            <img src="/assets/location.png" className="w-8"></img>
            <p className="font-bold">
              Fast Delivery <br></br>{" "}
              <span className="font-normal">Free of cost of any delivery</span>
            </p>
          </div>
        </div>
      </div>

      {/* Organic Section */}
      <div className="flex flex-col md:flex-row w-full pb-10  gap-6">
        <div className="flex flex-col md:flex-row  w-[90%] md:w-[70%] ml-0 mr-0 md:ml-20 md:mr-10 shadow-lg rounded-xl items-center  ">
          <div className="flex flex-col w-[90%] md:w-[50%] justify-center items-center text-center md:text-start md:items-start pl-4  gap-4">
            <p className="text-md font-semibold italic text-third">
              100% Organic Feed Provide
            </p>
            <p className="text-2xl font-bold">Natural & Organic Health Care</p>
            <p className="text-slate-400">
              Assertively target market-driven intellecutal capital with world
              wide human capital holistic.
            </p>
            <Button className="bg-third w-32">
              <Link href="/shop">Shop Now</Link>
              <FaArrowRightLong
                className="pl-2"
                size={25}
              ></FaArrowRightLong>{" "}
            </Button>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img
              src="/assets/organic-removebg.png"
              className="w-[100%] object-cover"
              alt="Organic Health Care"
            />
          </div>
        </div>
        <div className="flex flex-col w-[90%] md:w-[30%] bg-sale-photo-1 bg-cover bg-center mr-0 md:mr-24 rounded-lg shadow-lg text-center pl-2 ">
          <p className="text-lg font-semibold italic text-primary ">
            Limited offer now
          </p>
          <p className="text-2xl font-bold pb-48">
            Organic foods up to 50% off
          </p>

          <Button className="bg-primary w-32">
            <Link href="/shop">Shop Now</Link>
            <FaArrowRightLong
              className="pl-2"
              size={25}
            ></FaArrowRightLong>{" "}
          </Button>
        </div>
      </div>

      {/* Sale/Trending Section */}

      <div className="flex flex-row w-full items-center justify-center gap-40 pb-10 pt-10 ">
        <Tabs
          defaultValue="NewArrivals"
          className="w-[400px] bg-background-100 shadow-lg rounded-xl "
        >
          <TabsList className="flex flex-row w-full">
            <TabsTrigger value="NewArrivals">New Arrivals</TabsTrigger>
            <TabsTrigger value="Trending">Trending</TabsTrigger>
            <TabsTrigger value="BestSelling">Best Selling</TabsTrigger>
          </TabsList>
          <TabsContent value="NewArrivals">
            <div className="flex flex-col pl-4 gap-2">
              {randomArray1.map((item, index) => (
                <StarCard key={index} item={item}></StarCard>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Trending">
            {" "}
            <div className="flex flex-col pl-4 gap-2">
              {randomArray2.map((item, index) => (
                <StarCard key={index} item={item}></StarCard>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="BestSelling">
            {" "}
            <div className="flex flex-col pl-4 gap-2">
              {randomArray3.map((item, index) => (
                <StarCard key={index} item={item}></StarCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex flex-col w-[30%] gap-2">
          {" "}
          <p className="text-3xl font-bold">
            Get <span className="text-primary">20% Discount on</span> <br></br>{" "}
            Your First Sale
          </p>
          <p className="text-slate-400 text-sm">
            Compelling fashion intermandated opporutunities and multimedia based
            transparent e-business
          </p>
          <div className="flex flex-row pt-6 w-full gap-4">
            <div className="flex flex-col shadow-lg rounded-md w-[33%] items-center pb-4">
              <img
                src="/assets/thumbsup.png"
                className="w-[70px] h-[70px] mt-8 mb-8"
              ></img>
              <p className="text-2xl font-bold">456k+</p>
              <p className="text-slate-400 text-sm">Active Clients</p>
            </div>
            <div className="flex flex-col shadow-lg rounded-md w-[33%] items-center">
              <img
                src="/assets/client.png"
                className="w-[70px] h-[70px] mt-8 mb-8"
              ></img>
              <p className="text-2xl font-bold">200k+</p>
              <p className="text-slate-400 text-sm">Returning Clients</p>
            </div>
            <div className="flex flex-col shadow-lg rounded-md w-[33%] items-center">
              <img
                src="/assets/products.png"
                className="w-[70px] h-[70px] mt-8 mb-8"
              ></img>
              <p className="text-2xl font-bold">150k+</p>
              <p className="text-slate-400 text-sm">Active Products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Browsing Cat */}

      <div className="flex flex-col items-center pt-10 pb-10 gap-4">
        <p className="text-4xl font-bold">Browse Our Catelogue</p>
        <p className="text-slate-400">Checkout some of our produce!</p>
        <div className="flex flex-row mt-4 gap-4">
          <div className="flex flex-col shadow-lg rounded-2xl w-[150px] items-center hover:bg-secondary transition-colors ease-in duration-200 cursor-pointer pb-4">
            <img
              src="/assets/vegetable.png"
              className="w-[60px] h-[60px] mt-8 mb-8"
            ></img>
            <p className="text-md font-bold">Produce</p>
            <p className="text-slate-500 text-sm">20+ Items</p>
          </div>
          <div className="flex flex-col shadow-lg rounded-2xl w-[150px] items-center hover:bg-secondary transition-colors ease-in duration-200 cursor-pointer">
            <img
              src="/assets/meat.png"
              className="w-[60px] h-[60px] mt-8 mb-8"
            ></img>
            <p className="text-md font-bold">Meat & Seafood</p>
            <p className="text-slate-500 text-sm">20+ Items</p>
          </div>
          <div className="flex flex-col shadow-lg rounded-2xl w-[150px] items-center hover:bg-secondary transition-colors ease-in duration-200 cursor-pointer">
            <img
              src="/assets/milk.png"
              className="w-[60px] h-[60px] mt-8 mb-8"
            ></img>
            <p className="text-md font-bold">Diary</p>
            <p className="text-slate-500 text-sm">20+ Items</p>
          </div>
          <div className="flex flex-col shadow-lg rounded-2xl w-[150px] items-center hover:bg-secondary transition-colors ease-in duration-200 cursor-pointer">
            <img
              src="/assets/bakery.png"
              className="w-[60px] h-[60px] mt-8 mb-8"
            ></img>
            <p className="text-md font-bold">Bakery</p>
            <p className="text-slate-500 text-sm">20+ Items</p>
          </div>
          <div className="flex flex-col shadow-lg rounded-2xl w-[150px] items-center hover:bg-secondary transition-colors ease-in duration-200 cursor-pointer">
            <img
              src="/assets/wine.png"
              className="w-[60px] h-[60px] mt-8 mb-8"
            ></img>
            <p className="text-md font-bold">Wine & Spirits</p>
            <p className="text-slate-500 text-sm">20+ Items</p>
          </div>
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="flex flex-col items-center pt-10 gap-4 bg-green-100 ">
        {" "}
        <p className="text-4xl font-bold">Our Customer Feedback</p>
        <p className="text-slate-400">
          Here are some reviews from our clients!
        </p>
        <div className="flex flex-row w-full justify-center items-center gap-4">
          <img src="/assets/world.png" className="w-[600px] "></img>
          <Carousel className="w-[40%] shadow-lg">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col bg-background-100 w-[full h-[200px] rounded-md">
                  <span className="flex flex-row mt-4 items-center gap-2 ml-2">
                    <img
                      src="/assets/avatar.png"
                      className="h-[48px] w-[48px]"
                    ></img>
                    <p className="font-semibold">George Nakashima</p>
                    <span className="flex flex-row">
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <IoMdStarOutline
                        size={15}
                        className="text-orange-400"
                      ></IoMdStarOutline>
                    </span>
                  </span>
                  <p className="text-sm text-slate-500 ml-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col bg-background-100 w-[full h-[200px] rounded-md">
                  <span className="flex flex-row mt-4 items-center gap-2 ml-2">
                    <img
                      src="/assets/avatar.png"
                      className="h-[48px] w-[48px]"
                    ></img>
                    <p className="font-semibold">George Nakashima</p>
                    <span className="flex flex-row">
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <IoMdStarOutline
                        size={15}
                        className="text-orange-400"
                      ></IoMdStarOutline>
                    </span>
                  </span>
                  <p className="text-sm text-slate-500 ml-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col bg-background-100 w-[full h-[200px] rounded-md">
                  <span className="flex flex-row mt-4 items-center gap-2 ml-2">
                    <img
                      src="/assets/avatar.png"
                      className="h-[48px] w-[48px]"
                    ></img>
                    <p className="font-semibold">George Nakashima</p>
                    <span className="flex flex-row">
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <MdOutlineStar
                        size={15}
                        className="text-orange-400"
                      ></MdOutlineStar>
                      <IoMdStarOutline
                        size={15}
                        className="text-orange-400"
                      ></IoMdStarOutline>
                    </span>
                  </span>
                  <p className="text-sm text-slate-500 ml-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary transition-colors ease-in duration-200" />
            <CarouselNext className="hover:bg-primary transition-colors ease-in duration-200" />
          </Carousel>
        </div>
      </div>

      <Footer></Footer>
    </main>
  );
}
