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
    <div className={`flex w-screen h-full bg-yellow-950 bottom-0`}>
      <div className={`${poppins.className} flex w-screen justify-around py-16`}>
        <div className="flex flex-col items-center gap-3">
          <Image src={Logo} width={80} alt="Logo Florybal"/>
          <h1 className="text-white text-[25px] font-medium ">Florybal Ivoti</h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-around w-[630px]">
            <div className="flex flex-col text-white">
              <a href="gmail.google.mailtome"><h2>julianagaelzer@gmail.com</h2></a>                 
              <a href="gmail.google.mailtome"><h2>lucianaokalbmachado@gmail.com</h2></a>
            </div>
            <div>
              <div className="flex flex-col justify-center gap-1">
                <h2 className="text-white">Entre em contato por</h2>
                <div className="flex justify-around">
                <Image src={Whatsapp} alt="Logo do Whatsapp" className="w-7 h-7"></Image>
                <Image src={Facebook} alt="Logo do Facebook" className="w-7 h-7"></Image>
                <Image src={Instagram} alt="Logo do Instagram" className="w-7 h-7"></Image>
                </div>
              </div>
            </div>
          </div
          <div className="line w-full border-b-[2px] rounded-[20px] border-white"></div>
          <div className="flex justify-around text-white">
            <p>@2024 - Florybal Ivoti</p>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>
        </div>
          <div className="w-[250px] text-white">
            <h1>Reportar erro</h1>
            <textarea name="submitError" id="submit_Error"></textarea>
            <p className="text-zinc-400 ">Faça uma breve descrição do erro, ou entre em contato pelo Whatzapp</p>
          </div>
      </div>
    </div>
  );
}