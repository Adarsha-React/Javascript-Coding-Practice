console.log("Start");

try {
  console.log("Inside try block - first line");

  someFunction();

  console.log("Inside try block - last line");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally block, runs whatever it is");
}

console.log("End");
