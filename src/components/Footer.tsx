import Link from "next/link"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaFacebookF} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




  
  
   

export function Footer() {
  return (
    <footer className="bg-white p-12 border-t">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
           
            <Link href="/" className="flex items-center space-x-2">
            <Image
            alt="LOGO"
            src="/LogoIcon.png"
            width={40}
            height={40}
            >
            </Image>
              <span className="text-xl font-bold">Comforty</span>
            </Link>
            <p className="text-sm text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary">
              <FaFacebookF className="h-10 w-10 p-1 rounded-full border border-black text-black " />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
              <CiTwitter className="h-10 w-10 p-1 rounded-full border border-black text-black" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">

              <FaInstagram className="h-10 w-10 p-1 rounded-full border border-black text-black"/>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
              <FaYoutube className="h-10 w-10 p-1 rounded-full border border-black text-black"/>

              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">CATEGORY</h3>
            <ul className="space-y-2">
              {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "wooden Chair", "Park Bench"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              {[
                "Help & Support",
                "Tearms & Conditions",
                "Privacy Policy",
                "Help",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">NEWSLETTER</h3>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 - Blogy - Designed & Develop by Zokrsoft</p>
          <div className="flex items-center gap-2">
            <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">PayPal</span>
            </div>
            <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">Visa</span>
            </div>
            <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs text-gray-600">Master</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

