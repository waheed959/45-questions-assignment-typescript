// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great() {
    var magician = ["magician1", "magician2", "magician3", "magician4"];
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var name_1 = magician_1[_i];
        var great_magician = "".concat(name_1, " The Great Magician");
        console.log(great_magician);
    }
}
make_great();
