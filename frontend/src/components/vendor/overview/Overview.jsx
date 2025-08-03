import ProductSalesBarChart from "./ProductSaleBarChart"
import SaleChart from "./SaleChart"
import SalesDistributionPie from "./SaleDistribution"

const Overview = () => {
    return <>
    <h2 className="p-4 font-bold text-[16px]">Business Analysis</h2>

    <div className="flex flex-wrap gap-5">
        <SaleChart />
        <SalesDistributionPie />
        <ProductSalesBarChart />
    </div>
    </>
}


export default Overview