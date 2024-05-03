import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart.item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import PaymentInfo from "../payment-info";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
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
    </div>
  );
};

export default Cart;