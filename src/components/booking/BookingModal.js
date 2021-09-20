import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function BookingModal(props) {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [values, setValues] = useState({
    name: "",
  });

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  const confirmBooking = () => {
    props.checkIn(values, props.roomId);
    setOpenPopup(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        disabled={props.status === "ไม่ว่าง" ? true : false }
      >
        กดจอง
      </Button>
      <Dialog
        open={openPopup}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">การจองห้องพัก</DialogTitle>
        <DialogContent>
          <DialogContentText>
            โปรดกรอกข้อมูล ชื่อ และ นามสกุล ให้ครบถ้วน
            และตรวจสอบก่อนกดยืนยันเพื่อทำการจองห้องพัก
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ชื่อผู้เข้าพัก"
            type="name"
            value={values.name}
            onChange={(e) => setValues(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            ยกเลิก
          </Button>
          <Button onClick={() => confirmBooking(values.name)} color="primary">
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
