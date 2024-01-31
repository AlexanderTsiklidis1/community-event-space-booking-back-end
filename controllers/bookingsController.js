const express = require("express");
const bookings = express.Router({ mergeParams: true });
const {
  allRooms,
  getAllBookings,
  getOneBooking,
  getBookingsByRoom,
  getOneBookingByRoom,
  createBooking,
  deleteBookingForRoom,
} = require("../queries/bookings");
const { getOneRoom } = require("../queries/rooms");

bookings.get("/", async (req, res) => {
  const { roomId } = req.params;
  if (roomId) {
    try {
      const room = await getOneRoom(roomId);
      const bookingsByRoom = await getBookingsByRoom(roomId);
      res.json({ room, bookingsByRoom });
    } catch (error) {
      res.json(error);
    }
  } else {
    const allBookings = await getAllBookings();
    if (allBookings[0]) {
      res.status(200).json(allBookings);
    } else {
      res.status(500).json({ success: false, data: { error: "Server Error" } });
    }
  }
});

bookings.get("/:bookingId", async (req, res) => {
  const { roomId, bookingId } = req.params;
  try {
    let result;
    if (roomId) {
      result = await getOneBookingByRoom(roomId, bookingId);
    } else {
      result = await getOneBookingById(bookingId);
    }
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Booking Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookings.post("/", async (req, res) => {
  try {
    const { roomId } = req.params;
    const roomExists = await getOneRoom(roomId);
    if (!roomExists) {
      return res.status(404).json({ error: "Room Not Found" });
    }
    const createdBooking = await createBooking(roomId, req.body);
    if (createdBooking) {
      res.json(createdBooking);
    } else {
      res.status(400).json({ error: "Failed To Create Booking" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

bookings.delete("/:bookingId", async (req, res) => {
  try {
    const { roomId, bookingId } = req.params;
    const deletedBooking = await deleteBookingForRoom(roomId, bookingId);
    if (deletedBooking) {
      res.status(200).json({
        success: true,
        payload: {
          data: deletedBooking,
        },
      });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = bookings;
