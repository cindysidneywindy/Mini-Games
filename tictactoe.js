let boxes= document.getElementsByTagName("td");

let body = document.getElementsByTagName("body")[0];
let heading3 = document.getElementsByTagName("h3")[1];
let win= document.getElementsByTagName("div")[0];
let win1=document.getElementById("winner");
let tie = document.getElementsByTagName("div")[1];


let turn=0

let combos = [[0,1,2], [3,4,5], [6,7,8],[0, 3, 6],[1,4,7],[2,5,8],[0,4,8], [2, 4, 6]];

// boxes.forEach((item)=> item.addEventListener("click", add))
let check =[]
for (let i=0; i<boxes.length; i++){
  check.push(false);
}


for (let item = 0; item<boxes.length; item++){
  
  boxes[item].addEventListener("click", () => {if 
    (!check[item]){

      
      if (turn % 2 === 0){
        boxes[item].innerHTML = "X";
        boxes[item].style.fontSize = "30px";
        heading3.innerHTML = "O's turn.";
        heading3.style.color = "blue";
        
        
      }
  
      else{
        boxes[item].innerHTML = "O";
        boxes[item].style.fontSize = "30px";
        heading3.innerHTML = "X's turn.";
        heading3.style.color = "red";
      }
      turn+=1;
      check[item]=!check[item];

    }                                       
                                               

  for (let i = 0; i < combos.length; i++){
        if ((boxes[combos[i][0]].innerHTML===boxes[combos[i][1]].innerHTML && boxes[combos[i][1]].innerHTML===boxes[combos[i][2]].innerHTML) && (boxes[combos[i][2]].innerHTML === "X" || boxes[combos[i][2]].innerHTML === "O")){
          win1.style.position = "absolute";
          win1.style.top = 0;
          win1.style.left= 0; 
          win1.style.width = "100%";
          win1.style.height = "100%";
          win1.style.display = "block";
          console.log("win");
          win1.style.backgroundColor = "white";
        
  }

}
  }
  )
}



