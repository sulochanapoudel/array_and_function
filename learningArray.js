
/*

---unconditional---
foreach ==> [3] ==>undefine   ( no return )

map ===>[3] ==> [*3]   (return  needed changes)

----conditional function----               
filter ==>  [3] ==> [1]
some ==> [3]==> true/false
find ==> []==> contition true first item
*/

let arr = [{ name: 'muna', age: 30 }, { name: 'sarita', age: 10 }, { name: 'sachin', age: 22 }]

//for each eg.
let each = () => {
    let e = arr.forEach(element => {
        console.log(element.name + "aaaa");     // name+aaaa
    });
    console.log(e); // undefine

}

//map example 
let map = () => {
    let e = arr.map((element, index) => {
        return element.name   // always return needed element in new array
    });
    console.log(e);
}


//conditional
// filer eg
let filter = () => {
    let e = arr.filter((element, index) => element.age > 20       // always return condition true element in new array
    );
    console.log(e);
}


// some eg
let some = () => {
    let e = arr.some((element, index) => element.age > 200       // always return condition true element boolean
    );
    console.log(e);
}

// find eg
let find = () => {
    let e = arr.find((element, index) => element.age < 25      // always first element with condition true 
    );
    console.log(e);
}

