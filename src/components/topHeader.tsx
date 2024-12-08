import type { NextPage } from "next";
import { FaCartShopping } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Navigation: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-auto flex flex-col items-start text-left text-xs text-white font-inter overflow-x-hidden">
      <div className="w-full bg-[#3b3466] flex items-center justify-between p-[14px_10%] box-border">
        <div className="flex items-center opacity-70 justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              className="w-[16px] h-[16px] overflow-hidden flex-shrink-0"
              width={16}
              height={16}
              alt=""
              src="/check1.png"
            />
            <div className="relative leading-[110%] capitalize">
              Free shipping on all orders over $50
            </div>
          </div>
          <div className="flex items-center gap-6 opacity-70 text-center">
            <div className="flex items-center gap-1">
              <div className="relative leading-[130%]">Eng</div>
              <Image
                className="w-[7px] h-[3.5px]"
                width={7}
                height={4}
                alt="hjk"
                src="/Group.png"
              />
            </div>
            <div className="hidden items-center gap-1">
              <div className="relative leading-[130%]">USD</div>
              <Image
                className="w-[7px] h-[3.5px]"
                width={7}
                height={4}
                alt=""
                src="Group.svg"
              />
            </div>
            <div className="relative leading-[130%]">Faqs</div>
            <div className="flex items-start gap-1 opacity-70">
              <Image
                className="w-[16px] h-[16px] overflow-hidden flex-shrink-0"
                width={16}
                height={16}
                alt=""
                src="/alert-circle1.png"
              />
              <div className="relative leading-[130%]">Need Help</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f0f2f3] flex items-center justify-between p-[20px_10%] box-border text-2xl text-[#272343]">
        <div className="flex items-center gap-2">
          <Image
            className="w-[40px] h-[40px] overflow-hidden flex-shrink-0"
            width={40}
            height={40}
            alt=""
            src="/Logoicon.png"
          />
          <div className="relative leading-[120%] font-medium">Comforty</div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="bg-white rounded-xl p-[11px_16px] flex items-center gap-3 text-black">
          <FaCartShopping className="w-6 h-6" />
            <div className="relative leading-[130%]">
            <Link href="Cart">Cart</Link>
              
              </div>
          </div>
          <div className="relative w-[20px] h-[20px] text-xs font-dm-sans text-white">
            <div className="absolute top-0 left-0 rounded-full bg-[#007580] w-[20px] h-[20px]" />
            <div className="absolute top-[5px] left-[7px] leading-[100%] capitalize font-medium">
              2
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-[0_1px_0px_#e1e3e5] bg-white h-[74px] flex items-center justify-between p-[14px_10%] box-border text-xs text-[#636270]">
        <div className="flex items-center gap-8">
          <div className="relative leading-[110%] text-[#007580] capitalize font-medium">
            <Link href="/">Home</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            Shop
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="Product">Product</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            Pages
          </div>
          <div className="relative leading-[110%] capitalize font-medium">
            <Link href="About">About</Link>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="relative leading-[110%] capitalize font-medium">
          <Link href="ContactUs">Contact Us</Link>
          </div>
          <div className="relative leading-[110%] capitalize font-medium text-[#272343]">
            (808) 555-0111
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
