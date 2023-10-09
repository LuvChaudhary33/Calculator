let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".buttons");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', (e) =>{
    if(screen.value === ""){
        screen.value = "Please Enter";
    }
    else{
        screen.value = eval(screen.value);
    } 
});
document.addEventListener('keypress', (e)=>{
    if(e.key == "="){
        if(screen.value === ""){
            screen.value = "Please Enter";
        }
        else{
            screen.value = eval(screen.value);
        }
    } 
});

clear.addEventListener('click', (e) =>{
    screen.value = "";
});

document.addEventListener('keypress', (e) =>{
    if(e.key == "c" || e.key == "C"){
        screen.value = "";
    }
});

document.addEventListener('keypress', (e)=> { 
    if(e.key.charCodeAt(0) > 41 && e.key.charCodeAt(0) < 58){
        screen.value += e.key;
    }
});


let arr = ['Mumbai', 'Luv' , 'Agra', 'Delhi', 'Himachal'];

const myFunc = ()=>{
    let i = (Math.random()*4);
    i = Math.floor(i);
    let word = arr[i];
    let j = 0;
    const id = setInterval(() =>{
        document.querySelector("h1").innerHTML += word[j];
        j++;
        if(j > word.length){
            clearInterval(id);
            document.querySelector("h1").innerHTML = "";
            setInterval(myFunc(), 1000);
        }
    }, 500);
}
myFunc();
