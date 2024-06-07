import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5 2xl:items-center">
      <div>
        <Badge variant="heading">
          {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
          {category.name}
        </Badge>
        <div className="grid grid-cols-2 gap-8 pt-[32px] 2xl:flex">
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
