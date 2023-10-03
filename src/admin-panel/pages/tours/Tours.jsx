import { useState } from 'react';
import { Link } from "react-router-dom";
import { PostsOrPagesListingGrid } from '../../components/PostsOrPagesListingGrid';
import { Box, Tooltip, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) =>
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={() => editTour(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => deleteTour(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>,
      
    }
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const editTour = (id) => {
    console.log('edit', id);
  }

  const deleteTour = (id) => {
    console.log('delete', id);
  }

export const Tours = () => {
    const type = 'tour';

    return (
        <>
            <Link to="/admin/new-tour">
              <Button variant="contained" style={{marginBottom: '5px'}}>Add tour</Button>
            </Link>
            <PostsOrPagesListingGrid columns={columns} rows={rows}/>
        </>
    )
}