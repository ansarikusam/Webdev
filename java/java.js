//do while
//while loop
//for loop

// let x=10
// while (x>5){
//     console.log("hello");
//     x=x-1
//     break;
// }


// for(let i=0;i<5;i++){
//     console.log(i)
// }


// let array=[10,20,30,40,50]

// console.log(array)
// for(let i=0;i<5;i++){
//     console.log(array[i])
// }


// let array=[10,20,30,40,50,60,70,80,90,100]

// console.log(array)
// for(let i=0; i<=array.length; i++){
//     console.log(array[i])
// }

// let n=20;

// for(i=0; i<=n; i++){

//     console.log(i)
//     i=i+1;
// }


// let n=20;

// for(i=1; i<=n; i=i+2){

//     console.log(i)
// }


// let n=20;

// for(i=0; i<=n; i++){

//     if(i%2==0){
//         console.log(i + " is even")
//     }

// }


// let rows= Number(prompt("Enter the number of rows = "))

// let pattern = "";

// for(let i=1; i<=rows; i++){

//    for(let j=1; j<=i; j++){

//         pattern=pattern + "*";
// }
//     pattern= pattern + "\n";
// }
// console.log(pattern);



// let rows= Number(prompt("Enter the number of rows = "))

// let pattern = "";

// for(let i=rows; i<=rows; i--){

//    for(let j=1; j<=i; j++){

//         pattern=pattern + "*";
// }
//     pattern= pattern + "\n";
// }
// console.log(pattern);



// let rows= Number(prompt("Enter the number of rows = "))


// for(let i=1; i<=rows; i++){

//     let pattern= "";
//     let space = "";

//     for(let k=rows-i;k>0;k--)
//         {
//             space= space+ " ";
//         }

//    for(let j=0; j<i; j++){

//         pattern=pattern + "*";
// }
// console.log(space + pattern);
// }



// let rows= Number(prompt("Enter the number of rows = "))

// let pattern = "";

// for(let i=1; i<=rows; i++){

//    for(let j=1; j<=i; j++){

//         pattern=pattern + j;
// }
//     pattern= pattern + "\n";
// }
// console.log(pattern);



//DOM

// let a = 10
// document.getElementById("show").innerText=a


// let b= 30

// document.getElementsByClassName("heading").innerText=b

// let b = 30

// document.querySelector("heading").innerHTML=b


// const show=() =>{

//     let a=20
//     let b=50
//     document.getElementById("show").innerText=b
//     document.getElementById("show").style.backgroundColor="pink"
//     document.getElementById("show").style.fontSize="50px"
//     document.getElementById("show").style.height=
//     document.getElementById("show").style
//     document.querySelector("heading").innerHTML=b

// }

// function add(){


//    let num1= Number(document.getElementById("n_1").value)
//    let num2=  +(document.getElementById("n_2").value)

//     let result = num1 + num2
//     document.getElementById("showresult").innerHTML=result
// }

// function sub(){


//     let num1= Number(document.getElementById("n_1").value)
//     let num2=  +(document.getElementById("n_2").value)

//     let result = num1 - num2
//     document.getElementById("showresult").innerHTML=result
// }

// function multiply(){


//     let num1= Number(document.getElementById("n_1").value)
//     let num2=  +(document.getElementById("n_2").value)

//     let result = num1 * num2
//     document.getElementById("showresult").innerHTML=result
// }

// function divide(){


//     let num1= Number(document.getElementById("n_1").value)
//     let num2=  +(document.getElementById("n_2").value)

//     let result = num1 / num2
//     document.getElementById("showresult").innerHTML=result
// }





function calculate(input) {
    
        let num1= Number(document.getElementById("n_1").value)
        let num2=  +(document.getElementById("n_2").value)

    let result;

    switch (input) {
        case '+':
            result = num1 + num2;
            document.getElementById("showresult").innerHTML = result;
            break;

        case "-":
            result = num1 - num2;
            document.getElementById("showresult").innerHTML = result;
            break;

        case "*":
            result = num1 * num2;
            document.getElementById("showresult").innerHTML = result;
            break;

        case "/":
            result = num1 / num2;
            document.getElementById("showresult").innerHTML = result;
            break;

        default:
            document.getElementById("showresult").innerHTML = "Invalid Input";
            break;
    }

}
    // function calculate(input) {s
    //     let num1= Number(document.getElementById("n_1").value)
    //     let num2=  +(document.getElementById("n_2").value)


    //     if(input==='+')
    //         {
    //             let result = num1 + num2
    //              document.getElementById("showresult").innerHTML=result
    //         }
    //         else if(input==='-'){
    //             let result = num1 - num2
    //              document.getElementById("showresult").innerHTML=result
    //         }
    //         else if(input==='*'){
    //             let result = num1 * num2
    //              document.getElementById("showresult").innerHTML=result
    //         }
    //         else if(input==='/'){
    //             let result = num1 / num2
    //              document.getElementById("showresult").innerHTML=result
    //         }
    //         else {
    //             console.log("Please use correct button")
    //         }
    //      }




