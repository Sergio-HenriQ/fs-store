import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="flex flex-col p-5">
      <div className="2xl:m-auto 2xl:w-[1240px] 2xl:max-w-[1240px]">
        <Badge variant="heading">
          <ShapesIcon size={16} />
          Catálogo
        </Badge>
        <div className="grid grid-cols-2 flex-wrap gap-8 pt-[32px] 2xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
