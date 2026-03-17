// Singleton

// object literals
//Object.create // a/ways make singleton

const JsUser = {

name = Bhaskar,
  Age = 20,
  Location: "Noida",
  email: "bhaskar@gmail.com,
 
}
const mySym = Symbol("key");

const JsUser = {
  name: "Bhaskar",
  email: "bhaskar@chatgpt.com",
  [mySym]: "myKey1"
};

// Access symbol
console.log(JsUser[mySym]);

// Modify object
JsUser.email = "new@mail.com";

// Freeze object
Object.freeze(JsUser);

// Functions
JsUser.greeting = function () {
  console.log("Hello Bhaskar");
};

JsUser.greeting2 = function () {
  console.log(`Hello Bhaskar, How are you ${this.name}`);
};

JsUser.greeting();
JsUser.greeting2();


