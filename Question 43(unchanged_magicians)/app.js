// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ["magician1", "magician2", "magician3", "magician4"];
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_1 = magicians_1[_i];
        great_magicians.push("".concat(name_1, " The Great Magician"));
    }
    return great_magicians;
}
function show_magicians() {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var modified_array = make_great(magicians);
console.log(modified_array);
console.log("original array");
show_magicians();
console.log("Copied version");
var copy_array = make_great(magicians).slice();
console.log(copy_array);
