let current_users:string[]=["waheed","Zahid","Murtaza","shahid","Waqas"]
let new_users:string[]=["Anees","Zahid","Umer","Abid","Waheed"]

for(let users of new_users){
    let user = users.toLowerCase();
    if(current_users.includes(user)){
        console.log(`the username ${user} is unavailable`)
    }else{
        console.log("the username is available")
    }
}




