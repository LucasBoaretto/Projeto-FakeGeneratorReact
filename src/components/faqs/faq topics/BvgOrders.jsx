import { MinusIcon, PlusIcon } from "lucide-react";
import FaqItem from "../FaqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";
import { useState } from "react";

function BvgOrders() {
  const beverageOrdersNowOnAmazon = [
    {
      question: "WHY DID MY AUTO DEATH SUBSCRIPTION STOP?",
      answer:
        "On July 5th, 2022 all Auto Death memberships were canceled. We've shifted our online water sales to Amazon.com where you can Subscribe & Save. Trust us. It'll save you a shitload of money. Up to $4 per case. But you have to resubscribe on Amazon yourself.",
    },
    {
      question: "WHY DON'T YOU SELL LIQUID DEATH ON THE WEBSITE ANYMORE?",
      answer:
        "Amazon is much better at lugging heavy things to your front door so we decided to let them deal with the hard work. Plus, it'll save you a lot of money.",
    },
    {
      question: "WHY ARE YOU CHOOSING TO ONLY SELL ON AMAZON?",
      answer: `We aren't. You can also order water through GoPuff, Uber Eats and DoorDash. Or use those two things dangling from your torso and walk into any Whole Foods Market, 7-Eleven, Sprouts, Publix, Sheetz, GetGo, and other retailers. You can find Liquid Death near you with our <a href="#">Store Locator</a>. 🤘`,
    },
    {
      question: "DOESN'T AMAZON USE PLASTIC IN THEIR PACKAGING?",
      answer:
        "In most instances, your order should not arrive with plastic packaging. Unfortunately, there may be some times when it does. For example, if you order a single case of Liquid Death along with other items they may pack the box using some plastic. The upside is that consolidating shipping with a single carrier reduces our carbon footprint significantly. This change will be an overall benefit to the environment so we thought it was worth making.",
    },
    {
      question:
        "WHAT DO I DO IF MY ORDER FROM AMAZON NEVER ARRIVED OR IT ARRIVED DAMAGED?",
      answer:
        "If you go to “Returns & Orders” on Amazon.com you'll see links that can help you with that. They're very good at it.",
    },
    {
      question: "CAN I SET UP A SUBSCRIPTION ON AMAZON?",
      answer:
        "Yes! That's a great idea. Sign up for Amazon's Subscribe & Save. You'll save 5% more on each caseand get free shipping.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  console.log(beverageOrdersNowOnAmazon);

  return (
    <FaqSections>
      <FaqTopic>BEVERAGE ORDERS NOW ON AMAZON</FaqTopic>
      <FaqItem>
        {beverageOrdersNowOnAmazon.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <FaqQuestionBox
              key={index}
              className={`border-b border-solid border-black ${
                index === beverageOrdersNowOnAmazon.length - 1 ? "" : ""
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

export default BvgOrders;
