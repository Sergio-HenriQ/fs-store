import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart.item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import PaymentInfo from "../payment-info";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "@/actions/order";
import { useSession } from "next-auth/react";
const Cart = () => {
  const { data } = useSession();

  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      // redirecionar para o login
      return;
    }

    const order = await createOrder(products, (data?.user as any).id);

    const checkout = await createCheckout(products, order.id);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge variant="heading">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Carrinho vazio, Vamos fazer compras?
              </p>
            )}
          </div>
        </ScrollArea>
      </div>
      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />
          <PaymentInfo info="Subtotal" value={`R$ ${subtotal.toFixed(2)}`} />

          <Separator />
          <PaymentInfo info="Entrega" value="GRÁTIS" />

          <Separator />
          <PaymentInfo
            info="Descontos"
            value={`-R$ ${totalDiscount.toFixed(2)}`}
          />

          <Separator />
          <PaymentInfo info="Total" value={`R$ ${total.toFixed(2)}`} />
        </div>
      )}

      <Button
        className="mt-7 font-bold uppercase"
        onClick={handleFinishPurchaseClick}
      >
        Finalizar compra
      </Button>
    </div>
  );
};

export default Cart;
