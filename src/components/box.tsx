import { Poppins } from "next/font/google";
import Image from "next/image";
import FotoProduto from "@/app/assets/1-removebg-preview 2.svg";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function BoxProduct() {
  return (
    <div className={`${poppins.className} max-w-[280px] h-[370px] bg-white flex flex-col items-center justify-between text-center rounded-xl  p-4 text-yellow-950 shadow-lg border-zinc-300 border-[0.2px]`}>
      <Image 
        src={FotoProduto} 
        className="w-full h-auto mb-2 hover:bg-zinc-100 transition duration-400 rounded-xl p-2 object-contain" 
        alt="Imagem produtos" 
      />
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-[20px] font-semibold">Drágeas</h1>
        <p className="text-[#3F3F46]/80 text-[12px] sm:text-[12px]">
          *Pequena explicação do produto*
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 mt-auto">
        <h1 className="text-[18px] font-medium">R$79,90</h1>
        <button className="w-full border rounded-[6px] font-medium py-1 px-3 text-white border-yellow-950 bg-yellow-950 hover:bg-white hover:text-yellow-950 transition duration-300">
          Comprar
        </button>
      </div>
    </div>
  );
}
