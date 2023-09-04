import Image from "next/image";
import logoEvento from "../../public/eventoTeste.jpg";

export default function CardEvento() {
  return (
    <div className="border rounded-lg shadow-lg w-[220px] ">
      <div className="w-fit">
        <Image alt="Imagem do Evento" src={logoEvento}></Image>
      </div>
      <div className="p-4">
        <div>
          <p className="font-semibold">Evento UTF</p>
        </div>
        <div>
          <p className="text-sky-500 font-semibold text-sm">
            Segunda Feira - 16, Outubro
          </p>
          <p className="font-extralight text-xs">Dois Vizinhos - PR</p>
        </div>
      </div>
    </div>
  );
}
