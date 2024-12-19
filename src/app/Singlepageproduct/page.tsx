import type { NextPage } from 'next';
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

const ProductCarousel: NextPage = () => {
  // Array of image details
  const products = [
    { src: "/pillowchair.png", alt: "Chair 1", name: "Classic Chair", price: "$89" },
    { src: "/Image.png", alt: "Chair 2", name: "Elegant Chair", price: "$99" },
    { src: "/Img7.png", alt: "Chair 3", name: "Luxury Chair", price: "$120" },
    { src: "/img3.png", alt: "Chair 4", name: "Cozy Chair", price: "$75" },
    { src: "/img5.png", alt: "Chair 5", name: "Modern Chair", price: "$110" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Product Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="w-full lg:w-1/2">
          <Image 
            src="/img2.png"
            alt="CHAIR"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Library Stool Chair
          </h1>
          <div className="inline-block rounded-full text-sm text-white bg-teal-600 px-4 py-1">
            $20.00 USD
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-teal-700 transition-colors">
            <BsCartDash className="mr-2"/>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 uppercase">
            Featured Products
          </h2>
          <button className="text-lg font-bold text-gray-900 border-b-2 border-gray-900 mr-[10px] hover:text-teal-600 hover:border-teal-600 transition-colors">
            View all
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-square mb-2">
                <Image
                  className="rounded-md object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={product.alt}
                  src={product.src}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm capitalize">{product.name}</p>
                <b className="text-sm text-black">{product.price}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
