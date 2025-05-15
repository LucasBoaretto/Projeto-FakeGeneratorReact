import { PlusIcon } from "lucide-react";
import FaqItem from "../faqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";

function ShipDlvy() {
  const shippingAndDelivery = [
    {
      question: "HOW MUCH DOES YOUR SHIPPING COST?",
      answer:
        "All merch orders from our site of $85+ ship for free on the wings of two-headed demon eagles. Orders under $85 have a standard shipping rate of $6 to help pay the salary of our two-headed demon eagles.",
    },

    {
      question: "HOW LONG WILL IT TAKE TO GET MY ORDER?",
      answer: `Merch ordered through liquiddeath.com will ship within 48 hours excluding weekends unless stated
                    otherwise.<br>
                    Once shipped, you can expect to receive your order in 2-7 business days depending on the shipping
                    method purchased. Carrier delays may occur. We apologize if you're going to be naked until then.<br>
                    Tracking on beverage orders is provided by the retailer you ordered through. Check with them for
                    updates.`,
    },
  ];

  console.log(shippingAndDelivery);

  return (
    <FaqSections>
      <FaqTopic>SHIPPING & DELIVERY</FaqTopic>
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

export default ShipDlvy;
