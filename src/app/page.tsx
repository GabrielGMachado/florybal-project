import Image from "next/image";
import { Josefin_Sans, Poppins, Cabin } from "next/font/google";
import bgimage1 from '@/app/assets/Barra_de_Chocolate_Simples_Smaller.svg';
import bgimage2 from '@/app/assets/ManyChocolatesEditedSmaller.svg';
import Especialista from "@/components/specialbox";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="relative flex w-full items-center justify-center mt-[-230px] gap-[400px] mb-[-130px]">
        
        <div className="flex flex-col items-center w-1/2 mt-[500px] select-none">
          <Image src={bgimage1} alt="Left Image" width={550} height={550} className="img1"/>  
        </div>
        
        <div className="absolute flex flex-col items-center justify-center max-w-[900px] text-[#421E14] text-center">
          <h1 className={`${josefin.className} text-[87px] leading-[80px] font-bold mt-[100px]`}>
            Chocolates Artesanais <br />Feitos com Paixão
          </h1>

          <p className={`${poppins.className} mt-5 w-[630px]`}>
            A Florybal é uma joia entre os amantes de chocolates, conquistando paladares e corações com sua mistura única de ingredientes de alta qualidade e técnicas.
          </p>

          <button className={`${poppins.className} mt-10 py-2 px-5 rounded-[25px] bg-[#421E14] text-white font-extralight text-[15px] hover:bg-[#4d2920] hover:scale-[1.05] transition duration-200`}>
            Comprar agora
          </button>
        </div>
        
        <div className="flex flex-col items-center w-1/2 mt-[500px] select-none">
          <Image src={bgimage2} alt="Right Image" width={550} height={550} className="img2"/>  
        </div>

      </div>

      <svg id="wave" className="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 340" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(66, 30, 20, 1)" offset="0%"></stop><stop stop-color="rgba(20.811, 9.771, 6.705, 1)" offset="100%"></stop></linearGradient></defs><path className="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,68L60,102C120,136,240,204,360,209.7C480,215,600,159,720,119C840,79,960,57,1080,73.7C1200,91,1320,147,1440,141.7C1560,136,1680,68,1800,68C1920,68,2040,136,2160,153C2280,170,2400,136,2520,153C2640,170,2760,238,2880,232.3C3000,227,3120,147,3240,136C3360,125,3480,181,3600,187C3720,193,3840,147,3960,136C4080,125,4200,147,4320,141.7C4440,136,4560,102,4680,79.3C4800,57,4920,45,5040,34C5160,23,5280,11,5400,11.3C5520,11,5640,23,5760,45.3C5880,68,6000,102,6120,102C6240,102,6360,68,6480,45.3C6600,23,6720,11,6840,56.7C6960,102,7080,204,7200,249.3C7320,295,7440,283,7560,243.7C7680,204,7800,136,7920,136C8040,136,8160,204,8280,226.7C8400,249,8520,227,8580,215.3L8640,204L8640,340L8580,340C8520,340,8400,340,8280,340C8160,340,8040,340,7920,340C7800,340,7680,340,7560,340C7440,340,7320,340,720,340C600,340,480,340,360,340C240,340,120,340,60,340L0,340Z"></path></svg>

      <div className="bg-[#421E14] h-screen flex justify-around">
        <div>
        <h1 className={`${poppins.className} text-[50px] text-white`}>*imagem*</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className={`${poppins.className} text-[50px] text-white`}>Produtos de destaque</h1>
          <div className="flex gap-10">
            <div className="flex flex-col gap-7">
            <Especialista/>
            <Especialista/>
            </div>
            <div className="flex flex-col gap-7 ">
            <Especialista/>
            <Especialista/>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
