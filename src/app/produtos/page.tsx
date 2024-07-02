'client';

import BoxProduct from "@/components/box";
import Footer from "@/components/footer";
import MinBox from "@/components/minbox";
import Sidebar from "@/components/sidebar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Produtos() {
  return (
    <div className="h-full w-screen">
      <Sidebar/>
      <div className="flex flex-col items-center gap-4 mt-6">
          <h1 className={`${poppins.className} text-[35px]`}>Destaques</h1>
          <div className="flex gap-5">
            <MinBox/>
            <MinBox/>
            <MinBox/>
            <MinBox/>
          </div>
        </div>
        <Footer/>
      </div>
  );
}