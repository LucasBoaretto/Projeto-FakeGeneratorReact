import InputsContainer from "./InputsContainer";
import RedAsterisk from "./RedAsterisk";

function InputsForm() {
  return (
    <div className="ml-10 mr-20">
      <InputsContainer>
        <label>
          Nome
          <RedAsterisk />
        </label>
        <input
          type="text"
          minLength="3"
          placeholder="Nome completo"
          required
          className="w-full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm"
        />
      </InputsContainer>

      <InputsContainer>
        <label>
          E-mail
          <RedAsterisk />
        </label>
        <input
          type="email"
          placeholder="user@dominio.com.br"
          required
          className="full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm"
        />
      </InputsContainer>

      <InputsContainer>
        <label>Telefone (opcional)</label>
        <input
          type="tel"
          placeholder="Ex: 46912341234"
          minLength="10"
          maxLength="11"
          className="w-full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm"
        />
      </InputsContainer>

      <InputsContainer>
        <label>
          Senha
          <RedAsterisk />
        </label>
        <input
          type="password"
          minLength="6"
          placeholder="******"
          required
          className="w-full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm"
        />
      </InputsContainer>

      <InputsContainer>
        <label>
          Confirme
          <RedAsterisk />
        </label>
        <input
          type="password"
          minLength="6"
          placeholder="******"
          required
          className="w-full h-8.75 border-b border-solid pl-1.25 hover:outline-2 hover:rounded-sm"
        />
      </InputsContainer>
    </div>
  );
}

export default InputsForm;
