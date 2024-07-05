import { Poppins } from "next/font/google";
import Image from "next/image";
import FotoProduto from "@/app/assets/1-removebg-preview 2.svg";
import { ShoppingBag } from "lucide-react";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function LargeBox() {
  return (
    <div className={`${poppins.className} bg-white flex rounded-xl border-zinc-300 border-[0.2px] p-4 text-yellow-950 gap-8 h-[240px] hover:scale-[1.01] transition-[2s] shadow-xl`}>
        <Image src={FotoProduto} width={220} alt="foto produto" className="m-5"/>
        <div className="w-full flex flex-col justify-around pr-10">
          <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">Drágeas</h1>
          <p className="text-[#3F3F46]/80 text-[12px] sm:text-[14px]">
          *Pequena explicação do produto*
          </p>
          </div>
          <div className="w-full flex flex-col gap-2">
          <h1 className="text-[18px] font-medium ">R$79,90</h1>
          <button className="flex justify-center w-full gap-2 bg-yellow-950 text-white p-3 rounded-[10px] font-medium border border-yellow-950 hover:bg-white hover:text-yellow-950 transition duration-300"><ShoppingBag/> Comprar item </button>
          </div>
        </div>
    </div>
  );
}
