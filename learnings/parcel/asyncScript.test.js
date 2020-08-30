const fetch = require("node-fetch");
const swapi = require("./asyncScript");
// Mock function replace fetch
const mockFetch = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () => {
      return Promise.resolve({
        count: 87,
        results: [0, 1, 2, 3, 4, 5],
      });
    },
  })
);
describe("Async API tests", () => {
  it("Calls API to get people", (done) => {
    // done specifies that test is done so that promies is fulfilled and test returns only after done
    expect.assertions(1); // asserts number of tests to pass
    swapi.getPeople(fetch).then((data) => {
      expect(data.count).toBeGreaterThan(81);
      done();
    });
  });
  it("Calls API to get people Prmoise", () => {
    // Instead of done you can also return the promise so that test is fulfilled only when promise is returned
    expect.assertions(2); // asserts number of tests to pass
    return swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toBeGreaterThan(81);
      expect(data.results.length).toBeGreaterThan(3);
    });
  });
  it("Mock function getPeople", () => {
    // Instead of done you can also return the promise so that test is fulfilled only when promise is returned
    expect.assertions(3); // asserts number of tests to pass
    return swapi.getPeople(mockFetch).then((data) => {
      expect(data.results.length).toBeGreaterThan(3);
      // Spies:spy on mock function to check function performed as expected
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    });
  });
  it("Mock function getPeople", () => {
    // Instead of done you can also return the promise so that test is fulfilled only when promise is returned
    expect.assertions(2); // asserts number of tests to pass
    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(data.count).toBeGreaterThan(81);
      expect(data.results.length).toBeGreaterThan(3);
    });
  });
});
