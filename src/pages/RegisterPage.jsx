import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";
import FormNew from "../components/register/FormNew";

function RegisterPage() {
  return (
    <>
      <Header />
      <NavBar />
      <Main>
          <FormNew />
      </Main>
      <Footer />
    </>
  );
}

export default RegisterPage;
