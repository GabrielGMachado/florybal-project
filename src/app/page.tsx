import Image from "next/image";
import { Josefin_Sans, Poppins, Cabin } from "next/font/google";
import bgimage1 from '@/app/assets/Barra_de_Chocolate_Simples_Smaller.svg';
import bgimage2 from '@/app/assets/ManyChocolatesEditedSmaller.svg';
import Especialista from "@/components/specialbox";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

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
      <Sidebar/>
      <div className="relative flex flex-col xl:flex-row w-full items-center xl:justify-center p-10 xl:mt-[-230px] sm:gap-[300px] mb-[-130px]">
        
        <div className="flex flex-col items-center w-1/2 xl:mt-[500px] select-none">
          <Image src={bgimage1} alt="Left Image" width={550} height={550} className=" hidden xl:flex"/>  
        </div>
        
        <div className="absolute flex flex-col items-center justify-center max-w-[900px] text-yellow-950 text-center">
          <h1 className={`${josefin.className} text-[80px] leading-[80px] font-bold lg:text-[87px]`}>
            Chocolates Artesanais <br />Feitos com Paixão
          </h1>

          <p className={`${poppins.className} mt-5 w-[630px]`}>
            A Florybal é uma joia entre os amantes de chocolates, conquistando paladares e corações com sua mistura única de ingredientes de alta qualidade e técnicas.
          </p>

          <button className={`${poppins.className} mt-10 py-2 px-6 rounded-[25px] bg-yellow-950 text-white font-extralight text-[15px] hover:bg-[#4d2920] hover:scale-[1.05] transition duration-200`}>
            Comprar agora
          </button>
        </div>
        
        <div className="flex flex-col items-center w-1/2 xl:mt-[500px] select-none">
          <Image src={bgimage2} alt="Right Image" width={550} height={550} className="img2"/>  
        </div>

      </div>

      <svg id="wave" className="transform:rotate(0deg); transition: 0.3s" viewBox="600 0 1640 340" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path className="transform:translate(0, 0px); opacity:1" fill="#422006" d="M0,68L60,102C120,136,240,204,360,209.7C480,215,600,159,720,119C840,79,960,57,1080,73.7C1200,91,1320,147,1440,141.7C1560,136,1680,68,1800,68C1920,68,2040,136,2160,153C2280,170,2400,136,2520,153C2640,170,2760,238,2880,232.3C3000,227,3120,147,3240,136C3360,125,3480,181,3600,187C3720,193,3840,147,3960,136C4080,125,4200,147,4320,141.7C4440,136,4560,102,4680,79.3C4800,57,4920,45,5040,34C5160,23,5280,11,5400,11.3C5520,11,5640,23,5760,45.3C5880,68,6000,102,6120,102C6240,102,6360,68,6480,45.3C6600,23,6720,11,6840,56.7C6960,102,7080,204,7200,249.3C7320,295,7440,283,7560,243.7C7680,204,7800,136,7920,136C8040,136,8160,204,8280,226.7C8400,249,8520,227,8580,215.3L8640,204L8640,340L8580,340C8520,340,8400,340,8280,340C8160,340,8040,340,7920,340C7800,340,7680,340,7560,340C7440,340,7320,340,720,340C600,340,480,340,360,340C240,340,120,340,60,340L0,340Z"></path>
</svg>

      <div className="bg-yellow-950 h-full flex justify-around pb-36 px-40">
        <div className="flex flex-col gap-5">
        <h1 className={`${josefin.className} font-medium w-[750px] text-[65px] leading-[67px] text-white lg:text-[67px]`}>Sabor que derrete na boca e apaixona!</h1>
        <div className="w-[600px] h-[290px] border"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className={`${josefin.className} text-[40px] font- text-white`}>Produtos de destaque</h1>
            <div className="flex gap-9">
            <Especialista/>
            <Especialista/>
          </div>
        </div>
      </div>
    <Footer/>

    </div>
  );
}
