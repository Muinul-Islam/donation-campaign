/* eslint-disable react/prop-types */
import { PieChart } from "recharts";

const Statistics = ({ Categories }) => {
  console.log(Categories);
  return (
    <div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Statistics;
