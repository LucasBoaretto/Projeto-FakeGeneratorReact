import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";

// separado os itens da biblioteca por linhas onde cada linha contem 5 botões(ou qualquer outro tipo de componente que irá na biblioteca) respectivamente para evitar muita repetição de código e componentes, esse componente representa a primeira linha da página.

function LineOne() {
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

export default LineOne;
