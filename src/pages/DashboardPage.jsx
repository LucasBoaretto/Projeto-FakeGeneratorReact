import DashLineTwo from "../components/dashboard/itens inLine/DashLineTwo";
import DashLineOne from "../components/dashboard/itens inLine/DashLineOne";
import Chart01 from "../components/dashboard/charts/Chart01";
import Chart02 from "../components/dashboard/charts/Chart02";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NavBar from "../components/navbar/NavBar";

function DashboardPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main>
        <h1 className="text-center text-3xl font-bold pb-4">
          Estilos de dashboard
        </h1>
        <DashLineOne />
        <DashLineTwo />
      </Main>
      <Footer />
    </div>
  );
}

export default DashboardPage;
