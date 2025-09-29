import React from "react";

import ProductCard from "@/components/ProductCard";
import { ribs } from "../../../../../../public/data/beef";


const columns = 6;
export default async function Page() {
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {ribs.map((item, index) => (
        <ProductCard key={index} item={item} index={index} columns={columns} />
      ))}
    </div>
  );
}
