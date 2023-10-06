import { useEffect, useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ListingGrid } from "../../components/ListingGrid";
import { Box, Tooltip, Button, IconButton, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { touristServices } from "../../../service/tourist";

const { getAllDestinations, deleteDestination } = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Destinations = () => {
  const type = "destinations";

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "price", headerName: "Price", type: "number", width: 130 },
    {
      field: "duration",
      headerName: "Duration",
      type: "number",
      width: 90,
    },
    { field: "start_date", headerName: "Start date", width: 130 },
    { field: "end_date", headerName: "End date", width: 130 },
    {
      field: "category.name",
      headerName: "Category",
      width: 130,
      valueGetter: (params) => params.row.category.name,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditDestination(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteDestination(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState();

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  const handleEditDestination = (id) => {
    window.location.href = `/admin/destination/${id}`;
  };

  const handleDeleteDestination = async (id) => {
    try {
      const response = await deleteDestination(id);

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

  const fetchDestinations = async () => {
    try {
      const result = await getAllDestinations(type);
      setDestinations(result.data.results);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

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

      <Link to="/admin/new-destination">
        <Button variant="contained" style={{ marginBottom: "5px" }}>
          Add destination
        </Button>
      </Link>
      <ListingGrid columns={columns} rows={destinations} />

      {/* <ul>{ destinations.map(destination => <li>{destination.id}</li>) }</ul> */}
    </>
  );
};
