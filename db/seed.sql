\c community_event_dev;

INSERT INTO rooms (room_name, floor, capacity)
VALUES
  ('Meeting Room A', 1, 5),
  ('Boardroom B', 2, 6),
  ('Hub C', 3, 10);

INSERT INTO bookings (booking_name, start_time, end_time, attendees, room_id, room_name, floor, start_date, end_date)
VALUES
  ('Meeting 1', '10:30AM', '12:00PM', 'Anthony & Michael', 1, 'Meeting Room A', 1, '2024-02-02', '2024-02-02'),
  ('Meeting 2', '12:01PM', '12:30PM', 'Alex & Jess', 1, 'Meeting Room A', 1, '2024-02-02', '2024-02-02'),
  ('Event 1', '4:30PM', '6:00PM', 'Michael & Aisha', 2, 'Boardroom B', 2, '2024-02-03', '2024-02-03'),
  ('Appointment 1', '9:00AM', '10:30AM', 'Charlie & David & Matthew & Jennifer & Albert & Ryan', 3, 'Hub C', 3, '2024-02-03', '2024-02-03');