import type { NextPage } from "next";
import Image from "next/image";

const CompanyLogo: NextPage = () => {
  const logos = [
    { src: "/Logo4.png", alt: "Logo 4", width: 85, height: 87 },
    { src: "/Logo1.png", alt: "Logo 1", width: 107, height: 109 },
    { src: "/Logo7.png", alt: "Logo 7", width: 135, height: 139 },
    { src: "/Logo2.png", alt: "Logo 2", width: 63, height: 65 },
    { src: "/Logo6.png", alt: "Logo 6", width: 98, height: 101 },
    { src: "/Logo3.png", alt: "Logo 3", width: 113, height: 115 },
    { src: "/Logo5.png", alt: "Logo 5", width: 84, height: 87 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center w-full h-full">
            <Image
              className="object-contain w-auto h-auto max-h-16 sm:max-h-20 md:max-h-24"
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              src={logo.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;

