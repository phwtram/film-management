import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function DeleteModal({
  open,
  handleClose,
  dataDelete,
  fetchAllUser,
}) {
  const handleSubmit = async () => {
    try {
      console.log(dataDelete);
      let res = await axios.delete(
        `https://6531ffa84d4c2e3f333d7993.mockapi.io/films/${dataDelete}`
      );
      if (res && res.status === 200) {
        alert("Xóa thành công");
        handleClose();
        fetchAllUser();
      }
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Modal"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete film ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
