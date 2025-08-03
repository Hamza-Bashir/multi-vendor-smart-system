import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const columns = [
  { field: 'category', headerName: 'Category Name', width: 180 },
  { field: 'product', headerName: 'Product Name', width: 150 },
  { field: 'quantity', headerName: 'Quantity', width: 150 },
  { field: 'price', headerName: 'Price', width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 280,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', gap: '8px', marginTop:"10px" }}>
        <Button variant="contained" color="warning" size="small">
          Pending
        </Button>
        <Button variant="contained" color="success" size="small">
          Deliver
        </Button>
        <Button variant="contained" color="error" size="small">
          Cancel
        </Button>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    product: 'Apple MacBook Air M2',
    category: 'Sports',
    quantity: '10 pcs',
    price: '1500 rupees',
  },
  {
    id: 2,
    product: 'Nike Air Max 2023',
    category: 'Garments',
    quantity: '5 pcs',
    price: '9500 rupees',
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function OrderTable() {
  return (
    <Paper sx={{ height: 400, width: '100%', p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
