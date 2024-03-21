let user_name:string[]=["hamza","yasir","tabish","admin","waheed"]

for(let greet of user_name){
    if (greet == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${greet}, thank you for logging in again`)
    }
}
