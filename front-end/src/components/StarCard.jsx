"use client";

import React from "react";
import Link from "next/link";

import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function StarCard({ item }) {
  return (
    <div className="flex flex-row gap-4">
      <img src={item.Image} className="w-[100px] h-[100px]"></img>
      <div className="flex flex-col">
        <span className="flex flex-row">
          <MdOutlineStar size={15} className="text-orange-400"></MdOutlineStar>
          <MdOutlineStar size={15} className="text-orange-400"></MdOutlineStar>
          <MdOutlineStar size={15} className="text-orange-400"></MdOutlineStar>
          <MdOutlineStar size={15} className="text-orange-400"></MdOutlineStar>
          <IoMdStarOutline
            size={15}
            className="text-orange-400"
          ></IoMdStarOutline>
        </span>
        <p className="font-semibold max-w-[170px] truncate ">{item.Name}</p>
        <p>${item.Price}</p>
        <Link
          href="/shop"
          className="pt-2 flex flex-row items-center gap-2 cursor-pointer hover:text-third transition-colors ease-in duration-200 text-sm"
        >
          Shop Now <FaArrowRightLong size={10}></FaArrowRightLong>
        </Link>
      </div>
    </div>
  );
}
