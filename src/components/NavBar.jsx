import { Contact, House, Library, LogInIcon, MessageCircleQuestion } from "lucide-react";
import NavItens from "./NavItens";

function NavBar() {
  return (
    <nav className="bg-cor3 flex row flex-nowrap">
      <div className="flex items-center ml-2 cursor-pointer">
        <House color="white" size={22} />
        <NavItens>Home</NavItens>
      </div>
      <div className="flex items-center ml-2 cursor-pointer">
        <Library color="white" size={22} />
        <NavItens>Biblioteca</NavItens>
      </div>
      <div className="flex items-center ml-2 cursor-pointer">
        <MessageCircleQuestion color="white" size={22} />
        <NavItens>FAQ</NavItens>
      </div>
      <div className="flex items-center ml-2 cursor-pointer">
        <Contact color="white" size={22} />
        <NavItens>Contato</NavItens>
      </div>
      <div className="flex items-center ml-2 cursor-pointer">
        <LogInIcon color="white" size={22} />
        <NavItens>Cadastro</NavItens>
      </div>
    </nav>
  );
}

export default NavBar;
