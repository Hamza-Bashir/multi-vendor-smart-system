import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditDialogBox from '../../reuseable/EditDialogBox';




export default function CategoryTable() {
  const columns = [
    { field: 'category', headerName: 'Category Name', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: '8px', marginTop:"10px" }}>
          <Button variant="contained" color="primary" size="small" onClick={()=>setOpenDialog(true)}>
            Edit
          </Button>
          <Button variant="contained" color="error" size="small">
            Delete
          </Button>
        </div>
      ),
    },
  ];
  
  const rows = [
    { id: 1, category:"Sports" },
    { id: 2, category:"Graments" },
    { id: 3, category:"Store" },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };

  const [openDialog, setOpenDialog] = React.useState(false)

  return <>
  <Paper className="" sx={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
    <EditDialogBox isOpen={openDialog} onClose={()=>setOpenDialog(false)} title="Edit Category">
    <form className="bg-white w-full p-6">
  
  
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
          Edit Category
        </button>
      </form>

    </EditDialogBox>
  </>
    

    
  
}
