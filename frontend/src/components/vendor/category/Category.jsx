import CategoryForm from "./CategoryForm"
import CategoryTable from "./CategoryTable"

const Category = () => {
    return <>
        <h2 className="font-semibold text-[16px] mt-16 p-4">Manage Category</h2>

        <div className="flex justify-between">
            <CategoryTable />
            <CategoryForm />
        </div>
    
    </>
}


export default Category