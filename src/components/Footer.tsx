import ItemMenu, { ItemMenuProps } from "./ItemMenu";

interface NavBarProps {
  props?: Array<ItemMenuProps>;
}

export default function Footer(props: NavBarProps) {
  return (
    <footer className="bg-stone-800 text-white h-32 flex flex-row justify-around items-center px-8">
      <div>
        <p className="font-medium text-sm">Plataforma</p>
        <ul className="font-extralight text-xs">
          <li>Suporte</li>
          <li>Sobre</li>
          <li>Ajuda</li>
        </ul>
      </div>
      <div>
        <p className="ml-4 cursor-pointer text-2xl">JáEventos</p>
      </div>
      <div>
        <p className="font-medium text-sm">Organizadores</p>
        <ul className="font-extralight text-xs">
          <li>Criar Evento</li>
        </ul>
      </div>
    </footer>
  );
}
