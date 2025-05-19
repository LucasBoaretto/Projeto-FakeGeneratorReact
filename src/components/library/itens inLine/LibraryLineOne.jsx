import ColDiv from "../ColDiv";
import LabelForButton from "../LabelForButton";
import LineDiv from "../LineDiv";
import AlertButton from "./Line one buttons/AlertButton";
import AnimatedButton from "./Line one buttons/AnimatedButton";
import DisabledButton from "./Line one buttons/DisabledButton";
import FadingButton from "./Line one buttons/FadingButton";
import OutlineButton from "./Line one buttons/OutlineButton";

// separado os itens da biblioteca por linhas onde cada linha contem 5 botões(ou qualquer outro tipo de componente que irá na biblioteca) respectivamente para evitar muita repetição de código e componentes, esse componente representa a primeira linha da página.

function LibraryLineOne() {
  return (
    <div>
      <LineDiv>
        <ColDiv>
          <LabelForButton>Alert Button:</LabelForButton>
          <AlertButton>Atenção</AlertButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Outline Button:</LabelForButton>
          <OutlineButton>Teste</OutlineButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Disabled Button:</LabelForButton>
          <DisabledButton>Teste</DisabledButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Animated Button:</LabelForButton>
          <AnimatedButton>Teste</AnimatedButton>
        </ColDiv>
        <ColDiv>
          <LabelForButton>Fading Button:</LabelForButton>
          <FadingButton>Teste</FadingButton>
        </ColDiv>
      </LineDiv>
    </div>
  );
}

export default LibraryLineOne;
