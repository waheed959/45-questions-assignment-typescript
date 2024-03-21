function city_country(city:string,country:string):string{
    return `"${city}, ${country}"`
    
}
let reveal_location = city_country("Karachi","Pakistan")
console.log(reveal_location)
reveal_location = city_country("Murree","Pakistan")
console.log(reveal_location)
reveal_location = city_country("Islamabad","Pakistan")
console.log(reveal_location)