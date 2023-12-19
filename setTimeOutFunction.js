// const delayedFunc = (args) => {
//     console.log("Hello after " +args+ " sec");
// }

// let timeId = setTimeout(delayedFunc, 4 * 1000, "4")
// setTimeout(delayedFunc, 8 * 1000, "8")

// clearTimeout(timeId);

// function printMessage() {
//     let i = 0;
//     let intervalId = setInterval(() => {
//         console.log("Hello World " + i)
//         i++;
//         if(i>5) {
//             console.log("Done");
//             clearInterval(intervalId)
//         }
//     }, 1000)
// }
// printMessage();


const timerId = setInterval( () => {
    console.log("Hello world")
}, i*1000)

let foreverFunc = () => {
    
    setTimeout(()=>console.log("Hello World... " +i), i*1000)
    i++;
}
foreverFunc(1);