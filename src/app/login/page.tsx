'use client';

import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function HomePage() {

  const login = () => {
    
  }

  return (
    <div className={`lg:grid lg:grid-cols-5 h-screen ${poppins.className}`}>
      <section className="lg:col-span-3 sm:text-center lg:text-start mb-5 lg:mb-0 text-yellow-95 px-12 py-8 lg:p-12 lg:bg-zinc-100 lg:flex lg:items-center lg:-mt-44 lg:px-[120px]">
        <div className=" flex-col mb-5 gap-3 hidden sm:flex">
          <h1 className="flex flex-col mb-3 text-[40px] leading-[40px] xl:text-[55px] xl:leading-[55px]">
            Olá<span>Comprador</span>
          </h1>
          <p className="mt-4 break-words text-[15px] xl:text-[18px] lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
          <div className="border w-full mt-3 lg:border-black/25"></div>
        </div>
      </section>

      <div className="col-span-2 mt-5 mb-5 gap-12 flex flex-col px-12 lg:p-12 lg:mt-0 lg:mb-0 justify-center items-center w-full">
        <h1 className="text-[25px] mb-5 hidden sm:flex">Bem-vindo de volta!</h1>
        <form onSubmit={login} className="flex flex-col gap-6 col-span-2 w-full sm:max-w-[450px]">
          <h1 className="w-full flex text-[25px] font-medium">Login</h1>
          <div className="flex flex-col">
            <input type="text" name="email" id="email" placeholder="Email"
              className="p-1.5 border-b border-yellow-950 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            
            <input type="text" name="senha" id="senha" placeholder="Senha"
              className="p-1.5 border-b border-yellow-950 focus:outline-none"/>
            <div className="flex justify-end">
              <p className="underline text-zinc-500 text-[14px] hover:text-yellow-950 hover:cursor-pointer">Esqueceu a senha?</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-3">
            <button type="submit" className="flex justify-center border border-yellow-950 rounded-[10px] py-2 bg-yellow-950 text-white">
              Login
            </button>
            <button type="button" className="flex justify-center border border-yellow-950 rounded-[10px] py-2 bg-white text-yellow-950 hover:bg-zinc-100 transition duration-200">
              Entrar com o Google
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-zinc-500">Não tem conta? <Link href="/cadastrar" className="underline hover:text-yellow-950 cursor-pointer">Registar-se</Link></p>
          </div>
        </form>
        <p className="w-full bottom-0 flex p-4 justify-center text-zinc-400">negocio de copywriting</p>
      </div>
    </div>
  );
}

