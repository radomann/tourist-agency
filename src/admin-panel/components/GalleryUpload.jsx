import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { Close as CloseIcon, FeaturedPlayList } from '@mui/icons-material';

const dropzoneStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  position: 'relative',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const deleteImg = {
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    backgroundColor: '#fff'
};


export const GalleryUpload = (props) => {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));

      props.imagesCallback(acceptedFiles);
    }
  });

  // console.log('GalleryUpload', props);

  // if(props.alreadyUploadedImages?.length > 0) {
  //   setFiles(props.alreadyUploadedImages.map(file => Object.assign(file, {
  //     preview: URL.createObjectURL(file)
  //   })));
  // }
  
  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
          <a onClick={() => handleRemoveFile(index)} style={deleteImg}>
            <CloseIcon/>
          </a>
    </div>
  ));

  const handleRemoveFile = (indexToRemove) => {
    // Create a new array with the file at the specified index removed
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
  
    // Update the state with the new array
    setFiles(updatedFiles); // Assuming you have a state variable and setter for 'files'
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some images here, or click to select images</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}