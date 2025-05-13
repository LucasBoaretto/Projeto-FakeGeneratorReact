import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";

function LibraryLineTwo() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Icon Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Social Media Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Check:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Loading Button:</LabelForButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Download Button:</LabelForButton>
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineTwo;
