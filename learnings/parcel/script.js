const googleDB = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animes.com",
  "marvel.com",
  "myfavcats.com",
  "catpics.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cat", googleDB));

module.exports = { googleSearch };
