import { NextPage } from "next";
import Image from "next/image";

const FeaturedProducts: NextPage = () => {
  const products = [
    { image: "/img1.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img2.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img3.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img4.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img5.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img6.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img7.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
    { image: "/img8.png", name: "Library Stool Chair", price: 20, originalPrice: 39 },
  ];

  return (
    <div className="flex flex-col items-center py-8">
      {/* Heading Section */}
      <div className="flex justify-between w-full px-12 items-center">
        <div className="text-2xl font-semibold capitalize">All Products</div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-32">
        {products.map((product, index) => (
          <div key={index} className="relative w-full h-auto bg-white rounded-lg shadow-lg p-4">
            <Image
              className="rounded-md"
              width={312}
              height={312}
              alt={`Product Image ${index + 1}`}
              src={product.image}
            />
            <div className="flex flex-col mt-4">
              <div className="text-lg font-medium capitalize">{product.name}</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-xl font-bold text-gray-800">${product.price}</div>
                <div className="text-sm line-through text-gray-400">${product.originalPrice}</div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className={`absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 transition-all duration-300 ${
                index === 0
                  ? "bg-[#029fae] text-white" // First card: blue background and white icon
                  : "bg-white text-black border border-gray-300 hover:bg-[#029fae] hover:text-white" // Other cards: hover changes background and text/icon color
              } rounded-sm shadow-md`}
              aria-label="Add to Cart"
            >
              <Image
                width={24}
                height={24}
                alt="Add to Cart"
                src="/addCart.png"
                className={`${index !== 0 ? "filter invert hover:filter-none" : ""}`} // Change icon to white on hover
              />
            </button>

            {/* Conditionally add "New" and "Sales" with spacing */}
            {index % 4 === 0 && (
              <div className="absolute top-6 left-6 px-3 py-1 text-white rounded-md text-sm bg-green-500">
                New
              </div>
            )}
            {index % 4 === 1 && (
              <div className="absolute top-6 left-6 px-3 py-1 text-white rounded-md text-sm bg-[#f5813f]">
                Sales
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
