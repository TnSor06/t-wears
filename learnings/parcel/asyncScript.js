const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = { getPeople, getPeoplePromise };
