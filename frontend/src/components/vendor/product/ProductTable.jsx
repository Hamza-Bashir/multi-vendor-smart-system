import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

const initialRows = [
  { id: 1, firstName: "Apple MacBook Air M2", category: "Sports" },
  { id: 2, firstName: "Samsung Galaxy S24 Ultra", category: "Garments" },
  { id: 3, firstName: "Sony WH-1000XM5 Headphones", category: "Store" },
];

export default function ProductTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    setRows((prev) =>
      prev.map((r) => (r.id === selectedRow.id ? selectedRow : r))
    );
    setOpen(false);
  };

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
            onClick={() => handleEditClick(params.row)}
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
            minWidth: 400,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Product Name"
            value={selectedRow?.firstName || ""}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, firstName: e.target.value })
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Category"
            value={selectedRow?.category || ""}
            onChange={(e) =>
              setSelectedRow({ ...selectedRow, category: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
