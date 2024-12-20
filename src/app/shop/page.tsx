import React from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Shop = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      {/* Header Section */}
      <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-center mb-6 bg-orange-500 py-3">
        Chairs Collection Shop
      </h1>
      <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-center text-gray-600 mb-4 underline">
        Office Chairs
      </h2>

      {/* Carousel Section */}
      <div className="relative">
        <Carousel className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-full mx-auto">
          <CarouselContent className="flex gap-4">
            {[
              "office1.png",
              "office2.png",
              "office3.jpg",
              "office4.jpg",
              "office5.jpg",
              "office6.jpg",
              "office7.jpg",
              "office8.jpg",
            ].map((src, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Image
                  src={`/${src}`}
                  alt={`Office Chair ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2">
            &lt;
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2">
            &gt;
          </CarouselNext>
        </Carousel>
      </div>

      {/* Section: Stool Chairs */}
      <div className="flex flex-col mt-10 bg-white pb-10">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-center text-black mb-4 underline py-5">
          Stool Chairs
        </h2>
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8 2xl:gap-10">
          {["stool1.jpg", "stool3.jpg", "stool2.jpg", "stool5.jpg", "stool4.jpg"].map(
            (src, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/${src}`}
                  alt={`Stool Chair ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div className="flex justify-between w-full pt-2">
                  <h4 className="font-bold text-lg">$50</h4>
                  <FaCartPlus className="text-2xl cursor-pointer" />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Section: Comfort Chairs */}
      <div className="flex flex-col mt-10 bg-white pb-10">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-center text-black mb-4 underline py-5">
          Comfort Chairs
        </h2>
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8 2xl:gap-10">
          {[
            "comfort4.jpg",
            "comfort3.jpg",
            "comfort1.jpg",
            "comfort5.jpg",
            "comfort2.jpg",
          ].map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/${src}`}
                alt={`Comfort Chair ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <div className="flex justify-between w-full pt-2">
                <h4 className="font-bold text-lg">$100</h4>
                <FaCartPlus className="text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Sofa Collection */}
      <div className="flex flex-col mt-10 bg-white pb-10">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold text-center text-black mb-4 underline py-5">
          Sofa Collection
        </h2>
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8 2xl:gap-10">
          {["sofa1.jpg", "sofa3.jpg"].map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/${src}`}
                alt={`Sofa ${index + 1}`}
                width={400}
                height={200}
                className="rounded-lg shadow-md"
              />
              <div className="flex justify-between w-full pt-2">
                <h4 className="font-bold text-lg">
                  ${index === 0 ? 200 : 100}
                </h4>
                <FaCartPlus className="text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
