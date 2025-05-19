import { PlusIcon } from "lucide-react";
import FaqItem from "../faqItem";
import FaqQuestion from "../FaqQuestion";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqAnswer from "../FaqAnswer";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";

function RewardsProgram() {
  // const rewardsProgram = [
  //   {
  //     question: "DO YOU HAVE A REFERRAL PROGRAM?",
  //     answer: `Liquid Death would love for you to rope more unsuspecting humans into our ever-growing cult. Click <a href="#">here</a> to start collecting Skulls. You can earn them for all kinds of actions, including bringing your unwitting friends into the fold.`,
  //   },
  //   {
  //     question: "HOW DO I EARN SKULLS?",
  //     answer:
  //       "For every dollar you spend on liquiddeath.com, you earn a Skull. You also earn Skulls when you sign up, follow and share us on Twitter and Facebook, follow us on Instagram, or write your first review. Once you have enough Skulls, you can redeem them for any of our logo-drenched paraphernalia and the cycle begins again for all of eternity.",
  //   },
  //   {
  //     question: "HOW DO I REDEEM AND VIEW MY SKULLS?",
  //     answer: `To check how many Skulls you have, just log into your <a href="#">account</a>. There you'll be able to see how to earn more Skulls and what you can redeem them for.`,
  //   },
  //   {
  //     question: "HOW MANY SKULLS DO I NEED TRADE IN FOR THE FREE STUFF?",
  //     answer: `Click the "<a href="#">Earn Skulls</a>" link on the bottom of the website and click “Ways to Redeem” to see how many Skulls it takes to get any of the clothes your mom will definitely hate.`,
  //   },
  //   {
  //     question: "DO I EARN SKULLS WHEN I PURCHASE WATER FROM OTHER RETAILERS?",
  //     answer:
  //       "Yes. Upload a photo of your receipt within 30 days of purchase and get 5 Skulls for every receipt you upload. We'll ignore the other weird shit you bought.",
  //   },
  //   {
  //     question: "HOW COME MY RECEIPT WAS REJECTED?",
  //     answer:
  //       "There are a few possibilities. Please make sure your receipt meets the following credentials, then try again. - Use a clear image. - Upload your receipt within 30 days of your purchase. -Only submit 1 receipt at a time. -The receipt cannot be from liquiddeath.com If you're still having issues, let us know here. Please include an image of your receipt.",
  //   },
  //   {
  //     question: "CAN I REDEEM SKULLS FOR LIQUID DEATH WATER ON AMAZON?",
  //     answer:
  //       "Unfortunately no, but you can still trade them in for free shirts, hats, koozies, and other killer merch on liquiddeath.com 🤘",
  //   },
  // ];

  // console.log(rewardsProgram);

  return (
    <FaqSections>
      <FaqTopic>REWARDS PROGRAM</FaqTopic>
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

export default RewardsProgram;
