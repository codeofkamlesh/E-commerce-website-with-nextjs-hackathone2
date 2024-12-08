import { NextPage } from 'next';
import Image from "next/image";

const NewsletterInstagram: NextPage = () => {
  return (
    <div className="relative bg-gray-100 w-full flex flex-col items-center justify-start py-24 px-40 gap-16 text-center text-base text-gray-500 font-roboto">
      {/* Newsletter Section */}
      <div className="relative w-[760px] h-[165px]">
        <div className="absolute top-0 left-0 w-full h-[32px] text-left">
          <div className="relative w-full h-full">
            <div className="absolute top-[120px] left-2.5 text-lg font-semibold">Email address...</div>
            <div className="absolute top-[150px] left-[-0.16%] right-[-0.16%] border-t-2 border-black box-border w-[80%]"></div>
          </div>
        </div>

        <div className="absolute top-[90px] left-[669px] flex flex-col items-center justify-center gap-2 text-[#1e2832] font-open-sans">
          <div className="flex items-center justify-center py-4 px-4 gap-4 border-b-2 border-[#1e2832] w-full">
            <div className="text-lg font-medium">SUBMIT</div>
          </div>
        </div>
        
        <div className="absolute top-0 left-6 text-5xl font-bold text-black">Or subscribe to the newsletter</div>
      </div>

      {/* Instagram Section */}
      <div className="relative w-[1324px] h-[319px] text-5xl font-bold text-black">
        <div className="absolute top-0 left-[151px]">
          <div className="font-[50px]">Follow Products and Discounts on Instagram</div>
        </div>
    
        <div className="absolute top-[119px] left-0 w-full flex items-center justify-center gap-6">
          <Image className="w-[186px] h-[186px] rounded-lg object-cover" width={186} height={186} alt="Instagram 1" src="/img6.png" />
          <Image className="w-[186px] h-[186px] rounded-lg object-cover" width={186} height={186} alt="Instagram 1" src="/img5.png" />
          <Image className="w-[200px] h-[200px] rounded-lg object-cover" width={200} height={200} alt="Instagram 2" src="/img2.png" />
          <Image className="w-[200px] h-[200px] rounded-lg object-cover" width={200} height={200} alt="Instagram 3" src="/img1.png" />
          <Image className="w-[200px] h-[200px] rounded-lg object-cover" width={200} height={200} alt="Instagram 4" src="/img3.png" />
          <Image className="w-[196px] h-[196px] rounded-lg object-cover" width={196} height={196} alt="Instagram 5" src="/img7.png" />
          {/* <Image className="w-[200px] h-[200px] rounded-lg object-cover" width={200} height={200} alt="Card" src="/card.png" /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterInstagram;
