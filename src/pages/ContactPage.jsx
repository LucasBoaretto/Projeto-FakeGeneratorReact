import ContactBox from "../components/contact/ContactBox";
import ContactHead from "../components/contact/ContactHead";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";

function ContactPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <ContactHead />
        <ContactBox />
      </Main>
      <Footer />
    </div>
  );
}

export default ContactPage;
