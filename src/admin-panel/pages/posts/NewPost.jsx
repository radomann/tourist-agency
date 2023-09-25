import { useState, useRef } from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
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

export const NewPost = () => {
    // console.log(type);
    const rteRef = useRef(null);
    const currentDate = new Date();

    return (
        <>
          <Box sx={{width: '100%', height: '100%', padding: 2, overflow: 'auto', backgroundColor: '#fff'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <h3>Add new post</h3>
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

              <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
                Log HTML
              </Button>

        </Box>
      </>
    );
  }