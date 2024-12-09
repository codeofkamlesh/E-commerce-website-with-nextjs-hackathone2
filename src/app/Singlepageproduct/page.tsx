import type { NextPage } from 'next';
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

const ProductCarousel: NextPage = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center gap-7">
    <div className="w-full md:w-1/2 p-4 ">
     <Image 
     src="/img2.png"
     alt="CHAIR"
     width={600}
     height={400}
     >

     </Image>
    </div>
    <div className="w-full md:w-1/2 p-4">
     <h1 className="w-[200px] text-3xl font-bold text-gray-900 mb-4">
      Library Stool Chair
     </h1>
     <div className="rounded-2xl text-[15px] text-white  mb-4 bg-teal-600 w-[103px] h-[30px] flex justify-center items-center text">
      $20.00 USD
     </div>
     <p className="text-[#272343] opacity-[0.6] mb-4 text-base w-[400px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
     </p>
     <button className="bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center">
     <BsCartDash className='mr-2'/>

      Add To Cart
     </button>
    </div>
   </div>
     
    <div className="relative  w-full text-left text-gray-900 font-inter mt-30">
      

      <div className="flex flex-wrap justify-center gap-3 h-[430px]  mt-35 mb-20">
        <div className="flex flex-col">
        <div className='flex justify-between mb-[-65px] '>
      <h2 className=" top-0 mt-20   left-[50px] text-2xl tracking-wide uppercase text-black font-bold">
        Featured Products
      </h2>
      
        <button className="text-lg text-black font-bold border-b-black border-b-2 mr-4 px-2 py-[-10px] mb-[-70px]">View all</button>
      
      </div>
      
      <div className='flex justify-center'>
        {/* Product 1 */}
        <div className=" relative w-[220px] h-[230px] flex mt-16">
          <Image
            className="absolute top-0 left-1 w-[200px] h-[200px] rounded-md object-cover"
            width={263}
            height={263}
            alt="Library Stool Chair"
            src="/pillowchair.png"
          />
          <div className="absolute bottom-0 text-center flex justify-between items-center w-[200px] ">
            <p className=" capitalize">Library Stool Chair</p>
            <b className="text-base text-black ">$99</b>
          </div>
        </div>
        {/* Product 2 */}
        <div className=" relative w-[220px] h-[230px] flex mt-16">
          <Image
            className="absolute top-0 left-1 w-[200px] h-[200px] rounded-md object-cover"
            width={263}
            height={263}
            alt="Library Stool Chair"
            src="/Image.png"
          />
          <div className="absolute bottom-0 text-center flex justify-between items-center w-[200px] ">
            <p className="text-lg capitalize">Library Stool Chair</p>
            <b className="text-base text-black ">$99</b>
          </div>
        </div>
        {/* Product 1 */}
        <div className=" relative w-[220px] h-[230px] flex mt-16">
          <Image
            className="absolute top-0 left-1 w-[200px] h-[200px] rounded-md object-cover"
            width={263}
            height={263}
            alt="Library Stool Chair"
            src="/img7.png"
          />
          <div className="absolute bottom-0 text-center flex justify-between items-center w-[200px] ">
            <p className="text-lg capitalize">Library Stool Chair</p>
            <b className="text-base text-black ">$99</b>
          </div>
        </div>
        {/* Product 1 */}
        <div className=" relative w-[220px] h-[230px] flex mt-16">
          <Image
            className="absolute top-0 left-1 w-[200px] h-[200px] rounded-md object-cover"
            width={263}
            height={263}
            alt="Library Stool Chair"
            src="/img3.png"
          />
          <div className="absolute bottom-0 text-center flex justify-between items-center w-[200px] ">
            <p className="text-lg capitalize">Library Stool Chair</p>
            <b className="text-base text-black ">$99</b>
          </div>
        </div>
        {/* Product 1 */}
        <div className=" relative w-[220px] h-[230px] flex mt-16">
          <Image
            className="absolute top-0 left-1 w-[200px] h-[200px] rounded-md object-cover"
            width={263}
            height={263}
            alt="Library Stool Chair"
            src="/img5.png"
          />
          <div className="absolute bottom-0 text-center flex justify-between items-center w-[200px] ">
            <p className="text-lg capitalize">Library Stool Chair</p>
            <b className="text-base text-black ">$99</b>
          </div>
        </div>
        </div>
        </div>
        
      </div>

      
    </div>
  

         

      <div className="absolute top-0 left-[1351px] w-[75px] h-[31px] text-[18px] text-black">
        <b>View all</b>
        <div className="absolute top-[31px] left-0 w-[77px] h-[2px] border-t-[2px] border-black" />
      </div>
    
    </>
  );
};

export default ProductCarousel;