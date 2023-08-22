const getData = () => {
  console.log("Fetching the data");
};

const debounce = (getData, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, delay);
  };
};

const betterFunction = debounce(getData, 1000);
