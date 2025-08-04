const ProductForm = () => {
  return (
    <form className="bg-white w-[45%] rounded-md p-6 shadow-md">
      <h2 className="text-center font-semibold text-lg mb-6">Add Product</h2>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          defaultValue=""
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="sports">Sports</option>
          <option value="garments">Garments</option>
        </select>
      </div>

      {/* Product Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Price
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product Price"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Stock
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter product Stock"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
        </label>
        <input
          className="w-fit border border-gray-300 rounded-md py-2 px-3 text-sm bg-gray-500 text-white"
          type="file"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-200"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
