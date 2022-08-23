import { TopProductsChart } from "../charts/TopProducts";
import { PieProductsChart } from "../charts/PieProducts";

const StatsPage = () => {
	
  return (
    <div>
      <center><b><h1>Statistics</h1></b></center>
      <h3>Top 10 Products</h3>
      <TopProductsChart />
      <br></br>
      <h3>Departments Pie Chart</h3>
      <PieProductsChart />
    </div>
  )
}

export default StatsPage;