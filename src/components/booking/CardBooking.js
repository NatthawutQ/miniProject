import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BookingModal from "../../components/booking/BookingModal";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
  control: {
    padding: theme.spacing(3),
  },
}));

export default function CardBooking() {
  const classes = useStyles();
  const [Room, setRooms] = useState([
    {
      id: 1,
      building: "A1",
      roomNumber: 101,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 2,
      building: "A2",
      roomNumber: 102,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 3,
      building: "A3",
      roomNumber: 103,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 4,
      building: "A4",
      roomNumber: 104,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 5,
      building: "A5",
      roomNumber: 105,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 6,
      building: "A6",
      roomNumber: 106,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 7,
      building: "A7",
      roomNumber: 107,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",

      status: "ว่าง",
    },
    {
      id: 8,
      building: "A8",
      roomNumber: 108,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 9,
      building: "A9",
      roomNumber: 109,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
    {
      id: 10,
      building: "A10",
      roomNumber: 110,
      description: "รายละเอียดผู้เข้าพัก",
      name: "",
      status: "ว่าง",
    },
  ]);

  const checkoutStatus = (bookingid) => {
    const rooms = Room.map((data) => {
      if (data.id === bookingid) {
        data.status = "ว่าง";
        data.name = "";
      }
      return data;
    });
    setRooms(rooms);
  };

  const checkIn = (name, id) => {
    const details = Room.map((data) => {
      if (data.id === id) {
        data.name = name;
        data.status = "ไม่ว่าง";
      }
      return data;
    });
    setRooms(details);
  };

  return (
    <Grid container className={classes.control} spacing={3}>
      {Room.map((item) => (
        <Grid item xs={3}>
          <Grid item xs={3}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  ตึก {item.building}
                </Typography>
                <Typography variant="h5" component="h2">
                 ห้อง {item.roomNumber}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" component="p">
                  ชื่อ {item.name}
                </Typography>
                <p
                  className={classes.pos}
                  style={
                    item.status === "ว่าง"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {item.status}
                </p>
              </CardContent>
              <CardActions>
                <BookingModal
                  status={item.status}
                  roomId={item.id}
                  checkIn={(name, roomId) => checkIn(name, roomId)}
                />
                <Button
                  disabled={item.status === "ว่าง" ? true : false}
                  variant="outlined"
                  color="secondary"
                  onClick={() => checkoutStatus(item.id)}
                >
                  Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
