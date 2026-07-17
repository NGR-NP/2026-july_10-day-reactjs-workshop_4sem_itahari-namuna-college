
// function sayHello(name, ...parameters) {
//     console.log(`Hello, ${name}!`)

//     console.log("parameters:", parameters)
// }

// sayHello("Avi", "hel", "okay")

// const hello = () => console.log('hello , arrow function ')




// ()=> 
    
    // true ? console.log("true") : console.log("false")


const datas =[
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
]


// datas.map(   (val)=> console.log(`val: ${val.name}`)  )

const findId = 1
// datas.find( (val)=> val.id == findId ? console.log(`val: ${val.name}`) : console.log("not found")    )

const invaludId = 3

console.log(datas.filter((value)=> value.id !== invaludId))
