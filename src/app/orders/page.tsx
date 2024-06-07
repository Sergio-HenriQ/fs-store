import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShoppingBasketIcon } from "lucide-react";
import OrderItem from "./components/order-Item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

const OrdersPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: { product: true },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 p-5 2xl:m-auto 2xl:w-[1240px] 2xl:px-0 ">
      <Badge className="ml-5 2xl:my-4 2xl:ml-0" variant="heading">
        <ShoppingBasketIcon size={16} />
        Meus pedidos
      </Badge>

      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrdersPage;
