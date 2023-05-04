//Object Literals
var guy = { firstName: "John", lastName: "Cena", Age: 23, Location: "Washington" };
console.log(guy);

//Function Constructor
function Person(first, last, age, title){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.title = title;
}

const Karim = new Person("Karim", "Elagamy", 22, "Full Stack Developer");
console.log(Karim);

//Object.Create()

const newPerson = Object.create(Karim);
console.log(newPerson);
newPerson.firstName = "New Person";
newPerson.lastName = "lastname";
newPerson.age = 22;
newPerson.title = "Dev";
console.log(newPerson);

//Class Keyword
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
}

const newCar = new Car("Bmw", "5 Series");
console.log(newCar);

class Ford extends Car{
    constructor(Make, Model, Price){
        super(Make, Model);
        this.Price = Price;
    }
}

const Mustang = new Ford("Ford", "Mustang", "10k");
console.log(Mustang);

const MyBtn = document.getElementById("clrButton");

MyBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
})

//Cookies
document.cookie = "Sample-cookie=This_is_a_sample_cookie; MaxAge=60"
console.log(document.cookie);

//Local Storage
localStorage.setItem('exampleItem', 'Strawberry Pancake');
console.log("First Local Storage Item: " + localStorage.getItem('exampleItem'));

//Session Storage
sessionStorage.setItem('ExampleSessionItem', 'Chocolate Chip Pancake');
console.log("First Session Storage Item: " + sessionStorage.getItem('ExampleSessionItem'));
// localStorage.clear();
// sessionStorage.clear();
localStorage.removeItem('exampleItem');
console.log("First Local Storage Item: " + localStorage.getItem('exampleItem'));
console.log("First Session Storage Item: " + sessionStorage.getItem('ExampleSessionItem'));

//Callback Example

function ShowMessage(message){
    console.log(message);
}

function waitAndDisplayMessage(callback, message, delay){
    setTimeout(function() {
        callback(message);
    }, delay);
}

waitAndDisplayMessage(ShowMessage, "This is our message", 5000);

//Closure Example

function createAdder(addend){
    return function(number){
        return number + addend;
    };
}

const addFive = createAdder(5);
const addTen = createAdder(10);

console.log(addFive(3));
console.log(addTen(5));

//Promises

function wait(delay){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Waited for " + delay + " ms");
        }, delay);
    });
}

wait(2000).then(function(message) {
    console.log(message);
})
.catch(function(error) {
    console.log(error);
});

//Chaining Promises example

function getUser(id) {
    return new Promise(function(resolve, reject) {
      // Simulate an API call to get a user
      setTimeout(function() {
        const users = [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" }
        ];
        const user = users.find(u => u.id === id);
        if (user) {
          resolve(user);
        } else {
          reject("User not found");
        }
      }, 1000);
    });
  }
  
  function getPosts(userId) {
    return new Promise(function(resolve, reject) {
      // Simulate an API call to get posts for a user
      setTimeout(function() {
        const posts = [
          { userId: 1, title: "Alice's first post" },
          { userId: 2, title: "Bob's first post" }
        ];
        const userPosts = posts.filter(p => p.userId === userId);
        if (userPosts.length > 0) {
          resolve(userPosts);
        } else {
          reject("No posts found");
        }
      }, 1000);
    });
  }
  
  getUser(1)
    .then(function(user) {
      console.log("User:", user);
      return getPosts(user.id);
    })
    .then(function(posts) {
      console.log("Posts:", posts);
    })
    .catch(function(error) {
      console.error(error);
    });
  

// API Calls

//Two ways to make API calls: XMLHttpRequests (this is the old way) and Fetch API (New way to make API calls)

//XMLHttpRequest
function reqListener(){
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
oReq.send();

function reqListener(){
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("POST", "https://jsonplaceholder.typicode.com/posts");
oReq.send("title=Example POST Request&body=Antra.com&userId=1");

//Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'Example Post Request',
        body: 'Antra.com',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => response.json())
.then((json) => console.log(json));

const inputText = document.getElementById("emailText");
inputText.addEventListener('input', ValidateEmail);

//Regular Expressions
function ValidateEmail(){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //karim@google.com
    if (inputText.value.match(mailFormat)){
        alert("Valid Email Address!");
        // document.myForm.Email.focus();
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        document.myForm.Email.focus();
        return false;
    }
}