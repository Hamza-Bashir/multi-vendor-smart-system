import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
  { id: 1, category:"Sports" },
  { id: 2, category:"Graments" },
  { id: 3, category:"Store" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function CategoryTable() {
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
