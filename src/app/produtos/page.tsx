'use client';

import BoxProduct from "@/components/box";
import Footer from "@/components/footer";
import LargeBox from "@/components/largebox";
import Sidebar from "@/components/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Poppins, Josefin_Sans, Mulish } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const mulish = Mulish({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Produtos() {
  return (
    <div className="h-full w-screen flex flex-col">
      <Sidebar />
      <div className="flex flex-col items-center p-4 lg:p-16 gap-10 w-full">
        <input
          type="text"
          className={`${poppins.className} w-full shadow-md max-w-[400px] sm:max-w-[500px] lg:max-w-[585px] rounded-[6px] border-[0.2px] border-zinc-300 py-1.5 px-3 focus:outline-none`}
          placeholder="Pesquisar..."
        />
          <div className="w-full flex flex-col items-center">
          <div className="flex flex-col max-w-[550px] lg:max-w-[1150px] gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
            </div>
            <div className="hidden sm:flex flex-col ">
              <LargeBox/>
            </div>
            <div className="w-full border border-zinc-600/70 h-[300px]"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
              <BoxProduct />
            </div>
            <div className="w-full border border-zinc-600/70 h-[300px]"></div>
            </div>
            <div className="flex justify-end gap-2 mt-3">
            <ChevronLeft />
            <div className="flex gap-2">
              <h2>1,</h2>
              <h2>2,</h2>
              <h2>3...</h2>
            </div>
            <ChevronRight />
          </div>
          
          </div>
          
      </div>
      <Footer />
    </div>
  );
}
