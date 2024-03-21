 let oridinal_no:string[]=["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"]
 console.log(oridinal_no)

 for(let no of oridinal_no){
    if(no.includes("st")){
        console.log("1st")
    }
    if(no.includes("nd")){
        console.log("nd")
    }
    if(no.includes("rd")){
        console.log("3rd")
    }else{
        console.log(no)
    } 
 }