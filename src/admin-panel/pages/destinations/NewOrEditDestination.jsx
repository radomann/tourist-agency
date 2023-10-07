import { useState, useRef, useEffect, forwardRef } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Snackbar,
  FormHelperText,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarterKit from "@tiptap/starter-kit";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { touristServices } from "../../../service/tourist";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { GalleryUpload } from "../../components/GalleryUpload";

const {
  getAllDestinations,
  getAllCategories,
  submitDestination,
  editDestination,
} = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NewOrEditDestination = () => {
  const rteRef = useRef(null);
  const currentDate = new Date();
  const params = useParams();
  let imagesArray = [];

  // const [title, setTitle] = useState("");
  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  // const [price, setPrice] = useState("");
  // const [numberOfPeople, setNumberOfPeople] = useState();
  // const [duration, setDuration] = useState("");
  // const [uploadedImages, setUploadedImages] = useState([]);
  // const [category, setCategory] = useState({ name: "" });
  const [categories, setCategories] = useState([]);

  const [destination, setDestination] = useState({
    title: "",
    start_date: null,
    end_date: null,
    price: "",
    number_of_people: "",
    duration: "",
    category: { name: "" },
    uploadedImages: [],
  });

  // alert variables
  const [alertSeverity, setAlertSeverity] = useState();
  const [alertMsg, setAlertMsg] = useState();
  const [openAlert, setOpenAlert] = useState(false);

  // variable for disabling submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  // variables for input validation
  const [titleError, setTitleError] = useState({});
  const [startDateError, setStartDateError] = useState({});
  const [endDateError, setEndDateError] = useState({});
  const [categoryError, setCategoryError] = useState({});

  const imagesArrayCallback = (imagesArrayAsProp) => {
    imagesArray = imagesArrayAsProp;
  };

  // updating destination values from fetch
  const updateDestination = (newValues) => {
    setDestination((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const fetchDestination = async () => {
    try {
      const result = await getAllDestinations(`/destinations/${params.id}`);
      const data = result.data;

      const startDate = new Date(data.start_date);
      const endDate = new Date(data.end_date);

      updateDestination({
        title: data.title,
        price: data.price,
        duration: data.duration,
        category: data.category,
        number_of_people: data.number_of_people,
        media: data.media,
        start_date: dayjs(startDate),
        end_date: dayjs(endDate),
      });
      rteRef?.current?.editor?.commands.setContent(data.description);
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
      console.error(error);
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
    if (params?.id) {
      fetchDestination();
    }
    fetchCategories();
  }, []);

  const handleInputChange = (event, setState, key) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      [key]:
        typeof prevState[key] === "object"
          ? { ...prevState[key], name: value }
          : value,
    }));
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const validateTitle = () => {
    if (!destination.title) {
      setTitleError({ isError: true, message: "Title is required" });
    } else {
      setTitleError({ isError: false, message: "" });
    }
  };

  const validateStartDate = () => {
    if (!destination.start_date) {
      setStartDateError({ isError: true, message: "Start date is required" });
    } else {
      setStartDateError({ isError: false, message: "" });
    }
  };

  const validateEndDate = () => {
    if (!destination.end_date) {
      setStartDateError({ isError: true, message: "End date is required" });
    } else {
      setEndDateError({ isError: false, message: "" });
    }
  };

  const validateCategory = () => {
    if (!destination.category.name) {
      setCategoryError({ isError: true, message: "Category is required" });
    } else {
      setCategoryError({ isError: false, message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateTitle();
    validateStartDate();
    validateEndDate();
    validateCategory();

    const hasErrors =
      !titleError &&
      !startDateError &&
      !endDateError &&
      !categoryError &&
      destination.title &&
      destination.startDate &&
      destination.endDate &&
      destination.category;

    if (hasErrors) {
      setIsSubmitting(true);

      const description = rteRef.current?.editor?.getHTML();
      const payload = JSON.stringify({ destination, description });

      // const payload = {
      //   title,
      //   start_date: startDate.$d,
      //   end_date: endDate.$d,
      //   location,
      //   price,
      //   duration,
      //   description,
      //   media: imagesArray,
      // };

      if (params?.id) {
        try {
          const response = await editDestination(payload);

          if (response.status === 200) {
            setAlertSeverity("success");
            setAlertMsg("Destiantion successfully edited!");
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

      try {
        console.log(payload);
        const response = await submitDestination(payload);

        if (response.status === 200) {
          setAlertSeverity("success");
          setAlertMsg("Destiantion successfully submitted!");
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
        let errorMessage = "";

        if (error.message && error.response.data) {
          errorMessage = error.message || "An error occurred";
        }

        setAlertSeverity("error");
        setAlertMsg(errorMessage);
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
              id="title"
              label="Title"
              variant="outlined"
              sx={{ width: "100%", marginRight: 1, flex: "0 0 60%" }}
              onChange={(event) =>
                handleInputChange(event, setDestination, "title")
              }
              value={destination.title}
              onBlur={validateTitle}
              error={titleError.isError}
              helperText={titleError.message}
            />

            <FormControl
              variant="outlined"
              fullWidth
              error={startDateError.isError}
              sx={{ marginRight: 1 }}
            >
              <DatePicker
                format="DD/MM/YYYY"
                disablePast
                onChange={(event) =>
                  handleInputChange(event, setDestination, "start_date")
                }
                value={destination.start_date}
                onBlur={validateStartDate}
              />
              <FormHelperText>{startDateError.message}</FormHelperText>
            </FormControl>

            <FormControl
              variant="outlined"
              fullWidth
              error={endDateError.isError}
            >
              <DatePicker
                format="DD/MM/YYYY"
                disablePast
                onChange={(event) =>
                  handleInputChange(event, setDestination, "end_date")
                }
                value={destination.end_date}
                onBlur={validateEndDate}
              />
              <FormHelperText>{endDateError.message}</FormHelperText>
            </FormControl>
          </Box>

          <RichTextEditor
            ref={rteRef}
            extensions={[StarterKit]} // Or any Tiptap extensions you wish!
            content="" // Initial content for the editor
            // Optionally include `renderControls` for a menu-bar atop the editor:
            renderControls={() => (
              <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                {/* Add more controls of your choosing here */}
              </MenuControlsContainer>
            )}
          />

          <Box
            sx={{
              display: "flex",
              marginTop: 2,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <FormControl sx={{ minWidth: 120 }} error={categoryError.isError}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={destination.category.name}
                label="Category"
                onBlur={validateCategory}
                onChange={(event) =>
                  handleInputChange(event, setDestination, "category")
                }
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{categoryError.message}</FormHelperText>
            </FormControl>

            <TextField
              id="price"
              label="Price"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }}
              sx={{ marginLeft: { md: 1 }, marginTop: { xs: 1, md: 0 } }}
              onChange={(event) =>
                handleInputChange(event, setDestination, "price")
              }
              value={destination.price}
            />

            <TextField
              id="numb-of-people"
              label="Number of people"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PeopleIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginLeft: { md: 1 }, marginTop: { xs: 1, md: 0 } }}
              onChange={(event) =>
                handleInputChange(event, setDestination, "number_of_people")
              }
              value={destination.number_of_people}
            />

            <TextField
              id="duration"
              label="Duration"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ marginLeft: { md: 1 }, marginTop: { xs: 1, md: 0 } }}
              onChange={(event) =>
                handleInputChange(event, setDestination, "duration")
              }
              value={destination.duration}
            />
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <h5>Gallery</h5>
            <GalleryUpload
              imagesCallback={imagesArrayCallback}
              alreadyUploadedImages={destination.media}
            />
          </Box>

          {/* <Button onClick={() => {
                    console.log(rteRef.current?.editor?.getHTML());
                    console.log(imagesArray);
                }}>
                Log HTML
              </Button> */}

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Box>
      </form>
    </>
  );
};
