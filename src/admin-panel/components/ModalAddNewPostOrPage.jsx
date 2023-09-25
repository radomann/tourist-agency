import { useState, useRef } from 'react';
import { Box, Card, TextField, Button, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarterKit from "@tiptap/starter-kit";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import '../assets/modal.scss'

import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";

export const ModalAddNew = ({onClose, type}) => {
    // console.log(type);
    const rteRef = useRef(null);
    const currentDate = new Date();

    return (
        <>
        {/* <div className="modal"> */}
        <Card className="modal">
          <Box sx={{width: '100%', height: '100%', padding: 2, overflow: 'auto'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <h3>Add new {type}</h3>
              <a onClick={onClose} className='close'><CloseIcon/></a>
            </Box>
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
              content="<p>Hello world</p>" // Initial content for the editor
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

            <Box sx={{display: 'flex'}}>
              <TextField
                id="location"
                label="Location"
                sx={{marginTop: 2}}
              />  

              <TextField
                id="price"
                label="Price"
                type="number"
                InputProps={{
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                }}
                sx={{marginTop: 2, marginLeft: 1}}
              />

              <TextField 
                id="numb-of-people"
                label="Number of people"
                type="number"
                sx={{marginTop: 2, marginLeft: 1}}
              />

              <TextField 
                id="numb-of-days"
                label="Number of days"
                type="number"
                sx={{marginTop: 2, marginLeft: 1}}
              />
            </Box>

              <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
                Log HTML
              </Button>

              
            </Box>
        </Card>
        {/* </div> */}
      </>
    );
  }