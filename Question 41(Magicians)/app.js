// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians() {
    var magician = ["magician1", "magician2", "magician3", "magician4"];
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var name_1 = magician_1[_i];
        console.log(name_1);
    }
}
show_magicians();
