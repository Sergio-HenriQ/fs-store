import CategoryItem from "./category-item";
import { prismaClient } from "@/lib/prisma";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 2xl:flex">
      {categories.map((category) => (
        <div key={category.id} className=" 2xl:grow">
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
