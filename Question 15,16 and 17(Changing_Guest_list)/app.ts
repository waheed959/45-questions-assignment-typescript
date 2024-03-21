// Question 15
let dinner_list:string[] = ["Waheed","Hamza","Asif"]

for (let friend in dinner_list){
    console.log(`Hi my friend ${dinner_list[friend]} i invite you for the dinner .Your company will be a source of joy for me   `)
    
}
console.log(`hi friends i just got to know that ${dinner_list[0]} won't attend this function due to this busy schedule`)

dinner_list.splice(0,1,"Furqan")
console.log(dinner_list)
for (let friend in dinner_list){
    console.log(`Hi my friend ${dinner_list[friend]} i invite you for the dinner .Your company will be a source of joy for me   `)   
}
// Question 16
console.log(dinner_list)
for (let friend in dinner_list){
    console.log(`Hi my friend ${dinner_list[friend]} i invite you for the dinner .Your company will be a source of joy for me   `)
}
console.log(`hello friends i just have found a bigger table for our dinner which means that we may have more friends and more fun`)
dinner_list.unshift("Tabish")
dinner_list.splice(2,0,"Tanveer")
dinner_list.push("Rasheed")
console.log(dinner_list)
for (let friend in dinner_list){
    console.log(`Hi my friend ${dinner_list[friend]} i invite you for the dinner .Your company will be a source of joy for me   `)
}
//Question 17
console.log(dinner_list)
for (let friend in dinner_list){
    console.log(`Hi my friend ${dinner_list[friend]} i invite you for the dinner .Your company will be a source of joy for me   `)
}
console.log("i am sorry friends i can only invite two People ")


while(dinner_list.length > 2){
    let remove_Guest = dinner_list.pop()
    console.log(`My dear friend ${remove_Guest}, so i am literally sorry my new dinner table won’t arrive in time for the dinner so there is no space for much people`)
    
 }
 


// inviting to final guests

for (let friend in dinner_list){
console.log(`hello my friend ${dinner_list}, you are invited to the dinner tonight`)
}

// printing an empty list

dinner_list.splice(0,dinner_list.length)
console.log(dinner_list)









