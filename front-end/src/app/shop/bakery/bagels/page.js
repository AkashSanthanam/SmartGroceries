import ProductCard from "@/components/ProductCard";
import { bagels } from "../../../../../public/data/bakery";

export default function Page() {
  const columns = 6;
  return (
    <div className="w-full grid grid-cols-6 pt-4 px-12 gap-x-2 gap-y-4 ">
      {bagels.map((item, index) => (
        <ProductCard key={index} item={item} index={index} columns={columns} />
      ))}
    </div>
  );
}
