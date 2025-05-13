import Footer from "../components/Footer";
import Header from "../components/Header";
import LibraryLineFour from "../components/library/itens inLine/LibraryLineFour";
import LibraryLineOne from "../components/library/itens inLine/LibraryLineOne";
import LibraryLineThree from "../components/library/itens inLine/LibraryLineThree";
import LibraryLineTwo from "../components/library/itens inLine/LibraryLineTwo";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";

function LibraryPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <LibraryLineOne />
        <LibraryLineTwo />
        <LibraryLineThree />
        <LibraryLineFour />
      </Main>
      <Footer />
    </div>
  );
}

export default LibraryPage;
