console.log("Object");

// arr -> index:value
// obj -> key:value

//  {   key:value , ....}
// arr[0]

const userData = {
    name: "Ram",
    age: 21,
    place: "Madurai",
    "Technologies Covered": ["HTML","CSS","JS"]
}

console.log(userData);

console.log(userData.place);

console.log(userData["age"]);

console.log(userData["Technologies Covered"]);


const UserDataKeys = Object.keys(userData)
const UserDataValues = Object.values(userData)

console.log(UserDataKeys);
console.log(UserDataValues);

const userDataEntries = Object.entries(userData)

console.log(userDataEntries);


const PersonDetails = [
    ["phone", "9876543210"],
    ["Type" , "Employee"]
]

const PersonObj = Object.fromEntries(PersonDetails)
console.log(PersonObj);


console.log(Object.isFrozen(PersonDetails));

console.log(Object.isSealed(PersonDetails));

// Object.seal(userData)
Object.freeze(userData)

userData.email = "ram123@gmail.com"

console.log(userData);

userData.age = 26

console.log(userData);


delete userData.place

console.log(userData);

console.log(userData,PersonObj);



// copy , for catch everything
//  ... -> 3 dot
// rest spread - array , object,
// spread - func
const userObject = { ...userData , ...PersonObj }
// const userObject = { userData , PersonObj }

console.log("User Object ",userObject);

userObject.JobDetails = {
    title : "Full stack Developer",
    type: "full time"
}

const { name,age,place, phone, Type ,email } = userObject

console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.place);
console.log(userObject.phone);
console.log(userObject.Type);


console.log(name);
console.log(age);
console.log(place);
console.log(phone);
console.log(Type);
console.log(email);

console.log(userObject.JobDetails.type);


// https://chatgpt.com/share/6a8d9934-ac30-83e8-b529-8b9eed00ac98
