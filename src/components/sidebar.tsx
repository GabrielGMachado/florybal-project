'use client';

import { Heart, History, Home, LogOut, Menu, PackageSearch, Settings, ShoppingCart } from "lucide-react";
import { Poppins, Josefin_Sans, Cabin, Hind_Siliguri } from "next/font/google";
import Image from "next/image";
import Logo from "@/app/assets/logo_florybal.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";


const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const cabin = Cabin({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const hind = Hind_Siliguri({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const menuList = [
  { link: "/", icon: <Home className="w-7 h-7" />, text: "Início" },
  { link: "/produtos/produtos", icon: <PackageSearch className="w-7 h-7" />, text: "Produtos" },
  { link: "/favoritos/favoritos", icon: <Heart className="w-7 h-7" />, text: "Favoritos" },
  { link: "/carrinho/carrinho", icon: <ShoppingCart className="w-7 h-7" />, text: "Carrinho" },
  { link: "/historico/historico", icon: <History className="w-7 h-7" />, text: "Histórico" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        <motion.nav
          initial={{ width: windowWidth <= 640 ? (isOpen ? 280 : 0) : (isOpen ? 280 : 73) }}
          animate={{ width: windowWidth <= 640 ? (isOpen ? 280 : 0) : (isOpen ? 280 : 73) }}
          exit={{ width: 0 }}
          className="flex flex-col justify-between sidebar bg-white h-screen fixed z-20 text-[#421E14] border-r border-[#421E14]/30 overflow-hidden"
        >
          <div>
            <div className="flex items-center cursor-pointer whitespace-nowrap h-[71px] px-6">
              <div className="flex items-center justify-center gap-9">
                <Menu className="w-7 h-7" onClick={handleToggle} />
                <h2 className={`${hind.className} font-normal text-[26px] text-[#421E14] select-none z-30`}>
            Florybal Ivoti
          </h2>
              </div>
            </div>
            <div className="border-t border-[#421E14]/30 shadow-md"></div>

            <div className="p-4">
              {menuList.map((menuItem, index) => (
                <Link
                  href={menuItem.link}
                  key={index}
                  className={`${hind.className} flex items-center hover:bg-gray-200 transition duration-200 rounded-xl gap-5 py-3 px-2 font-thin`}>
                  <p className="flex gap-5">{menuItem.icon} 
                  <span className={`${isOpen ? '' : 'hidden'} text-[18px]`}>{menuItem.text}</span></p>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className={`${hind.className} flex items-center hover:bg-gray-200 transition duration-200 rounded-xl gap-5 py-3 px-2 font-thin text-[18px]`}>
              <p className="flex gap-5"><Settings className="w-7 h-7" /><span className={`${isOpen ? '' : 'hidden'} cursor-pointer`}>Configurações</span> </p>
              
            </div>

            <div className="mt-2 flex items-center justify-between rounded-xl">
            <p className="flex items-center gap-2 w-full">
            <Avatar className={`${isOpen ? '' : 'hidden'}`}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className={`${isOpen ? '' : 'hidden'}`}/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              <span className={`${isOpen ? '' : 'hidden'} flex flex-col`}>
                <span className="font-bold text-[16px] mb-[-2px]">UserName</span>
                <span className="text-[14px]">Email@Gmail.com</span>
              </span>
            </p>
            <div className="hover:bg-gray-200 transition duration-200 rounded-xl py-3 px-2">
                <LogOut className="w-6 h-6 z-20 cursor-pointer" />
                </div>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      <header className="flex items-center p-4 bg-white border-b border-[#421E14]/30 ">
        <div className="flex items-center gap-5 grow px-6">
        <Menu className="w-7 h-7 text-[#421E14]" onClick={handleToggle} />
          <h2 className={`${hind.className} font-normal text-[26px] text-[#421E14] select-none`}>  
            Florybal Ivoti
          </h2>
        </div>
        <Image src={Logo} width={50} alt="Logo Florybal" />
      </header>
    </div>
  );
}
