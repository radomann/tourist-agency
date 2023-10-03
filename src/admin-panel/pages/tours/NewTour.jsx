import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarterKit from "@tiptap/starter-kit";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { Previews } from '../../components/GalleryUpload';

export const NewTour = () => {
    const rteRef = useRef(null);
    const currentDate = new Date();
    const params = useParams();
    let imagesArray = [];

    console.log(params);

    const imagesArrayCallback = (imagesArrayAsProp) => {
        imagesArray = imagesArrayAsProp;
    }

    return (
        <>
          <Box sx={{width: '100%', height: '100%', padding: 2, overflow: 'auto', backgroundColor: '#fff'}}>
            {/* <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <h3>Add new tour</h3>
            </Box> */}
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2}}>
              <TextField 
                id="title"
                label="Title" 
                variant="outlined" 
                sx={{width: '100%', marginRight: 1}}/>
              
              <DatePicker 
                defaultValue={dayjs(currentDate)}
                format="DD/MM/YYYY"
                />
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

            <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2}}>
              <TextField
                id="location"
                label="Location"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><LocationOnIcon/></InputAdornment>,
                  }}
              />  

              <TextField
                id="price"
                label="Price"
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                }}
                sx={{marginLeft: 1}}
              />

              <TextField 
                id="numb-of-people"
                label="Number of people"
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><PeopleIcon/></InputAdornment>,
                }}
                sx={{marginLeft: 1}}
              />

              <TextField 
                id="numb-of-days"
                label="Number of days"
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position="end"><CalendarMonthIcon/></InputAdornment>,
                }}
                sx={{marginLeft: 1}}
              />
            </Box>

            <Box sx={{marginTop: 2}}>
                <h5>Gallery</h5>
                <Previews imagesCallback={imagesArrayCallback}/>
            </Box>

              <Button onClick={() => {
                    console.log(rteRef.current?.editor?.getHTML());
                    console.log(imagesArray);
                }}>
                Log HTML
              </Button>

            </Box>
      </>
    );
  }