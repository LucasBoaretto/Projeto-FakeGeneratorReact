import Footer from "../components/Footer";
import Header from "../components/Header";
import LineFour from "../components/library components/itens inLine/LineFour";
import LineOne from "../components/library components/itens inLine/LineOne";
import LineThree from "../components/library components/itens inLine/LineThree";
import LineTwo from "../components/library components/itens inLine/LineTwo";
import Main from "../components/Main";
import NavBar from "../components/navbar components/NavBar";

function LibraryPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <LineOne />
        <LineTwo />
        <LineThree />
        <LineFour />
      </Main>
      <Footer />
    </div>
  );
}

export default LibraryPage;
