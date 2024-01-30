const express = require("express");
const { getAllRooms, getOneRoom, createRoom } = require("../queries/rooms.js");

const bookingsController = require("./bookingsController.js");

const rooms = express.Router({ mergeParams: true });

rooms.use("/:roomId/bookings", bookingsController);

rooms.get("/", async (req, res) => {
  const allRooms = await getAllRooms();
  if (allRooms[0]) {
    res.status(200).json(allRooms);
  } else {
    res.status(500).json({ success: false, data: { error: "Server Error" } });
  }
});

rooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneRoom = await getOneRoom(id);
  if (oneRoom) {
    res.json(oneRoom);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

rooms.post("/", async (req, res) => {
  try {
    const createdRoom = await createRoom(req.body);
    res.json(createdRoom);
  } catch (error) {
    res.send(error);
  }
});

module.exports = rooms;
