import axios from "axios";

export function getRequest(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function convertObjectToQueryString(object) {
  return Object.keys(object)
    .map((key) => key + "=" + encodeURIComponent(object[key]))
    .join("&");
}

export function getCurrentISOString() {
  let date = new Date(),
    month = "" + getRandomArbitrary(3, 4),
    day = "",
    hours = "" + date.getHours(),
    minutes = "" + date.getMinutes(),
    seconds = "" + date.getSeconds();
  month = "0" + month;

  if (month === "03") {
    day = "" + getRandomArbitrary(20, 31);
  } else {
    day = "" + getRandomArbitrary(1, 9);
  }
  day = day.length < 2 ? "0" + day : day;
  hours = hours.length < 2 ? "0" + hours : hours;
  minutes = minutes.length < 2 ? "0" + minutes : minutes;
  seconds = seconds.length < 2 ? "0" + seconds : seconds;
  return (
    [2016, month, day].join("-") + "T" + [hours, minutes, seconds].join(":")
  );
}

export function getCurrentDateString() {
  let date = new Date(),
    month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = "" + date.getFullYear();
  month = month.length < 2 ? "0" + month : month;
  day = day.length < 2 ? "0" + day : day;
  return [year, month, day].join("-");
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
