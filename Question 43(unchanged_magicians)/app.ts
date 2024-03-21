// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians:string[] = ["magician1", "magician2", "magician3", "magician4"];

function make_great(magicians:string[]) {
    let great_magicians:string[]=[]
    for(let name of magicians){
        great_magicians.push(`${name} The Great Magician`) 
    }
    return great_magicians;
}
function show_magicians(){
    for(let magician of magicians){
        console.log(magician)
    }
}

let modified_array = make_great(magicians)
console.log(modified_array)
console.log("original array")
show_magicians()
console.log("Copied version")
let copy_array = make_great(magicians).slice()
console.log(copy_array)


