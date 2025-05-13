import Chart01 from "../charts/Chart01";
import Chart02 from "../charts/Chart02";

function DashLineOne() {
  return (
    <div className="flex flex-nowrap justify-between pb-4">
      <Chart01 />
      <Chart02 />
    </div>
  );
}

export default DashLineOne;
