const rooms = require('./rooms.json');
const reservations = require('./reservations.json');
const requests = require('./requests.json');

const singleRooms = rooms.filter(x => x.num_beds == 1);
const doubleRooms = rooms.filter(x => x.num_beds == 2);
const reserved_dates = {};

// map ----- KEY(date), VALUES([[singel bed room ids], [double bed room ids]])


for (let reservation of reservations) {
  let startDate = new Date(reservation.checkin_date);
  let endDate = new Date(reservation.checkout_date);
  let roomId = reservation.room_id;
  let isSingleRoom = rooms.find(x => x.room_id == roomId).num_beds == 1;
  while (startDate.day != endDate.day) {
    if (startDate.day in reserved_dates) {
      if (isSingleRoom) {
        reserved_dates[startDate][0].push(roomId);
      } else {
        reserved_dates[startDate][1].push(roomId);
      }
    } else {
      if (isSingleRoom) {
        reserved_dates[startDate] = [[roomId], []]
      } else {
        reserved_dates[startDate] = [[], [roomId]]
      }
    }
    startDate += 1;
  }
}

function diff (arr1, arr2) {
  return arr1.filter(x => arr2.indexOf(x) < 0);
}

for (let request of requests) {
  // first, check if the number of rooms left is > 0, assume they want single, non-smoking
  // Total Number of Single room - reserved_dates[date][0].length > 0
  // Total Number of double room - reserved_dates[date][1].length > 0
  // If all fail, reuturn false
  // else check for smoking/non-smoking
  // Get the available rooms, find the set difference between total number of rooms with the booked rooms
  // then pick a room
  let {min_beds, is_smoker, checkin_date, checkout_date} = request;
  let rooms_available = []
  let startDate = new Date(checkin_date);
  let endDate = new Date(checkout_date);
  // 25 - 30, 26
  while (startDate.day != endDate.day) {
    let availableRooms;
    if (min_beds == 1) {
      availableRooms = diff(singleRooms.map(x => x.room_id), reserved_dates[checkin_date][0]);
      availableRooms.push(diff(doubleRooms.map(x => x.room_id), reserved_dates[checkin_date][1]));
      if (availableRooms > 0) {
        // check for is smoker
        rooms_available = availableRooms.filter(x => x.is_smoker == is_smoker);
      }
    } else {
      availableRooms = diff(doubleRooms.map(x => x.room_id), reserved_dates[checkin_date][1]);
      if (availableRooms > 0) {
        // check for is smoker
        rooms_available = availableRooms.filter(x => x.is_smoker == is_smoker);
      }
    }
    if (rooms_available.length == 0 && checkin_date == startDate.day) {
      rooms_available = availableRooms;
    } else {
      rooms_available = diff(rooms_available, availableRooms);
    }
  }
  // calculate price