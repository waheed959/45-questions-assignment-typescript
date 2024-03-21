// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var arr = [];
if (arr.length == 0) {
    console.log("we need to add some users");
}
arr.splice(0, 0, "Waheed", "Irfan", "Uzair");
console.log(arr);
arr.splice(0, 3);
console.log(arr);
console.log("We need to add some users");
