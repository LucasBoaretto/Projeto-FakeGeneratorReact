import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";
import ArrowButton from "./Line three buttons/ArrowButton";
import MailButton from "./Line three buttons/MailButton";
import NextButton from "./Line three buttons/NextButton";
import PrevButton from "./Line three buttons/PrevButton";
import TextButton from "./Line three buttons/TextButton";

function LibraryLineThree() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Mail Button:</LabelForButton>
          <MailButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Text Button:</LabelForButton>
          <TextButton>Teste</TextButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Next Button:</LabelForButton>
          <NextButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Prev Button:</LabelForButton>
          <PrevButton />
        </ColDiv>
        <ColDiv>
          <LabelForButton>Arrow Button:</LabelForButton>
          <ArrowButton/>
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineThree;
