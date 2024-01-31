const db = require('../db/dbConfig.js');

const getAllRooms = async () => {
  try {
    const allRooms = await db.any('SELECT * FROM rooms');
    return allRooms;
  } catch (error) {
    console.error(error);
  }
};

const getOneRoom = async (id) => {
  try {
    const oneRoom = await db.one('SELECT * FROM rooms WHERE id=$1', id);
    return oneRoom;
  } catch (error) {
    console.error(error);
  }
};

const createRoom = async (room) => {
  try {
    const createdRoom = await db.one(
      'INSERT INTO rooms (room_name, floor, capacity) VALUES ($1, $2, $3) RETURNING *',
      [room.room_name, room.floor, room.capacity]
    );
    return createdRoom;
  } catch (error) {
    console.error(error);
  }
};

const getAvailableRooms = async (start_time, end_time) => {
  try {
    const availableRooms = await db.any(`
      SELECT rooms.*
      FROM rooms
      LEFT JOIN bookings ON rooms.id = bookings.room_id
      WHERE (bookings.start_time IS NULL OR bookings.end_time <= $1 OR bookings.start_time >= $2)
    `, [start_time, end_time]);

    return availableRooms;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createRoom,
  getAvailableRooms,
};
