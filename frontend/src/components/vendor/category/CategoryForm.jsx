const CategoryForm = () => {
    return (
      <form className="bg-white w-[45%] rounded-md p-6 shadow-md">
        <h2 className="text-center font-semibold text-lg mb-6">Add Category</h2>
  
  
        {/* Category Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Category name"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-200"
        >
          Add Category
        </button>
      </form>
    );
  };
  
  export default CategoryForm;
  