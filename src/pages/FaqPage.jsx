import AccAndCClub from "../components/faqs/faq topics/AccAndCClub";
import BvgOrders from "../components/faqs/faq topics/BvgOrders";
import Orders from "../components/faqs/faq topics/Orders";
import Payments from "../components/faqs/faq topics/Payments";
import ProductInfo from "../components/faqs/faq topics/ProductInfo";
import RewardsProgram from "../components/faqs/faq topics/RewardsProgram";
import ShipDlvy from "../components/faqs/faq topics/ShipDlvy";
import Subscription from "../components/faqs/faq topics/Subscription";
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
        <ProductInfo />
        <Orders />
        <Payments />
        <ShipDlvy />
        <RewardsProgram />
        <AccAndCClub />
        <Subscription />
        <BvgOrders />
      </Main>
      <Footer />
    </div>
  );
}

export default FaqPage;
