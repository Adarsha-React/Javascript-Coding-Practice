let count = 1;
function getData() {
  console.log("Fecthing the data...", count++);
}

function debounce(getData, delay) {
  let context = this,
    args = arguments,
    timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.call(context, args);
    }, delay);
  };
}

const betterFunction = debounce(getData, 500);
