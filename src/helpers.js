function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function sleep(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

function getRandomInt({ from = 0, to = 10 } = {}) {
  return Math.floor(Math.random() * to) + from;
}

const splitStr = (sep) => (i) => (str) => str.split(sep)[i].trim();
const extractName = splitStr("-")(0);
const head = (list) => list[0];

export { capitalize, sleep, getRandomInt, extractName };
