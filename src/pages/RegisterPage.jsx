import { Form } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";
import FormContainer from "../components/register/FormContainer";
import InputsForm from "../components/register/InputsForm";
import FormBtn from "../components/register/FormBtn";

function RegisterPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <FormContainer>
          <h1 className="text-center bg-cor0 text-white py-6 px-5 border-b border-solid text-3xl rounded-b-none">
            Cadastro de usuário - Teste
          </h1>
          <Form>
            <InputsForm />
            <FormBtn />
          </Form>
        </FormContainer>
      </Main>
      <Footer />
    </div>
  );
}

export default RegisterPage;
