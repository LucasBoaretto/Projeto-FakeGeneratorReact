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
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-cor3 flex row flex-wrap">
      <Link to="/">
        <NavItensContainer>
          <House color="white" size={20} />
          <NavItens>Home</NavItens>
        </NavItensContainer>
      </Link>

      <Link to="/library">
        <NavItensContainer>
          <Library color="white" size={20} />
          <NavItens>Biblioteca</NavItens>
        </NavItensContainer>
      </Link>

      <NavItensContainer>
        <MessageCircleQuestion color="white" size={20} />
        <NavItens>FAQ</NavItens>
      </NavItensContainer>

      <NavItensContainer>
        <Contact color="white" size={20} />
        <NavItens>Contato</NavItens>
      </NavItensContainer>

      <Link to="/register">
        <NavItensContainer>
          <LogInIcon color="white" size={20} />
          <NavItens>Cadastro</NavItens>
        </NavItensContainer>
      </Link>

      <Link to="/dashboard">
        <NavItensContainer>
          <ChartNoAxesCombinedIcon color="white" size={20} />
          <NavItens>Dashboard</NavItens>
        </NavItensContainer>
      </Link>
    </nav>
  );
}

export default NavBar;
