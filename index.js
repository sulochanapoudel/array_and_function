let kitchen = require("./matrix")

// get topping from matrix.js......................ans: array
let getTopping = () => {
    let toppings = []
    kitchen.forEach((eachItem) => {
        eachItem.topping.forEach((top) => {
            let isIncluded = toppings.some((t) => t.type == top.type)
            if (!isIncluded) {
                toppings.push(top)
            }
        })
    })

    return toppings
}

//getting batter that contain chocolate or not............. ans: array

let getBatter = () =>{
    return kitchen.map((arg)=>{
        return arg.batters.batter.some((obj)=>obj.type=="Chocolate")
    })
}

// getting batter that contain chocolate or nor, where return type is boolen array.

// getting topping that contain sugar or not, Where return type is boolen array.
let containSugar = () => {
    let arr = getTopping()
    return arr.some((argu) => {
        return argu.type === "Sugar"
    })
}



//get name from matrix.js
let getName = () => {
    return kitchen.map((ary) => {
        return ary.name
    })
}

console.log(getBatter());// or getName()



// [true, false, true]





