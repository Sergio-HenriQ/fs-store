import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <>
      <div className="hidden 2xl:block">
        <Image
          src="/offer-banner.png"
          alt="Banner de oferta"
          width={0}
          height={0}
          className="h-[500px] w-full object-cover"
          sizes="100vw"
        />
      </div>
      <div className="2xl:m-auto 2xl:flex 2xl:w-[1240px] 2xl:max-w-[1240px] 2xl:flex-col 2xl:gap-8">
        <div className="flex flex-col gap-8 py-8">
          <PromoBanner
            src="/banner-home-01.png"
            alt="Até 55% de desconto esse mês!"
            className=" h-auto w-full px-5 2xl:hidden"
          />
          <div className="px-5 2xl:w-full">
            <Categories />
          </div>

          <div>
            <SectionTitle>Ofertas</SectionTitle>
            <ProductList products={deals} />
          </div>

          <div className="hidden 2xl:flex">
            <PromoBanner
              src="/banner-home-02.png"
              alt="Até 55% de desconto em mouses!"
              className="h-[215px] grow px-5"
            />
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 20% de desconto em mouses!"
              className="h-[215px] grow px-5"
            />
          </div>
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses!"
            className=" h-auto w-full px-5 2xl:hidden"
          />
          <div>
            <SectionTitle>Teclados</SectionTitle>
            <ProductList products={keyboards} />
          </div>
          <div className="hidden 2xl:flex">
            <Image
              src="/banner-free-shipping.png"
              alt="Frete grátis para todo o Brasil."
              width={0}
              height={0}
              className="h-[250px] w-full object-cover px-5"
              sizes="100vw"
            />
          </div>

          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 20% de desconto em mouses!"
            className="h-auto w-full px-5 2xl:hidden"
          />

          <div>
            <SectionTitle>Mouses</SectionTitle>
            <ProductList products={mouses} />
          </div>
        </div>
      </div>
    </>
  );
}
