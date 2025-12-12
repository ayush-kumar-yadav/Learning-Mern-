const obj = {
    name: {
        fullname:{
            firstname: "John",
            lastname: "Doe"
        }
    },
    age :20,
    city: "New York",
    profession: ["Developer","student"],
    login : true,
}
console.log(obj);
console.log(obj.name);
console.log(obj["age"]);  // 2 ways to access the properties of an object
// js takes keys as string by default therefore use ""
obj.age = 21; // overwrite 
//obj.freeze(name); // freeze the property
//obj.name = "newname"; // this will not work due to freeze
//console.log(obj.name);
console.log(obj.name.fullname.firstname); // accessing nested object

