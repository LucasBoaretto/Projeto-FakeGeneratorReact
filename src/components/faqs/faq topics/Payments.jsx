import { MinusIcon, PlusIcon } from "lucide-react";
import FaqItem from "../FaqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";
import { useState } from "react";

function Payments() {
  const payments = [
    {
      question: "WHAT FORMS OF PAYMENT DO YOU ACCEPT?",
      answer:
        "We accept all major credit cards: Visa, Mastercard, American Express, Discover, G Pay, PayPal and Liquid Death Gift Cards. You can also pay using Klarna, which allows you to pay in four equal, interest-free installments. With Klarna, purchases above $1000 you can finance like how you would a credit card.",
    },
    {
      question: "HOW DO I PURCHASE GIFT CARDS?",
      answer: ` Easy. Just grab a Death By Gift Card <a href="#">here</a>.`,
    },
    {
      question: "HOW DO I CHECK MY GIFT CARD BALANCE?",
      answer: `Click <a href="#">here</a> to check you Gift Card balance.`,
    },
    {
      question:
        "CAN I USE MY LIQUID DEATH GIFT CARD TOWARDS WATER ORDERS ON AMAZON OR OTHER RETAILERS?",
      answer: `Unfortunately not, but you can use it to order any of the killer and totally <a href="#">undrinkable stuff</a> we made for you on liquiddeath.com.`,
    },
    {
      question:
        "I FORGOT TO ENTER THE DISCOUNT CODE FOR MY ORDER. HOW CAN I GET THE DISCOUNT APPLIED?",
      answer: `Please note that we cannot apply discount codes post purchase. If you have a discount code that is not functioning properly please contact us before checking out. Click <a href="#">here</a> to reach our support team.`,
    },
  ];

   const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  console.log(payments);

  return (
    <FaqSections>
      <FaqTopic>PAYMENTS</FaqTopic>
      <FaqItem>
        {payments.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <FaqQuestionBox
              key={index}
              className={`border-b border-solid border-black ${
                index === payments.length - 1 ? "" : ""
              }`}
            >
              <FaqQuestion onClick={() => toggleIndex(index)}>
                {item.question}
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </FaqQuestion>
              {isOpen && (
                <FaqAnswer dangerouslySetInnerHTML={{ __html: item.answer }} />
              )}
            </FaqQuestionBox>
          );
        })}
      </FaqItem>
    </FaqSections>
  );
}

export default Payments;
