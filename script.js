let two=document.getElementById("copyer");
let three=document.getElementById("twicer");
let four=document.getElementById("hover");
let x = document.getElementById("animate");

let i = 0;
setInterval(function(){
  let list = ["pink","plum", "skyblue"];
  x.style.color= list[i];
  i++;
  if (i===list.length){
    i = 0;
  }
}, 2500)


function cards2(){
  two.style.color="";

  two.style.backgroundImage="url('https://i.pinimg.com/736x/14/6f/7c/146f7c57836e709c8f02486748e88cb2.jpg')"
  two.innerHTML = "How do you find Will Smith in the snow? Just follow the fresh prints.";
}

function cards3(){
  three.style.color="white";
  three.style.backgroundColor="orange";
  three.innerHTML = "Are you the sun? Because I want you to stay 93.287 million miles away from me. 😎😎😎😎";
  
}

function cards4(){
  four.innerHTML = '"When you leave, all you take is your memories."';
  four.style.fontFamily = "cursive";
  four.style.color = "white";
  four.style.backgroundImage = "url('https://img2.baidu.com/it/u=3048033383,3549037764&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500')";
  four.style.backgroundSize = "cover";
} 


two.addEventListener("copy", cards2);
three.addEventListener("dblclick",cards3);
four.addEventListener("mouseenter",cards4);
