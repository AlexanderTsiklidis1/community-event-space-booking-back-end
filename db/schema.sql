DROP DATABASE IF EXISTS community_event_dev;
CREATE DATABASE community_event_dev;

\c community_event_dev;

CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    room_name TEXT NOT NULL,
    floor INTEGER,
    capacity INTEGER
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    booking_name TEXT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    attendees TEXT,
    room_id INTEGER REFERENCES rooms (id) ON DELETE CASCADE,
    floor TEXT NOT NULL,
    room_name TEXT NOT NULL
);