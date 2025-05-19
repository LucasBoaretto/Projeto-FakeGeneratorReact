import { PlusIcon } from "lucide-react";
import FaqItem from "../faqItem";
import FaqQuestion from "../FaqQuestion";
import FaqAnswer from "../FaqAnswer";
import FaqLink from "../FaqLinks";
import FaqQuestionBox from "../FaqQuestionBox";
import FaqSections from "../FaqSections";
import FaqTopic from "../FaqTopic";

function ProductInfo() {
  // const productInfo = [
  //   {
  //     question: "CAN I BUY LIQUID DEATH WHOLESALE?",
  //     answer: `We would love for you to. If you would like to order a pallet (154 cases) or more, click <a href="#">here</a> to reach out to our support team and we'll set it up for you.`,
  //   },
  //   {
  //     question: "WHERE CAN I BUY LIQUID DEATH?",
  //     answer: `You can buy Liquid Death online through Amazon, GoPuff, or DoorDash. If you want to use your legs, get it in store at any Whole Foods Market, 7-Eleven, Sprouts, Publix, Sheetz, GetGo, and other retailers. Find Liquid Death near you with our <FaqLinks>Store Locator</FaqLinks>. 🤘`,
  //   },
  //   {
  //     question: "WHERE CAN I BUY LIQUID DEATH ICED TEA?",
  //     answer:
  //       "Iced Tea is currently available on Amazon and at 7-Eleven. It will be available at more stores soon. If you don't see it, tell your store you want them to carry it.",
  //   },
  //   {
  //     question: "ARE YOUR CANS RECYCLABLE?",
  //     answer:
  //       "Yes, our cans are infinitely recyclable. In fact, of all the aluminum produced since 1888, 75% of it is still currently in use. Compare that to plastic which basically isn't recycled anymore because it's simply not profitable. #DeathToPlastic",
  //   },
  //   {
  //     question: "IS THERE CAFFEINE IN LIQUID DEATH?",
  //     answer:
  //       "Only our Iced Teas have a microdose of natural caffeine (30mg from black tea). Our Mountain Waters and Flavored Sparkling Waters contain no caffeine. All of them will brutally murder your thirst so you can dump its body in shallow desert grave.",
  //   },
  //   {
  //     question: "IS LIQUID DEATH SAFE FOR CHILDREN?",
  //     answer: "Yes and highly recommended.",
  //   },
  //   {
  //     question: "IS LIQUID DEATH GLUTEN FREE AND VEGAN?",
  //     answer: "Yes, all of our beverages are gluten free and vegan.",
  //   },
  //   {
  //     question: "I'M PREGNANT. CAN I DRINK LIQUID DEATH MOUNTAIN WATER?",
  //     answer:
  //       "First, congrats. We can't wait to meet the little demon. Second, we definitely recommend drinking Liquid Death Mountain Water while pregnant because water is even more important when you're hydrating for two. (Only our Iced Teas contain a microdose of 30mg of caffeine. Check with your doc if you have questions about caffeine.)",
  //   },
  //   {
  //     question: "WHAT IS THE SHELF LIFE OF LIQUID DEATH?",
  //     answer:
  //       "For technical reasons, the shelf life is pegged at 24 months. So you can definitely use it for your doomsday prep if that's what you're asking. 💀",
  //   },
  //   {
  //     question: "HOW MANY CASES CAN I BUY?",
  //     answer: `Go nuts. But if you want to purchase a pallet (154 cases) or more, click <a href="#">here</a> to reach out to our support team.`,
  //   },
  //   {
  //     question: "WHY DOES LIQUID DEATH COME IN 19.2 OZ CANS NOW?",
  //     answer:
  //       "Most bottled water on the market comes in 20 oz servings. To deliver more Liquid Death to you and thus more efficiently chainsaw your thirst to bits, we've introduced new King Size cans. You may continue to see some of the original size tallboys around for a while though.",
  //   },
  // ];

  // console.log(productInfo);

  return (
    <FaqSections>
      <FaqTopic>PRODUCT INFO</FaqTopic>
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

export default ProductInfo;
