import Dashboard from "../components/dashboard components/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar components/NavBar";

function DashboardPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <Dashboard />
      </Main>
      <Footer />
    </div>
  );
}

export default DashboardPage;
