const inputBox=document.querySelector(".search-box");
const textArea=document.querySelector(".text-area");
function workarea(){
    if(inputBox.value===""){
        alert("Please Write something Here");
    }
    else {
        let p=document.createElement("p");
p.innerText=inputBox.value;
textArea.appendChild(p);
let cross=document.createElement("span");
cross.innerText=("\u00d7");
p.appendChild(cross);

saveData();



/*cross.addEventListener("click",(e)=>{
    e.target.parentElement.remove();
   
});


p.addEventListener("click",(e)=>{
    e.target.classList.toggle("checked");
    
    });*/
    }
    saveData();
    inputBox.value="";
    }



    textArea.addEventListener("click",function(e){
        if(e.target.tagName==="P"){
    e.target.classList.toggle("checked");
    saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
            saveData();
        }
    },false);




    

        function saveData(){
            localStorage.setItem("data",textArea.innerHTML);
           }
   
   function getData(){
    textArea.innerHTML=localStorage.getItem("data");
   }
   getData();

