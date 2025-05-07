import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import InputText from "./components/InputText";
import Contador from "./components/Contador";
import MenuHome from "./components/MenuHome";
import TextAreaHome from "./components/TextAreaHome";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <h2 className="pb-8 font-light font-WorkSans text-2xl">
          Conversor de Texto
        </h2>
        <p className="font-WorkSans pb-9">
          Insira o seu texto abaixo e escolha uma das opções disponíveis para
          formatar.
        </p>
        <InputText />
        <Contador />
        <MenuHome />
        <TextAreaHome />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
