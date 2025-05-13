import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";
import InputText from "./components/home/InputText";
import Contador from "./components/home/Contador";
import MenuHome from "./components/home/MenuHome";
import TextAreaHome from "./components/home/TextAreaHome";

function App() {
  return (
    <div className="flex flex-col">
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
