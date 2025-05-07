import Contador from "./Contador";
import InputText from "./InputText";
import MenuHome from "./MenuHome";
import TextAreaHome from "./TextAreaHome";

function Main() {
  return (
    <div className="ml-23 mt-2 mr-5 mb-5 rounded-2xl shadow-2xl p-4 box-border flex-1">
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
    </div>
  );
}

export default Main;
