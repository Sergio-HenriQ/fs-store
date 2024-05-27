import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Prisma } from "@prisma/client";
import OrderProductItem from "./order-product-item";
import PaymentInfo from "@/components/payment-info";
import { format } from "date-fns";
import { getOrderStatus } from "../helpers/status";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);

      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscount = subtotal - total;

  return (
    <div className="flex flex-col items-center">
      <Accordion type="single" collapsible className="w-[330px]">
        <AccordionItem value={order.id}>
          <AccordionTrigger className="px-5 text-start">
            <div className="flex flex-col">
              <p className="font-bold uppercase">
                Pedido com {order.orderProducts.length} produto(s)
              </p>
              <span className="text-sm opacity-60">
                Feito em {format(order.createdAt, "d/MM/y 'ás' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between px-5 pb-5 text-xs">
              <div className="flex flex-col">
                <div className="font-bold">
                  <p>STATUS</p>
                  <p className="text-xs text-[#8162FF]">
                    {getOrderStatus(order.status)}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold">DATA</p>
                <p className="opacity-75">
                  {format(order.createdAt, "d/MM/y")}
                </p>
              </div>
              <div>
                <p className="font-bold">PAGAMENTO</p>
                <p className="opacity-75">Cartão</p>
              </div>
            </div>
            <div className="px-4">
              <Separator />
            </div>
            {order.orderProducts.map((orderProduct) => (
              <OrderProductItem
                key={orderProduct.id}
                orderProduct={orderProduct}
              />
            ))}
            <div className="px-4 pt-5">
              <div className="flex flex-col gap-3">
                <Separator />
                <PaymentInfo
                  info="Subtotal"
                  value={`R$ ${subtotal.toFixed(2)}`}
                />

                <Separator />
                <PaymentInfo info="Entrega" value="GRÁTIS" />

                <Separator />
                <PaymentInfo
                  info="Descontos"
                  value={`-R$ ${totalDiscount.toFixed(2)}`}
                />

                <Separator />
                <PaymentInfo
                  className="flex items-center justify-between font-bold"
                  info="Total"
                  value={`R$ ${total.toFixed(2)}`}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrderItem;
