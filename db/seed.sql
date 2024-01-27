\c community_event_dev;

INSERT INTO rooms (room_name, floor, capacity)
VALUES
  ('Meeting Room A', 1, 5),
  ('Boardroom B', 2, 6),
  ('Hub C', 3, 10);

INSERT INTO bookings (booking_name, start_time, end_time, attendees)
VALUES
  ('Meeting 1', '2022-01-17T10:30:00', '2022-01-17T12:00:00', 'John, Jane'),
  ('Event 1', '2022-02-20T15:00:00', '2022-02-20T18:00:00', 'Alice, Bob'),
  ('Appointment 1', '2022-03-25T09:00:00', '2022-03-25T10:30:00', 'Charlie, David');