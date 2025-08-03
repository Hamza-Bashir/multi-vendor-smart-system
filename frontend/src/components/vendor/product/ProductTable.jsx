import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const columns = [
  { field: 'firstName', headerName: 'Product Name', width: 180 },
  { field: 'category', headerName: 'Category Name', width: 150 },,
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', gap: '8px', marginTop:"10px" }}>
        <Button variant="contained" color="primary" size="small">
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
  { id: 1, firstName: 'Apple MacBook Air M2', category:"Sports" },
  { id: 2, firstName: 'Samsung Galaxy S24 Ultra', category:"Graments" },
  { id: 3, firstName: 'Sony WH-1000XM5 Headphones', category:"Store" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function ProductTable() {
  return (
    <Paper className="" sx={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
