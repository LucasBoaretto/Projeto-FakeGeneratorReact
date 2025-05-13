import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";

function LibraryLineThree() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Mail Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Text Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Next Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Prev Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Arrow Button:</LabelForButton>
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineThree;
