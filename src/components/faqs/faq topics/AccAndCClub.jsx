import { MinusIcon, PlusIcon } from "lucide-react";
import FaqItem from "../FaqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";
import { useState } from "react";

function AccAndCClub() {
  const accountAndCountryClub = [
    {
      question: "I CAN'T LOG INTO MY ACCOUNT. WHAT DO I DO?",
      answer: `Sucks. We can help you with that. Click <a href="#">here</a> to reach our support team.`,
    },
    {
      question: "WHAT IS A COUNTRY CLUB MEMBER?",
      answer: ` A supreme being who enjoys eternal perks because they sold their soul to us in exchange for:

                    <ul style="list-style: none;">
                        <br>
                        <li>- One FREE Country Club Exclusive tee when you spend $50 on liquiddeath.com</li>
                        <li>- Exclusive access to Country Club Only merch and advance access to limited-edition merch
                        </li>
                        <li>- Invites to private shows and events</li>
                        <li>- Access to the Liquid Death Country Club experience at Live Nation festivals</li>
                        <li>- All kinds of other cool shit that we can't tell you about yet</li>
                    </ul>
                    <br>
                    If you want to sell your soul to become a Country Club Member and look down on everyone who isn't,
                    simply start by clicking <a href="#">here</a>.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  console.log(accountAndCountryClub);

  return (
    <FaqSections>
      <FaqTopic>ACCOUNT & COUNTRY CLUB</FaqTopic>
      <FaqItem>
        {accountAndCountryClub.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <FaqQuestionBox
              key={index}
              className={`border-b border-solid border-black ${
                index === accountAndCountryClub.length - 1 ? "" : ""
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

export default AccAndCClub;
