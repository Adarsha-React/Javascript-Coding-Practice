let count = 1;
function getData() {
  console.log("Fecthing the data...", new Date());
}

function debounce(getData, delay) {
  let context = this,
    args = arguments,
    flag = true;

  return function () {
    if (flag) {
      flag = false;
      setTimeout(() => {
        getData.call(context, args);
        flag = true;
      }, delay);
    }
  };
}

const betterFunction = debounce(getData, 1000);
