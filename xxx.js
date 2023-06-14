let user = {
   name: "Masha",
   age: 16,
}

localStorage.setItem("user", JSON.stringify(user));
let value = JSON.parse(localStorage.getItem("user"));
document.write(value.name + " " + value.age + "");