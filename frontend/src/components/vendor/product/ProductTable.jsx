import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditDialogBox from "../../reuseable/EditDialogBox";

export default function ProductTable() {
  const rows =  [
    { id: 1, category: "Sports", product: "Cricket", productPrice: "100 rupees", productStock: "15 pcs", productImage: <img src="https://picsum.photos" /> },
    
  ];

  const [openDialog, setOpenDialog] = React.useState(false)

  

  const columns = [
    { field: "category", headerName: "Category Name", width: 180 },
    { field: "product", headerName: "Product Name", width: 150 },
    { field: "productPrice", headerName: "Product Price", width: 150 },
    { field: "productStock", headerName: "Product Stock", width: 150 },
    { field: "productImage", headerName: "Product Image", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setOpenDialog(true)}
          >
            Edit
          </Button>
          <Button variant="contained" color="error" size="small">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Paper  sx={{ height: 400, width: "100%", margin: "20px auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          sx={{ border: 0 }}
        />
      </Paper>


      <EditDialogBox
        isOpen={openDialog}
        onClose={()=>setOpenDialog(false)}
        title="Edit Product"
      >
        <form className="bg-white w-full p-6">

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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-200"
      >
        Edit Product
      </button>
    </form>
      
      </EditDialogBox>

      
    </>
  );
}
