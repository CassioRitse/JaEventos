import ItemMenu, { ItemMenuProps } from "./ItemMenu";

interface NavBarProps {
  props?: Array<ItemMenuProps>;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className="flex items-center justify-between bg-white h-16 shadow-2xl p-2">
      <div>
        <p className="text-black ml-4 cursor-pointer text-2xl">JáEventos</p>
      </div>
      <ul className="flex gap-2">
        <ItemMenu title="Home" href="/" />
        <ItemMenu title="Eventos" href="/" />
        <ItemMenu title="Entrar" href="/" />
      </ul>
    </nav>
  );
}
