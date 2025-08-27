import FaqItens from "../components/faqs/FaqItens";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";

function FaqPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <h1 className="text-5xl font-bold m-auto ml-21 max-w-full pt-10 px-4 pb-0 underline box-border">
          FAQS
        </h1>
        <FaqItens />
      </Main>
      <Footer />
    </div>
  );
}

export default FaqPage;
