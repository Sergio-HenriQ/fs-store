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
        <div className="flex h-[77px] w-[77px] justify-center rounded-lg bg-accent">
          <Image
            alt={orderProduct.product.name}
            src={orderProduct.product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="max-h[80%] h-auto w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="flex flex-col gap-[0.625rem]">
          <p className="h-[20px] rounded-sm bg-accent px-[10px] text-[0.625rem] font-normal">
            Vendido e entregue por:{" "}
            <span className="font-semibold">FSW Store</span>
          </p>
          <p className="text-xs font-normal">{orderProduct.product.name}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">
                R$ {totalPrice.toFixed(2)}
              </span>
              {orderProduct.product.discountPercentage > 0 && (
                <span className="text-xs font-normal line-through opacity-55">
                  R${Number(orderProduct.product.basePrice).toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs font-normal opacity-65">
              <p>Qtd:{orderProduct.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
