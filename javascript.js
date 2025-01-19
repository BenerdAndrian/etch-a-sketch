const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    
        const div = document.createElement("div"); // Create a new div for each iteration
        div.setAttribute("class", "divSquare");
        container.appendChild(div); // Append the new div to the container


}
function modification(){
    let input;
   do{
    input=prompt("input a number of squares");
   }while(input>=100);
    container.innerHTML=``
    for(let i=0;i<input*input;i++){
        const div=document.createElement("div");
        div.setAttribute("class","divSquare");
        div.style.width=`${(482-2)/(input)}px`
        div.style.height=`${(482-2)/(input)}px`
        container.appendChild(div); // Append the new div to the container
}
}