import { useEffect, useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { touristServices } from "../../../service/tourist";
import { Box, Button, Snackbar, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const { getSingleTestimonial, submitTestimonial, editTestimonial } =
  touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NewOrEditTestimonial = () => {
  const params = useParams();

  const [testimonial, setTestimonial] = useState({
    description: "",
    first_name: "",
    last_name: "",
  });

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  // variable for disabling submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  // variables for input validation
  const [firstNameError, setFirstNameError] = useState({});
  const [lastNameError, setLastNameError] = useState({});
  const [descError, setDescError] = useState({});

  const fetchTestimonial = async () => {
    try {
      const result = await getSingleTestimonial(params.id);
      const data = result.data;

      setTestimonial(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchTestimonial();
    }
  }, []);

  const handleInputChange = (event, setState, key) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const validateFirstName = () => {
    if (!testimonial.first_name) {
      setFirstNameError({ isError: true, message: "First name is required" });
    } else {
      setFirstNameError({ isError: false, message: "" });
    }
  };

  const validateLastName = () => {
    if (!testimonial.last_name) {
      setLastNameError({ isError: true, message: "Last name is required" });
    } else {
      setLastNameError({ isError: false, message: "" });
    }
  };

  const validateDesc = () => {
    if (!testimonial.description) {
      setDescError({ isError: true, message: "Description is required" });
    } else {
      setDescError({ isError: false, message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateFirstName();
    validateLastName();
    validateDesc();

    // field validation
    const hasErrors =
      !firstNameError.isError &&
      !lastNameError.isError &&
      !descError.isError &&
      testimonial.first_name &&
      testimonial.last_name &&
      testimonial.description;

    if (hasErrors) {
      setIsSubmitting(true);

      const payload = {
        first_name: testimonial.first_name,
        last_name: testimonial.last_name,
        description: testimonial.description,
      };

      // if there is an ID, means testimonial has to be edited
      if (params?.id) {
        try {
          const response = await editTestimonial(payload);

          if (response.status === 200) {
            setAlertSeverity("success");
            setAlertMsg("Testimonial successfuly edited!");
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

          setAlertSeverity("error");
          setAlertMsg(errorMessage);
          setOpenAlert(true);
          console.error(errorMessage);
          setIsSubmitting(false);
        }

        return;
      }

      // else just insert new testimonial
      try {
        const response = await submitTestimonial(payload);

        console.log(payload);

        if (response.status === 200) {
          setAlertMsg("Testimonial successfuly submitted!");
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
              id="firstname"
              label="First name"
              variant="outlined"
              sx={{ width: "100%", marginRight: 1 }}
              onChange={(event) =>
                handleInputChange(event, setTestimonial, "first_name")
              }
              value={testimonial.first_name}
              onBlur={validateFirstName}
              error={firstNameError.isError}
              helperText={firstNameError.message}
            />

            <TextField
              id="lastname"
              label="Last name"
              variant="outlined"
              sx={{ width: "100%", marginRight: 1 }}
              onChange={(event) =>
                handleInputChange(event, setTestimonial, "last_name")
              }
              value={testimonial.last_name}
              onBlur={validateLastName}
              error={lastNameError.isError}
              helperText={lastNameError.message}
            />
          </Box>

          <TextField
            id="description"
            label="Description"
            variant="outlined"
            multiline
            maxRows={10}
            sx={{ width: "100%", marginBottom: 1 }}
            onChange={(event) =>
              handleInputChange(event, setTestimonial, "description")
            }
            value={testimonial.description}
            onBlur={validateDesc}
            error={descError.isError}
            helperText={descError.message}
          />

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </>
  );
};
