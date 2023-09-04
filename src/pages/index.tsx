import Button from "@/components/Button";
import CardEvento from "@/components/CardEvento";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col h-[380px] justify-center items-center bg-gradient-default">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-black">
            Tudo sobre seu Evento aqui
          </h1>
          <p className="text-black font-semibold p-2">
            Encontre, participe, aproveite!
          </p>
        </div>
        <div className="flex gap-2">
          <Button href="/" title="Procurar Evento" style="btn-outline" />
          <Button href="/" title="Criar meu Evento agora!" style="btn-solid" />
        </div>
      </div>
      <section className="my-8 p-4">
        <h3 className="text-xl font-medium text-sky-950 ">Proximos Eventos</h3>
        <div className="flex flex-row flex-wrap justify-center gap-4 p-2">
          <CardEvento />
          <CardEvento />
          <CardEvento />
          <CardEvento />
          <CardEvento />
        </div>
      </section>
    </main>
  );
}
