const db = require("../db/dbConfig");

const getBookingsByRoom = async (roomId) => {
  try {
    const bookings = await db.any(
      "SELECT bookings.id, bookings.booking_name, bookings.start_time, bookings.end_time, bookings.attendees, rooms.room_name, rooms.floor, rooms.capacity FROM bookings JOIN rooms ON rooms.id = bookings.room_id WHERE rooms.id = $1",
      roomId
    );
    return bookings;
  } catch (error) {
    console.error(error);
  }
};

const getOneBookingByRoom = async (roomId, id) => {
  try {
    const booking = await db.one(
      "SELECT bookings.id, bookings.booking_name, bookings.start_time, bookings.end_time, bookings.attendees, rooms.room_name, rooms.floor, rooms.capacity FROM bookings JOIN rooms ON rooms.id = bookings.room_id WHERE rooms.id = $1 AND bookings.id = $2",
      [roomId, id]
    );
    return booking;
  } catch (error) {
    console.error(error);
  }
};

const createBooking = async (roomId, booking) => {
  try {
    const { booking_name, start_time, end_time, attendees } = booking;
    const createdBooking = await db.one(
      "INSERT INTO bookings (booking_name, start_time, end_time, attendees, roomId) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [booking_name, start_time, end_time, attendees, roomId]
    );
    return createdBooking;
  } catch (error) {
    console.error(error);
  }
};

const deleteBookingForRoom = async (roomId, id) => {
  try {
    const deletedBooking = await db.one(
      "DELETE FROM bookings WHERE room_id = $1 AND id = $2 RETURNING *",
      [roomId, id]
    );
    return deletedBooking;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getBookingsByRoom,
  getOneBookingByRoom,
  createBooking,
  deleteBookingForRoom
};
