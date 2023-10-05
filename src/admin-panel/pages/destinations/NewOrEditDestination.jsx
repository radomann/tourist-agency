import { useState, useRef, useEffect, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, InputAdornment, FormControl, MenuItem, InputLabel, Select, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarterKit from "@tiptap/starter-kit";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { touristServices } from '../../../service/tourist';
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { GalleryUpload } from '../../components/GalleryUpload';

const { getAllDestinations, getAllCategories, submitDestination, editDestination } = touristServices;

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NewOrEditDestination = () => {
    const rteRef = useRef(null);
    const currentDate = new Date();
    const params = useParams();
    let imagesArray = [];

    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(dayjs(currentDate));
    const [endDate, setEndDate] = useState(dayjs(currentDate));
    const [price, setPrice] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState();
    const [duration, setDuration] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    // alert variables
    const [alertSeverity, setAlertSeverity] = useState();
    const [alertMsg, setAlertMsg] = useState();
    const [openAlert, setOpenAlert] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSelectChange = (event) => {
      setCategory(event.target.value);
    };

    const imagesArrayCallback = (imagesArrayAsProp) => {
        imagesArray = imagesArrayAsProp;
    }

    const fetchDestination = async () => {
      try {
        const result = await getAllDestinations(`/destinations/${params.id}`);
        const data = result.data;

        setTitle(data.title);
        setPrice(data.price);
        setDuration(data.duration);
        setUploadedImages(data.media);
        rteRef?.current?.editor?.commands.setContent(data.description);

        const startDate = new Date(data.start_date);
        const endDate = new Date(data.end_date);

        setStartDate(dayjs(startDate));
        setEndDate(dayjs(endDate));
        

        // console.log(data);
        // console.log('uploadedImages', uploadedImages);
      } catch(error) {
        console.error(error);
      }
    }

    const fetchCategories = async () => {
      try {
        const result = await getAllCategories();
        const data = result.data;
        setCategories(data.results);

      } catch(error) {
        console.error(error);
      }
    }

    useEffect(() => {
      if(params?.id) {
        fetchDestination();
      }
      fetchCategories();
    }, [])

    const handleInputChange = (event, setState) => {
      const {
        target: { value },
      } = event;
  
      setState(value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);

      const description = rteRef.current?.editor?.getHTML();
      const payload = {
        title,
        start_date: startDate.$d,
        end_date: endDate.$d,
        location,
        price,
        duration,
        description,
        media: imagesArray,
      };

      if(params?.id) {
        try {
          const response = await editDestination(payload);

          if(response.status === 200) {
            setAlertSeverity('success');
            setAlertMsg('Destiantion successfully edited!');
            setOpenAlert(true);
            console.log('Svaka cast');
            setIsSubmitting(false);
          } else {
            setAlertSeverity('error');
            setAlertMsg(response.data);
            setOpenAlert(true);
            console.error('Error:', response.data);
            setIsSubmitting(false);
          }

        } catch(error) {
          setAlertSeverity('error');
          setAlertMsg(error);
          setOpenAlert(true);
          console.error('Network error:', error);
          setIsSubmitting(false);
        }

        return;
      }

      try {
        console.log(payload);
        const response = await submitDestination(payload);

        if (response.status === 200) {
          setAlertSeverity('success');
          setAlertMsg('Destiantion successfully submitted!');
          setOpenAlert(true);
          console.log('Svaka cast');
          setIsSubmitting(false);

        } else {
          setAlertSeverity('error');
          setAlertMsg(response.data);
          setOpenAlert(true);
          console.error('Error:', response.data);
          setIsSubmitting(false);
        }

      } catch(error) {
        setAlertSeverity('error');
        setAlertMsg(error);
        setOpenAlert(true);
        console.error('Network error:', error);
        setIsSubmitting(false);
      }
    };

    const handleAlertClose = () => {
        setOpenAlert(false);
    }

    return (
        <>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openAlert}
            autoHideDuration={6000}
        >
            <Alert severity={alertSeverity} onClose={handleAlertClose}>{alertMsg}</Alert>
        </Snackbar>

        <form method="post" onSubmit={handleSubmit} >
          <Box sx={{width: '100%', height: '100%', padding: 2, overflow: 'auto', backgroundColor: '#fff'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2}}>
              <TextField 
                id="title"
                label="Title" 
                variant="outlined" 
                sx={{width: '100%', marginRight: 1}}
                onChange={event => handleInputChange(event, setTitle)}
                value={title}
                />
              
              <DatePicker 
                // defaultValue={dayjs(currentDate)}
                format="DD/MM/YYYY"
                sx={{marginRight: 1}}
                onChange={event => handleInputChange(event, setStartDate)}
                value={startDate}
                />

              <DatePicker 
                // defaultValue={dayjs(currentDate)}
                format="DD/MM/YYYY"
                onChange={event => handleInputChange(event, setEndDate)}
                value={endDate}
                />
            </Box>

            <RichTextEditor
              ref={rteRef}
              extensions={[StarterKit]} // Or any Tiptap extensions you wish!
              content='' // Initial content for the editor
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

            <Box sx={{display: 'flex', marginTop: 2}}>

            <FormControl sx={{ marginRight: 1, minWidth: 120 }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category"
                id="category"
                value={category}
                label="Category"
                onChange={handleSelectChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                {category.name}
          </MenuItem>
        ))}
              </Select>
            </FormControl>

              <TextField
                id="price"
                label="Price"
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                }}
                sx={{marginLeft: 1}}
                onChange={event => handleInputChange(event, setPrice)}
                value={price}
              />

              <TextField 
                id="numb-of-people"
                label="Number of people"
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><PeopleIcon/></InputAdornment>,
                }}
                sx={{marginLeft: 1}}
                onChange={event => handleInputChange(event, setNumberOfPeople)}
                value={numberOfPeople}
              />

              <TextField 
                id="duration"
                label="Duration"
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><CalendarMonthIcon/></InputAdornment>,
                }}
                sx={{marginLeft: 1}}
                onChange={event => handleInputChange(event, setDuration)}
                value={duration}
              />
            </Box>

            <Box sx={{marginTop: 2}}>
                <h5>Gallery</h5>
                <GalleryUpload imagesCallback={imagesArrayCallback} alreadyUploadedImages={uploadedImages}/>
            </Box>

              {/* <Button onClick={() => {
                    console.log(rteRef.current?.editor?.getHTML());
                    console.log(imagesArray);
                }}>
                Log HTML
              </Button> */}

              <Button type='submit' variant="contained" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>

            </Box>
        </form>
      </>
    );
  }