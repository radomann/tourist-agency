import { ListingGrid } from "../../components/ListingGrid"
import { touristServices } from "../../../service/tourist";
import { useEffect, useState } from "react";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";


const { getAllCategories } = touristServices;

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) =>
        <Box>
          <Tooltip title="Edit">
            <IconButton onClick={() => editCategory(params.row.id)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => deleteCategory(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>      
    }
  ];

const editCategory = (id) => {
    window.location.href = `/admin/categories/${id}`;
}

const deleteCategory = (id) => {
    // zavrsiti detele
}

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {

        try {
            const result = await getAllCategories();
            const data = result.data;

            setCategories(data.results);

        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <>
            <Link to="/admin/new-category">
              <Button variant="contained" style={{marginBottom: '5px'}}>Add category</Button>
            </Link>
            <ListingGrid rows={categories} columns={columns} />
        </>
    )
}