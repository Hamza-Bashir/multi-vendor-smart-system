import ProductForm from "./ProductForm"
import ProductTable from "./ProductTable"

const Product = () => {
    return <>
        <h2 className="font-semibold text-[16px] mt-16 p-4">Manage Product</h2>

        <div className="flex justify-between">
            <ProductTable /> 
            <ProductForm />
        </div>
    
    </>
}


export default Product