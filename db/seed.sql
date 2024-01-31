\c community_event_dev;

INSERT INTO rooms (room_name, floor, capacity)
VALUES
  ('Meeting Room A', 1, 5),
  ('Boardroom B', 2, 6),
  ('Hub C', 3, 10);

INSERT INTO bookings (booking_name, start_time, end_time, attendees, room_id, room_name)
VALUES
  ('Meeting 1', '2022-01-17T10:30:00', '2022-01-17T12:00:00', 'John, Jane', 1, 'Meeting Room A'),
  ('Meeting 2', '2022-01-17T10:30:00', '2022-01-17T12:00:00', 'John, Jane', 1, 'Meeting Room A'),
  ('Event 1', '2022-02-20T15:00:00', '2022-02-20T18:00:00', 'Alice, Bob', 2, 'Boardroom B'),
  ('Appointment 1', '2022-03-25T09:00:00', '2022-03-25T10:30:00', 'Charlie, David', 3, 'Hub C');