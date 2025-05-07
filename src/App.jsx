import "./App.css";
import Header from "./components/Header";
import InputText from "./components/InputText";
import MenuHome from "./components/MenuHome";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <NavBar />
      <main>
        <h2>Conversor de Texto</h2>
        <p>
          Insira o seu texto abaixo e escolha uma das opções disponíveis para
          formatar.
        </p>
        <InputText />
        <p>0/100</p>
        <MenuHome />
        <textarea></textarea>
      </main>
      <footer>
        <div>
          <p>
            ©2025 Gerador<span>Lucas Boaretto</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
