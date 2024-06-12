import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Login() {
  return (
    <div className={`${poppins.className}`}>
      <div className="absolute bottom-0 w-full -z-10 hidden sm:block">
        <svg id="wave" viewBox="100 0 1440 340">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(66, 30, 20, 1)" offset="0%"></stop>
              <stop stop-color="yellow-950" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path className="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,102C120,136,240,204,360,209.7C480,215,600,159,720,119C840,79,960,57,1080,73.7C1200,91,1320,147,1440,141.7C1560,136,1680,68,1800,68C1920,68,2040,136,2160,153C2280,170,2400,136,2520,153C2640,170,2760,238,2880,232.3C3000,227,3120,147,3240,136C3360,125,3480,181,3600,187C3720,193,3840,147,3960,136C4080,125,4200,147,4320,141.7C4440,136,4560,102,4680,79.3C4800,57,4920,45,5040,34C5160,23,5280,11,5400,11.3C5520,11,5640,23,5760,45.3C5880,68,6000,102,6120,102C6240,102,6360,68,6480,45.3C6600,23,6720,11,6840,56.7C6960,102,7080,204,7200,249.3C7320,295,7440,283,7560,243.7C7680,204,7800,136,7920,136C8040,136,8160,204,8280,226.7C8400,249,8520,227,8580,215.3L8640,204L8640,340L8580,340C8520,340,8400,340,8280,340C8160,340,8040,340,7920,340C7800,340,7680,340,7560,340C7440,340,7320,340,720,340C600,340,480,340,360,340C240,340,120,340,60,340L0,340Z"></path>
        </svg>
      </div>
      <div className="h-full w-full flex justify-center mt-[100px] lg:mt-[175px]">
        <div className="rounded-[15px] p-6 w-[450px] border-yellow-950 bg-white sm:border">
          <h1 className="font-medium mb-5 text-[35px]">Login</h1>

          <form action="" className="flex flex-col gap-5">
            <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-yellow-950">Email</label>
            <input type="text" name="email" id="email" placeholder="Ex: m@gmail.com"  
            className="py-2.5 px-4 border border-yellow-950 rounded-[10px] required:"/>
            </div>

            <div className="flex flex-col">
            <div className="flex justify-between">
            <label htmlFor="senha" className="font-medium text-yellow-950">Senha</label>
            <p className="underline text-zinc-500 text-[14px] hover:text-yellow-950 hover:cursor-pointer">Esqueceu a senha?</p>
            </div>
            <input type="text" name="senha" id="senha"
            className="py-2.5 px-4 border border-yellow-950 rounded-[10px]"/>
            </div>
            
            <div className="flex flex-col gap-4">
            <div className="flex justify-center border border-yellow-950 rounded-[10px] py-2 bg-yellow-950">
            <input type="submit" value="Login" className="font-normal text-white"/>
            </div>
            <div className="flex justify-center border border-yellow-950 rounded-[10px] py-2 bg-white hover:bg-zinc-100 transition duration-200">
            <input type="submit" value="Entrar com o Google" className="font-normal text-yellow-950"/>
            </div>
            </div>
            <div className="flex justify-center">
            <p className="text-zinc-500">Não tem conta? <span className="underline hover:text-yellow-950 cursor-pointer">Registar-se</span></p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

