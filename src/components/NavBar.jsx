import {
  Contact,
  House,
  Library,
  LogInIcon,
  MessageCircleQuestion,
} from "lucide-react";
import NavItens from "./NavItens";

function NavBar() {
  return (
    <nav className="bg-cor3 flex row flex-nowrap">
      <div className="flex items-center ml-2.5 cursor-pointer hover:bg-cor2 duration-150 hover:rounded-xs">
        <House color="white" size={20} />
        <NavItens>Home</NavItens>
      </div>
      <div className="flex items-center ml-2.5 cursor-pointer hover:bg-cor2 duration-100 hover:rounded-xs">
        <Library color="white" size={20} />
        <NavItens>Biblioteca</NavItens>
      </div>
      <div className="flex items-center ml-2.5 cursor-pointer hover:bg-cor2 duration-100 hover:rounded-xs">
        <MessageCircleQuestion color="white" size={20} />
        <NavItens>FAQ</NavItens>
      </div>
      <div className="flex items-center ml-2.5 cursor-pointer hover:bg-cor2 duration-100 hover:rounded-xs">
        <Contact color="white" size={20} />
        <NavItens>Contato</NavItens>
      </div>
      <div className="flex items-center ml-2.5 cursor-pointer hover:bg-cor2 duration-100 hover:rounded-xs">
        <LogInIcon color="white" size={20} />
        <NavItens>Cadastro</NavItens>
      </div>
    </nav>
  );
}

export default NavBar;
