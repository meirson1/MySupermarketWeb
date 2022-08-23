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

  React.useEffect(() => {
    c3.generate({
      bindto: "#chartProducts",
      data: {
        columns: topProducts.map(item => [item._id, item.count]),
        type: "bar",
      },
    });
  }, [topProducts[0]]);

  return <div id="chartProducts">
    </div>;
    
};
