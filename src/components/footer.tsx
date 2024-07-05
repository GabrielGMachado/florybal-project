'use client';

import { Josefin_Sans, Poppins, Cabin } from "next/font/google";
import Logo from "@/app/assets/logo_florybal.png";
import Whatsapp from "@/app/assets/whatsapp.png";
import Facebook from "@/app/assets/facebook.png";
import Instagram from "@/app/assets/instagram.png";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className={`w-screen h-full bg-yellow-950`}>
      <div className={`${poppins.className} flex flex-col items-center w-screen justify-around gap-8 xl:gap-0 py-16 xl:flex-row`}>
        <div className="flex flex-col items-center gap-2">
          <Image src={Logo} width={90} alt="Logo Florybal"/>
          <h1 className="text-white text-[28px] font-medium ">Florybal Ivoti</h1>
        </div>
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col xl:flex-row justify-around w-[630px] gap-2">
            <div className="flex flex-col text-white items-center xl:items-start mb-2">
              <a href="gmail.google.mailtome"><h2>julianagaelzer@gmail.com</h2></a>                 
              <a href="gmail.google.mailtome"><h2>lucianaokalb@gmail.com</h2></a>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-1.5 items-center">
                <h2 className="text-white">Entre em contato por</h2>
                <div className="flex xl:justify-around gap-3">
                <Image src={Whatsapp} alt="Logo do Whatsapp" className="w-7 h-7"></Image>
                <Image src={Facebook} alt="Logo do Facebook" className="w-7 h-7"></Image>
                <Image src={Instagram} alt="Logo do Instagram" className="w-7 h-7"></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex w-full border-b-[2px] rounded-[20px] border-white"></div>
          <div className="hidden xl:flex justify-around text-white">
            <p>@2024 - Florybal Ivoti</p>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>
        </div>
          <div className="flex flex-col gap-2 max-w-[300px] xl:max-w-[220px] text-white">
            <h1 className="text-[19px]">Reportar erro</h1>
            <textarea name="submitError" id="submit_Error" className=" rounded-[10px] h-20 p-2 text-black focus:outline-none  w-[300px] xl:max-w-[220px]" placeholder="Descrição do erro..."></textarea>
            <p className="text-zinc-400 text-[15px]">Faça uma breve descrição do erro, ou entre em contato pelo Whatsapp</p>
            <div className="flex xl:hidden w-full border-b-[2px] rounded-[20px] border-white mt-3"></div>
          </div>
          
          
      </div>
      <div className="flex flex-col text-center sm:flex-row w-full xl:hidden justify-evenly text-zinc-400 py-6">
            <p>@2024 - Florybal Ivoti</p>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>
    </div>
  );
}