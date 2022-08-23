import React, { useEffect } from "react";
import c3 from "c3";
import { useSelector, useDispatch } from "react-redux";
import { getTopProducts as listTopProducts} from "../redux/actions/cartActions";


export const TopProductsChart = () => {

  const dispatch = useDispatch();
  const getTopProducts = useSelector((state) => state.getTopProducts);
  const { topProducts } = getTopProducts;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  var cols = [
  ];
  
  if(topProducts[0]){
    console.log();
    cols = topProducts.map(item => [item._id, item.count]);
  }

  React.useEffect(() => {
    c3.generate({
      bindto: "#chartProducts",
      data: {
        columns: cols,
        type: "bar",
      },
    });
  }, [topProducts[0]]);

  return <div id="chartProducts">
    </div>;
    
};
