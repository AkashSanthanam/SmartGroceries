import React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/";

import ProductCard from "@/components/ProductCard";
import { mussels } from "../../../../../public/data/seafood";


const columns = 6;
export default async function Page() {
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {mussels.map((item, index) => (
        <ProductCard key={index} item={item} index={index} columns={columns} />
      ))}
    </div>
  );
}
