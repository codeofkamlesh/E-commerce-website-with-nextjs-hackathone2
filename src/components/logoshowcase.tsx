import type { NextPage } from 'next';
import Image from "next/image";

const CompanyLogo: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-row items-center justify-evenly">
      <Image
        className="w-[85px] h-[87px] object-cover relative"
        width={85}
        height={87}
        alt=""
        src="/Logo4.png"
      />
      <Image
        className="w-[107px] h-[109px] object-cover relative"
        width={107}
        height={109}
        alt=""
        src="/Logo1.png"
      />
      <Image
        className="w-[135px] h-[139px] object-cover relative"
        width={135}
        height={139}
        alt=""
        src="/Logo7.png"
      />
      <Image
        className="w-[63px] h-[65px] object-cover relative"
        width={63}
        height={65}
        alt=""
        src="/Logo2.png"
      />
      <Image
        className="w-[98px] h-[101px] object-cover relative"
        width={98}
        height={101}
        alt=""
        src="/Logo6.png"
      />
      <Image
        className="w-[113px] h-[115px] object-cover relative"
        width={113}
        height={115}
        alt=""
        src="/Logo3.png"
      />
      <Image
        className="w-[84px] h-[87px] object-cover relative"
        width={84}
        height={87}
        alt=""
        src="/Logo5.png"
      />
    </div>
  );
};

export default CompanyLogo;
