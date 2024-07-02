import { Poppins, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import FotoProduto from "@/app/assets/1-removebg-preview 2.svg"

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function MinBox() {
  return <div className={`${poppins.className} bg-zinc-50 flex flex-col border rounded-xl border-[#421E14]/70 max-w-[300px] p-2 text-[#421E14] gap-3 hover:scale-[1.01] transition-all`}>
    <Image src={FotoProduto} className="w-100 h-100 mb-2  transition duration-400 rounded-xl p-2" alt="Imagem produtos"/>
  </div>;
}