let button=document.querySelector('button');
let input=document.querySelector('input');
let ul=document.querySelector('ul');


button.addEventListener("click", function(){
   let taskItem=document.createElement("li");
   taskItem.innerText=input.value;

   let taskDel=document.createElement("button");
   taskDel.innerText="x";
   taskDel.classList.add("x");

   taskItem.appendChild(taskDel);

   ul.appendChild(taskItem);
   input.value="";
});

ul.addEventListener("click", function(event){
if(event.target.nodeName=="BUTTON"){
   let listItem = event.target.parentElement;
   listItem.remove();
}
});


// let delBtns=document.querySelectorAll(".btn");
// for(delButton of delBtns){
//    delButton.addEventListener("click", function() {
//       let par = this.parentElement;
//       console.log(par);
//       par.remove();
//    });

// }