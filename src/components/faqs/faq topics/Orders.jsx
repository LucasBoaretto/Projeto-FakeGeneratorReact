import { PlusIcon } from "lucide-react";
import FaqItem from "../FaqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";

function Orders() {
  // const orders = [
  //   {
  //     question: "HOW CAN I TRACK MY ORDER?",
  //     answer: `For merch orders, once your order has shipped, you'll receive an email with tracking info so make sure to check your inbox and spam folder. You can also track your order by logging into your <a href="#">account</a> on liquiddeath.com.

  //       Tracking on water and tea orders is provided by the retailer you ordered through. Check with them for updates.`,
  //   },
  //   {
  //     question:
  //       "WHAT SHOULD I DO IF I THINK MY MERCH ORDER IS LOST OR DAMAGED?",
  //     answer: `If the delivery demons somehow lost your order during shipping, let us know <a href="#">here</a>.

  //               If there's an issue with a beverage order you placed through an online retailer like Amazon, GoPuff,
  //               etc., reach out to them directly.`,
  //   },
  //   {
  //     question: "WHAT IS YOUR RETURN AND EXCHANGE POLICY?",
  //     answer: `<ul style="list-style: none;">
  //                       <li>- We have a 30-day return/exchange policy on most items.</li>
  //                       <li>- All Final Sale items are noted on their product pages and cannot be returned.</li>
  //                       <li>- Items must be returned unworn, unwashed and undamaged.</li>
  //                       <li>- Returns made within 30 days of the order delivery date will be issued a refund to the
  //                           original form of payment and will not include the shipping costs.</li>
  //                       <li>- We reserve the right to adjust returns if original items are not received in new
  //                           condition.</li>
  //                       <li>- We usually process returns quickly, but just in case, please allow up to 7 business days
  //                           from when we receive the items for your account to be refunded.</li>
  //                       <li>- If you would like to perform a return or exchange click <FaqLinks>here</FaqLinks>.</li>
  //                   </ul>`,
  //   },
  // ];

  // console.log(orders);

  return (
    <FaqSections>
      <FaqTopic>ORDERS</FaqTopic>
      <FaqItem>
        <FaqQuestionBox>
          <FaqQuestion>
            <PlusIcon />
          </FaqQuestion>
          <FaqAnswer></FaqAnswer>
        </FaqQuestionBox>
      </FaqItem>
    </FaqSections>
  );
}

export default Orders;
