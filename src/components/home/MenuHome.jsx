import { buttonConfig } from "./buttonConfig";
import ButtonHome from "./ButtonHome";

function MenuHome(props) {
  const params = {
    inputValue: props.inputValue,
    outputValue: props.outputValue,
    setOutputValue: props.setOutputValue,
  };
  return (
    <menu className="flex flex-row flex-wrap justify-between">
      {buttonConfig.map((config) => (
        <ButtonHome
          key={config.id}
          config={() => config.action(params)}
          content={config.content}
          outputValue={props.outputValue}
        />
      ))}
    </menu>
  );
}

export default MenuHome;
