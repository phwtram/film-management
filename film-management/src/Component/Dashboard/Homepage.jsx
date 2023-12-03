import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import { Button } from "@mui/material";


const columns = [
  { id: "id", label: "ID", minWidth: 80 },
  { id: "img", label: "Image", minWidth: 150 },
  {
    id: "title",
    label: "Title",
    minWidth: 170,
    align: "right",
  },
  {
    id: "year",
    label: "Year",
    minWidth: 100,
    align: "right",
  },
  {
    id: "nation",
    label: "Nation",
    minWidth: 120,
    align: "right",
  },
  {
    id: "clip",
    label: "Clip",
    minWidth: 150,
    align: "right",
  },
  {
    id: "info",
    label: "Info",
    minWidth: 170,
    align: "right",
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 170,
    align: "right",
  }
];

// ...

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [films, setFilms] = useState([]);
  const [open, setOpen] = useState(false);

  const [dataDelete, setDataDelete] = useState("");

  useEffect(() => {
    fetchAllUser();
  }, []);


  const fetchAllUser = async () => {
    try {
      const res = await axios.get(
        "https://6531ffa84d4c2e3f333d7993.mockapi.io/films"
      );
      const sortedFilms = res.data.sort((a, b) => a.id - b.id);
      setFilms(sortedFilms);
    } catch (error) {
      console.log("Error fetching films", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (item) => {
    console.log(item.id);
    setDataDelete(item.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

    return (
      <>

        <Link
          to="/add"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: '20px'
          }}
        >
          <Button
            style={{
              border: "1px solid #FFCBA4",
              backgroundColor: "#FC6C85",
              color: "white",
              boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
              transition: 'all 0.2s',
              '&:hover': {
                backgroundColor: '#FFCBA4',
                color: "#FC6C85"
              }
            }}
          >
            + Add Film
          </Button>
        </Link>
        <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow hover role="checkbox" tabIndex={-1} style={{ '&:hover': { backgroundColor: "#f6f6f6" } }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {films
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "img") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <img
                                  src={value}
                                  alt="Image"
                                  style={{
                                    width: "100px",
                                    height: "auto",
                                  }}
                                />
                              </TableCell>
                            );
                          }
                          if (column.id === "clip") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                                  Video
                                </a>
                              </TableCell>
                            );
                          }
                          if (column.id !== "Action") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                          if (column.id === "Action") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <Tooltip title="Delete">
                                  <DeleteIcon
                                    onClick={() => handleDelete(row)}
                                    style={{ cursor: "pointer", marginRight: '10px', color: '#FC6C85' }}
                                  />
                                </Tooltip>
                                <Tooltip title="Update">
                                  <Link to={`/edit/${row.id}`} style={{ textDecoration: 'none' }}>
                                    <Button style={{ backgroundColor: "#FC6C85", color: "white" }}>
                                      UPDATE
                                    </Button>
                                  </Link>
                                </Tooltip>

                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={films.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
       
        <DeleteModal
          open={open}
          handleClose={handleClose}
          dataDelete={dataDelete}
          fetchAllUser={fetchAllUser}
        />
        
      </>
    );
  }

