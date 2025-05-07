import ButtonHome from "./ButtonHome";

function MenuHome() {
  return (
    <menu className="flex flex-row flex-wrap justify-between">
      <ButtonHome>TOGGLE CASE</ButtonHome>
      <ButtonHome>PROPER CASE</ButtonHome>
      <ButtonHome>SENTENCE CASE</ButtonHome>
      <ButtonHome>UPPERCASE</ButtonHome>
      <ButtonHome>LOWERCASE</ButtonHome>
      <ButtonHome>MIXEDCASE</ButtonHome>
      <ButtonHome>RESET</ButtonHome>
      <ButtonHome>COPY RESULT</ButtonHome>
    </menu>
  );
}

export default MenuHome;
