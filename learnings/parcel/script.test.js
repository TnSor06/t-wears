const { googleSearch } = require("./script");

// Dummy Data
dbMock = [
  "cats.com",
  "cheesepuff.com",
  "fruits.com",
  "manga.com",
  "dc.com",
  "myfavcats.com",
  "catpics.com",
  "catpics2.com",
  "catpics3.com",
  "testtest.com",
];

it("basic_test", () => {
  expect("hello").toBe("hello");
});

describe("Google Search", () => {
  it("search google", () => {
    const res1 = googleSearch("testtest", dbMock);
    expect(res1).toEqual(["testtest.com"]);
    const res2 = googleSearch("cats", dbMock);
    expect(res2).toEqual(["cats.com", "myfavcats.com"]);
  });

  it("work with undefined and null input", () => {
    const res1 = googleSearch(undefined, dbMock);
    expect(res1).toEqual([]);
    const res2 = googleSearch(null, dbMock);
    expect(res2).toEqual([]);
  });

  it("no more than three matches", () => {
    const res1 = googleSearch("cat", dbMock).length;
    expect(res1).toEqual(3);
  });
});
