import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";

function LineFour() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Other Button 1:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Other Button 2:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Other Button 3:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Share Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Help Button:</LabelForButton>
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LineFour;
