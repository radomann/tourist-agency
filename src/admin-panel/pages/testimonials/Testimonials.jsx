import { useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ListingGrid } from "../../components/ListingGrid";
import Button from "@mui/material/Button";
import { Box, IconButton, Snackbar, Tooltip } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { touristServices } from "../../../service/tourist";

const { getAllTestimonials, deleteTestimonial } = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Testimonials = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    { field: "description", headerName: "Description", width: 400 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditTestimonial(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteTestimonial(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const [testimonals, setTestimonials] = useState([]);

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const result = await getAllTestimonials();
      const data = result.data.results;

      setTestimonials(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleEditTestimonial = (id) => {
    window.location.href = `/admin/testimonial/${id}`;
  };
  const handleDeleteTestimonial = async (id) => {
    try {
      const response = await deleteTestimonial(id);

      if (response.data === 200) {
        setAlertSeverity("success");
        setAlertMsg("Destiantion successfully deleted!");
        setOpenAlert(true);
      } else {
        setAlertSeverity("error");
        setAlertMsg(response.data);
        setOpenAlert(true);
      }
    } catch (error) {
      let errorMessage = error.message;

      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || "An error occurred";
      }

      setAlertMsg(errorMessage);
      setAlertSeverity("error");
      setOpenAlert(true);
      console.error(errorMessage);
    }
  };

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

      <Link to="/admin/new-testimonial">
        <Button variant="contained" style={{ marginBottom: "5px" }}>
          Add testimonial
        </Button>
      </Link>
      <ListingGrid columns={columns} rows={testimonals} />
    </>
  );
};
