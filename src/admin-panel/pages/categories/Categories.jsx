import { useEffect, useState, forwardRef } from "react";
import { ListingGrid } from "../../components/ListingGrid";
import { touristServices } from "../../../service/tourist";
import { Box, Button, IconButton, Snackbar, Tooltip } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const { getAllCategories, deleteCategory } = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Categories = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditCategory(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteCategory(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const [categories, setCategories] = useState([]);

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  const handleEditCategory = (id) => {
    window.location.href = `/admin/categories/${id}`;
  };

  const handleDeleteCategory = async (id) => {
    try {
      const response = await deleteCategory(id);

      if (response.status === 204) {
        fetchCategories();

        setAlertSeverity("success");
        setAlertMsg("Category successfully deleted!");
        setOpenAlert(true);
      } else {
        setAlertSeverity("error");
        setAlertMsg(response.data);
        setOpenAlert(true);
      }
    } catch (error) {
      let errorMessage = error.message;

      if (error.response && error.response.data) {
        errorMessage = error.response.data.detail || "An error occurred";
      }

      setAlertMsg(errorMessage);
      setAlertSeverity("error");
      setOpenAlert(true);
      console.error(errorMessage);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await getAllCategories();
      const data = result.data;

      setCategories(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
      >
        <Alert severity={alertSeverity} onClose={handleAlertClose}>
          {alertMsg}
        </Alert>
      </Snackbar>

      <Link to="/admin/new-category">
        <Button variant="contained" style={{ marginBottom: "5px" }}>
          Add category
        </Button>
      </Link>
      <ListingGrid rows={categories} columns={columns} />
    </>
  );
};
