import React from "react";

import { shredded } from "../../../../../../public/data/cheese";
import ProductCard from "@/components/ProductCard";

const columns = 6;
export default async function Page() {
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {shredded.map((item, index) => (
        <ProductCard key={index} item={item} index={index} columns={columns} />
      ))}
    </div>
  );
}
