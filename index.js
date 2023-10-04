function duplicateCountCheck(str) {
  const mapOfStr = {};
  str
    .split("")
    .forEach(
      (item) => (mapOfStr[item] = mapOfStr[item] ? mapOfStr[item] + 1 : 1)
    );

  let max = 0;
  let result = [];
  for (let key in mapOfStr) {
    if (mapOfStr[key] >= max) {
      max = mapOfStr[key];
      result.push({ max, key });
    }
  }
  console.log(mapOfStr);
  console.log(result);
}

duplicateCountCheck("hlloehsghelows");
