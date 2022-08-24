import "./Stats.css";
import { TopProductsChart } from "../../components/charts/TopProducts";
import { PieProductsChart } from "../../components/charts/PieProducts";

const StatsPage = () => {
	
  return (
    <div className="statsPage">
      <center><b><h1>Statistics</h1></b></center>
      <h3>Top 10 Products</h3>
      <TopProductsChart />

      <h3>Departments Pie Chart</h3>
      <PieProductsChart />
    </div>
  )
}

export default StatsPage;