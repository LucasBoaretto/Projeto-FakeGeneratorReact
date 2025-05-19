import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";
import HelpButton from "./Line four buttons/HelpButton";
import OtherOneButton from "./Line four buttons/OtherOneButton";
import OtherThreeButton from "./Line four buttons/OtherThreeButton";
import OtherTwoButton from "./Line four buttons/OtherTwoButton";
import ShareButton from "./Line four buttons/ShareButton";

function LibraryLineFour() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Other Button 1:</LabelForButton>
          <OtherOneButton>Teste</OtherOneButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Other Button 2:</LabelForButton>
          <OtherTwoButton>Teste</OtherTwoButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Other Button 3:</LabelForButton>
          <OtherThreeButton>Teste</OtherThreeButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Share Button:</LabelForButton>
          <ShareButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Help Button:</LabelForButton>
          <HelpButton />
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineFour;
