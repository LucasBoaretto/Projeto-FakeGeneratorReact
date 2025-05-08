import {
  ChartNoAxesCombinedIcon,
  Contact,
  House,
  Library,
  LogInIcon,
  MessageCircleQuestion,
} from "lucide-react";
import NavItens from "./NavItens";
import NavItensContainer from "./NavItensContainer";
import { LayoutDashboard } from "lucide";

function NavBar() {
  return (
    <nav className="bg-cor3 flex row flex-nowrap">
      <NavItensContainer>
        <House color="white" size={20} />
        <NavItens>Home</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <Library color="white" size={20} />
        <NavItens>Biblioteca</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <MessageCircleQuestion color="white" size={20} />
        <NavItens>FAQ</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <Contact color="white" size={20} />
        <NavItens>Contato</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <LogInIcon color="white" size={20} />
        <NavItens>Cadastro</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <ChartNoAxesCombinedIcon color="white" size={20}/>
        <NavItens>Dashboard</NavItens>
      </NavItensContainer>
    </nav>
  );
}

export default NavBar;
