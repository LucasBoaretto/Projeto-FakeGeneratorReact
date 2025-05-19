import { PlusIcon } from "lucide-react";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";
import FaqItem from "../FaqItem";

function Subscription() {
  // const subscription = [
  //   {
  //     question: "WHY DID MY AUTO DEATH MEMBERSHIP CANCEL?",
  //     answer:
  //       "On July 5th, 2022 all Auto Death memberships were canceled. We've shifted our online water sales to Amazon where you can Subscribe & Save. Trust us. It'll save you a shitload of money. Up to $4 per case. But you have to resubscribe on Amazon yourself.",
  //   },
  //   {
  //     question: "CAN I RENEW MY AUTO DEATH MEMBERSHIP?",
  //     answer:
  //       "Here's the bad news: We no longer sell water on liquiddeath.com so you can't renew your membership. Now here's the great news: If you sign up for Subscribe & Save on Amazon you'll get the same great Liquid Death you love but save up to $4 on each case. And you'll get free shipping.",
  //   },
  //   {
  //     question: "HOW DO I CANCEL MY SUBSCRIPTION?",
  //     answer:
  //       "We already canceled it for you. Go to Amazon.com to Subscribe & Save there. If you need any help click here to reach our surprisingly delightful support team.",
  //   },
  // ];

  // console.log(subscription);

  return (
    <FaqSections>
      <FaqTopic>SUBSCRIPTION</FaqTopic>
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

export default Subscription;
