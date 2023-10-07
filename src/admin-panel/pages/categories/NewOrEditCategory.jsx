import { useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { touristServices } from "../../../service/tourist";
import { Box, Button, Snackbar, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const { getSingleCategory, submitCategory, editCategory } = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NewOrEditCategory = () => {
  const params = useParams();
  const [category, setCategory] = useState({ name: "" });

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  // variable for disabling submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  // variables for input validation
  const [categoryError, setCategoryError] = useState({});

  const handleInputChange = (event, setState, key) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const fetchCategory = async () => {
    try {
      const result = await getSingleCategory(params.id);
      const data = result.data;

      setCategory(data);

      console.log(category);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchCategory();
    }
  }, []);

  const validateCategory = () => {
    if (!category.name) {
      setCategoryError({ isError: true, message: "Category name is required" });
    } else {
      setCategoryError({ isError: false, message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateCategory();

    // field validation
    const hasErrors = !categoryError.isError && category.name;

    if (hasErrors) {
      setIsSubmitting(true);
      // if there is an ID, means category has to be edited
      if (params?.id) {
        try {
          const payload = JSON.stringify(category);
          const response = await editCategory(payload);

          if (response.status === 200) {
            setAlertSeverity("success");
            setAlertMsg("Category successfuly edited!");
            setOpenAlert(true);
            console.log("Svaka cast");
            setIsSubmitting(false);
          } else {
            setAlertSeverity("error");
            setAlertMsg(response.data);
            setOpenAlert(true);
            console.error("Error:", response.data);
            setIsSubmitting(false);
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
          setIsSubmitting(false);
        }

        return;
      }

      // else just insert new category
      try {
        console.log(category);
        const payload = JSON.stringify(category);
        const response = await submitCategory(payload);

        if (response.status === 200) {
          setAlertMsg("Category successfuly submitted!");
          setAlertSeverity("success");
          setOpenAlert(true);
          console.log("Svaka cast");
          setIsSubmitting(false);
        } else {
          setAlertMsg(response.data);
          setAlertSeverity("error");
          setOpenAlert(true);
          console.error("Error:", response.data);
          setIsSubmitting(false);
        }
      } catch (error) {
        let errorMessage = "";

        if (error.message && error.response.data) {
          errorMessage = error.message || "An error occurred";
        }

        setAlertMsg(errorMessage);
        setAlertSeverity("error");
        setOpenAlert(true);
        console.error(errorMessage);
        setIsSubmitting(false);
      }
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

      <form method="post" onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: 2,
            overflow: "auto",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 2,
            }}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={(event) =>
                handleInputChange(event, setCategory, "name")
              }
              value={category.name}
              onBlur={validateCategory}
              error={categoryError.isError}
              helperText={categoryError.message}
            />
          </Box>

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </>
  );
};
