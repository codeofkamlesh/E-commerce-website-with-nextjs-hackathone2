import { NextPage } from 'next';
import Image from "next/image";

const FeaturedProducts: NextPage = () => {
  // Define the array of image paths
  const images: string[] = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img6.png",
  ];

  return (
    <div className="flex flex-col items-center py-8">
      {/* Heading Section */}
      <div className="flex justify-between w-full px-12 items-center">
        <div className="text-2xl font-semibold capitalize">All Products</div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-32"> {/* Increased gap for more space between items */}
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-auto bg-white rounded-lg shadow-lg p-4">
            <Image
              className="rounded-md"
              width={312}
              height={312}
              alt={`Product Image ${index + 1}`}
              src={image}
            />
            <div className="flex flex-col mt-4">
              <div className="text-lg font-medium capitalize">Library Stool Chair</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-xl font-bold text-gray-800">$20</div>
                <div className="text-sm line-through text-gray-400">$39</div>
              </div>
            </div>
            <button
              className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-sm shadow-md hover:bg-blue-600"
              aria-label="Add to Cart"
            >
              <Image
                width={24}
                height={24}
                alt="Add to Cart"
                src="/addCart.png"
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
