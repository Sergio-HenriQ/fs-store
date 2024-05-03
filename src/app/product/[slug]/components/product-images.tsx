"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imagesUrl: string[];
}

const ProductImages = ({ imagesUrl, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrl[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col">
      <div className=" flex h-[380px] w-full  items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-[auto] max-h-[70%] w-[auto] max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imagesUrl.map((imagesUrl) => (
          <button
            key={imagesUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imagesUrl === currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imagesUrl)}
          >
            <Image
              src={imagesUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            ></Image>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
