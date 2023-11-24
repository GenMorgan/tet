// console.log("what is your name")

// let x=6
// let y=7

// document.write(x+y)

// let p1 = document.getElementById("demo")
//  p1.innerText= "you suck"

//  function fun(){
//     alert("YOu touched me")
//     document.getElementById("click").innerText = Date()
//  }

//  function fun2(){
//     document.getElementById("click").innerText = ""
//  }



function add(){
    let x = Number(document.getElementById("inp1").value)
    let y = Number(document.getElementById("inp2").value)
    let z = x+y;
    document.getElementById("res").innerText = `Addition of ${x} and ${y} is ${z}`
}

function sub(){
    let x = Number(document.getElementById("inp1").value)
    let y = Number(document.getElementById("inp2").value)
    let z = x-y;
    document.getElementById("res").innerText = `Difference betwen ${x} and ${y} is ${z}`;
}

function mul(){
    let x = Number(document.getElementById("inp1").value)
    let y = Number(document.getElementById("inp2").value)
    let z = x*y;
    document.getElementById("res").innerText = `Product of ${x} and ${y} is ${z}`;
}

function div(){
    let x = Number(document.getElementById("inp1").value)
    let y = Number(document.getElementById("inp2").value)
    let z = x/y;
    document.getElementById("res").innerText = `Division of ${x} by ${y} is ${z}`;
}

function inK(){
    let d = document.forms ["takein"]["int"].value
    if(d== ""){
        alert("DCS MUST BE FILLED")
    }
}

let hideImage = setInterval(hide, 3000);


function show(){
    document.getElementById("yag").style.opacity= 1
}

function hide(){
    document.getElementById("yag").style.opacity = 0
    
   
    
}



setInterval(newq, 1000);

function newq(){
    let tama = new Date();
    document.getElementById("demo").innerHTML =  "the time is" + tama.getHours() +":"+ tama.getMinutes() + ":"+ tama.getSeconds();

}
    
