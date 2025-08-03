import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditDialogBox from "../../reuseable/EditDialogBox";

export default function ProductTable() {
  const rows =  [
    { id: 1, firstName: "Apple MacBook Air M2", category: "Sports" },
    { id: 2, firstName: "Samsung Galaxy S24 Ultra", category: "Garments" },
    { id: 3, firstName: "Sony WH-1000XM5 Headphones", category: "Store" },
  ];

  const [openDialog, setOpenDialog] = React.useState(false)

  

  const columns = [
    { field: "firstName", headerName: "Product Name", width: 180 },
    { field: "category", headerName: "Category Name", width: 150 },
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
      <Paper sx={{ height: 400, width: "50%", margin: "20px auto" }}>
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
