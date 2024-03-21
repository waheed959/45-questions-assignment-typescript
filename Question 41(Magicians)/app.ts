// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(){
   let magician:String[]=["magician1","magician2","magician3","magician4"];
   for(let name of magician){
    console.log(name)
   }
}

show_magicians()