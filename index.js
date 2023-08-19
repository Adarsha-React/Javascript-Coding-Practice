console.log("Start");

const user = {
  name: "Adarsha",
  age: 31,
};

const jsonData = JSON.stringify(user);
console.log(jsonData);

localStorage.setItem("user1", jsonData);
localStorage.setItem("user2", jsonData);

localStorage.setItem("user3", jsonData);
localStorage.setItem("user4", jsonData);

const userFromLS = JSON.parse(localStorage.getItem("user1"));
console.log(userFromLS);

console.log(localStorage);

for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage.key(i));
}
