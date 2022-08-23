import React from "react";
import c3 from "c3";

export const PieProductsChart = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#pieProducts",
      data: {
        columns: [
          ["A", 30],
          ["B", 50],
          ["C", 120],
        ],
        type: "pie",
      },
    });
  }, []);
  
  return <div id="pieProducts" />;
};
