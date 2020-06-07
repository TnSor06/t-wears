// map()
console.log("MAP");
const myArr = [1, 2, 3, 4];
const mapArr = myArr.map((eachElement) => {
  // Order is consistent in map
  return eachElement + 1;
});
console.log(myArr, mapArr);

// filter()
console.log("FILTER");
// Similar to map but here we return a boolean value for each element
const filterArr = myArr.filter((eachElement) => {
  return eachElement % 2;
});
console.log(myArr, filterArr);

// includes()
console.log("INCLUDES");
// Check if element exists in array
// Parameter 1 is a value, parameter 2 is index frm which it should start
console.log(myArr, myArr.includes(3, 1), myArr.includes(3, 3));

// find()
console.log("FIND");
// Check if element exists in array based on condition
console.log(
  myArr,
  myArr.find((element) => {
    // Return first element to be true
    // else gives undefined
    return element === 5;
  })
);

// reduce()
console.log("REDUCE");
// Process elements on array to get one single value or persist our  outcome over iteration of each element
console.log(
  myArr,
  myArr.reduce((accumulator, element) => {
    const value = accumulator + element;
    console.log(accumulator, element, value);
    return value;
  }, 2)
);

// memoization
console.log("MEMOIZATION");
// Memoization === Caching
// Storing data in place rather than requesting over over again
function addTo80(n) {
  let value = n;
  for (let index = 0; index < 80; index++) {
    value = value + 1;
  }
  return value;
}

let cache = {};

function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    let value = n;
    for (let index = 0; index < 80; index++) {
      value = value + 1;
    }
    cache[n] = value;
    return value;
  }
}

// Calling same process over over again
console.log(addTo80(4));
console.log(memoizeAddTo80(4));
console.log(memoizeAddTo80(4));

// Currying
console.log("CURRYING");
// change sequence of parameter to single parameter
const mul = (a, b) => {
  // Only two params
  return a * b;
};
const curryMul = (a) => {
  return (b) => {
    return a * b;
  };
};
const curryMulBy5 = curryMul(5);
console.log(mul(5, 3), curryMulBy5(4));

// Promises
console.log("PROMISES");
// JS events are asynchronous in nature
const myPromise = new Promise((resolve, reject) => {
  // This promise will have a value
  // Its state will be pending untill it is resolved or rejected
  if (true) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

// Handling Promise
// then can be chained in resolve promise to create a resolve chain
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Look i am here");

// aSYNC/ aWAIT
console.log("ASYNC/AWAIT");
const myAsyncFunction = async () => {
  const value1 = await getUserData();
  // Code stopped here till value not returned

  // Erroro handling in async/await
  try {
    const value2 = await getPostsFromUser(value1);
  } catch (error) {
    console.log("Error thrown", error);
  }
  return value2;
};

myAsyncFunction().then().catch();

// Git Command
// git branch -> List all branches
// git branch [branchname] -> Create to new branch
// git checkout [branchname] -> Switch to that branch
// git merge [branchname] -> Merge current branch to a branch
// git push
