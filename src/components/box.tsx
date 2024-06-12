import { Poppins, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import FotoProduto from "@/app/assets/1-removebg-preview 2.svg"

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function BoxProduct() {
  return <div className={`${poppins.className} bg-zinc-50 flex flex-col border rounded-xl border-[#421E14]/70 max-w-[280px] p-4 text-[#421E14] gap-3`}>
    <Image src={FotoProduto} className="w-100 h-100 mb-2 hover:bg-zinc-100 transition duration-400 rounded-xl p-2" alt="Imagem produtos"/>
    <h1 className="text-[20px] font-medium mb-[-8px]">Drageas</h1>
    <p className="text-[#3F3F46]/80">*Pequena explicação do produto*</p>
      <h1 className="text-[18px] font-medium ">Por: R$79,90</h1>
      <button className="border rounded-xl font-medium py-1 px-3 text-white border-[#421E14] bg-[#421E14] hover:bg-white hover:text-[#421E14] transition duration-300">Comprar</button>
  </div>;
}