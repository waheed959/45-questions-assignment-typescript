// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string="Large",message:string="I love learning typescript"){
    console.log(`Make a T-shirt of ${size} size with the message "${message}" in it`)
}

// large shirt with default message
make_shirt("large")
//medium size with default string
make_shirt("Medium")
// customized shirt 
make_shirt("small","I love learning GEN AI")
