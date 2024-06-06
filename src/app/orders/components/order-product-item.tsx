"use client";
import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const { totalPrice } = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex flex-col">
      <div className="flex w-full gap-4 px-5 pt-5">
        <div className="flex h-[77px] w-[77px] justify-center rounded-lg bg-accent 2xl:h-[91px] 2xl:w-[91px]">
          <Image
            alt={orderProduct.product.name}
            src={orderProduct.product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="max-h[80%] h-auto w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="flex flex-col gap-[0.625rem] 2xl:relative 2xl:h-[91px] 2xl:w-[1090px] 2xl:gap-5">
          <p className="h-[20px] rounded-sm bg-accent px-[10px] text-[0.625rem] font-normal 2xl:w-max 2xl:text-xs">
            Vendido e entregue por:{" "}
            <span className="font-semibold">FSW Store</span>
          </p>
          <p className="text-xs font-normal 2xl:text-sm">
            {orderProduct.product.name}
          </p>
          <div className="hidden text-xs font-normal opacity-65 2xl:block">
            <p>Quantidade: {orderProduct.quantity}</p>
          </div>
          <div className="flex justify-between 2xl:absolute 2xl:right-0 2xl:top-4">
            <div className="flex items-center gap-1 2xl:flex-col">
              <span className="text-sm font-semibold 2xl:text-xl 2xl:font-bold">
                R$ {totalPrice.toFixed(2)}
              </span>
              {orderProduct.product.discountPercentage > 0 && (
                <span className="text-xs font-normal line-through opacity-55 2xl:pl-8 2xl:text-sm">
                  R${Number(orderProduct.product.basePrice).toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs font-normal opacity-65 2xl:hidden">
              <p>Qtd:{orderProduct.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
