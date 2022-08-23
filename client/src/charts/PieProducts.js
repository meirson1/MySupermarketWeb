import React, { useEffect } from "react";
import c3 from "c3";
import { useSelector, useDispatch } from "react-redux";
import { getDepartmentsPie as listDepartmentsPie} from "../redux/actions/cartActions";

export const PieProductsChart = () => {

  const dispatch = useDispatch();
  const getDepartmentsPie = useSelector((state) => state.getDepartmentsPie);
  const { departmentsPie } = getDepartmentsPie;

  useEffect(() => {
    dispatch(listDepartmentsPie());
  }, [dispatch]);

  React.useEffect(() => {
    c3.generate({
      bindto: "#pieProducts",
      data: {
        columns: departmentsPie.map(item => [item._id, item.sum]),
        type: "pie",
      },
    });
  }, [departmentsPie[0]]);
  
  return <div id="pieProducts" />;
};
