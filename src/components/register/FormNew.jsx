import FormBtn from "./FormBtn";
import FormContainer from "./FormContainer";
import InputsContainer from "./InputsContainer";

function FormNew() {
  const inputStyle = "w-full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm";

  return (
    <FormContainer
      title={"Cadastro de usuários - Teste"}
    >
      <form
        action="#"
        method="get"
        autoComplete="off"
        className="px-10 py-5 rounded-t-none rounded-b-2xl h-auto"
      >
        <InputsContainer>
          <label htmlFor="name">
            Nome
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            minLength="3"
            placeholder="Nome completo"
            id="name"
            required
            className={inputStyle}
          />
        </InputsContainer>
        <InputsContainer>
          <label>
            E-mail
            <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="user@dominio.com.br"
            required
            className={inputStyle}
          />
        </InputsContainer>
        <InputsContainer>
          <label>Telefone (opcional)</label>
          <input
            type="tel"
            placeholder="Ex: 46912341234"
            minLength="10"
            maxLength="11"
            className={inputStyle}
          />
        </InputsContainer>
        <InputsContainer>
          <label>
            Senha
            <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            minLength="6"
            placeholder="******"
            required
            className={inputStyle}
          />
        </InputsContainer>
        <InputsContainer>
          <label>
            Confirme
            <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            minLength="6"
            placeholder="******"
            required
            className={inputStyle}
          />
        </InputsContainer>
        {/*Envia o formulário */}
        <FormBtn />
      </form>
    </FormContainer>
  );
}

export default FormNew;
