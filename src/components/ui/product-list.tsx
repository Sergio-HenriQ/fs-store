import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { DialogOverlay } from "@radix-ui/react-dialog";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 2xl:justify-center [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] max-w-[170px] 2xl:hidden">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}

      <div className="hidden gap-9 2xl:flex">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="w-[170px] max-w-[170px]">
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
